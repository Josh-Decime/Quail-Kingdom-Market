import { AppState } from '../AppState';
import quailImg from '@/assets/img/Quail-Silhouette-20opacity.png';

class MagicItemService {
    // Handles rolling all of the dice
    static rollDie(sides, times = 1, modifier = 0) {
        console.log('sides:', sides, 'times:', times, 'modifier:', modifier);
        let total = 0;
        let rolls = [];
        for (let i = 0; i < times; i++) {
            const roll = Math.ceil(Math.random() * sides);
            rolls.push(roll);
            total += roll;
        }
        console.log(`Rolled ${times}d${sides}: [${rolls.join(", ")}] + ${modifier}`);
        return total + modifier;
    }

    // Combines dice roll value & modifiers, for the total value used to find the magic item table
    static calculateTotalRoll(tableRoll, modifier) {
        return (tableRoll || 0) + (modifier || 0);
    }

    // Takes the input value of number of items available & makes that many percentile roll fields available
    static initializePercentileRolls(count) {
        return Array(count || 0).fill(null);
    }

    // Finds which magic item matches the magic item table & item number
    static findMagicItems(totalRoll, percentileRolls) {
        const tableKey = Object.keys(AppState.magicItems).find(key => {
            const range = AppState.magicItems[key].range;
            return totalRoll >= range[0] && totalRoll <= range[1];
        });

        if (!tableKey) return [];

        return percentileRolls.map(roll => {
            let item = AppState.magicItems[tableKey].items.find(
                item => roll >= item.range[0] && roll <= item.range[1]
            );

            return item || null;
        }).filter(Boolean);
    }

    // Just displays the gold cost formula for each rarity
    static getPriceFormula(rarity) {
        switch (rarity) {
            case "Common":
                return "(1d6 + 1) × 10 gp";
            case "Uncommon":
                return "1d6 × 100 gp";
            case "Rare":
                return "2d10 × 1,000 gp";
            case "Very Rare":
                return "(1d4 + 1) × 10,000 gp";
            case "Legendary":
                return "2d6 × 25,000 gp";
            default:
                return "N/A";
        }
    }

    // Passes the dice to rollPriceForItem
    static getDieForRarity(rarity) {
        switch (rarity) {
            case "Common": return { sides: 6, times: 1 };
            case "Uncommon": return { sides: 6, times: 1 };
            case "Rare": return { sides: 10, times: 2 };
            case "Very Rare": return { sides: 4, times: 1 };
            case "Legendary": return { sides: 6, times: 2 };
            default: return 1;
        }
    }

    // Calculates the price for both rolled & user input values
    static calculatePriceFromRoll(rarity, roll) {
        switch (rarity) {
            case "Common":
                return (roll + 1) * 10;
            case "Uncommon":
                return roll * 100;
            case "Rare":
                return roll * 1000;
            case "Very Rare":
                return (roll + 1) * 10000;
            case "Legendary":
                return roll * 25000;
            default:
                return "N/A";
        }
    }

    static getTextSize(description) {
        const length = description.length;
        const isMobile = window.innerWidth < 768;
        let fontSize = '1.8rem';
        if (isMobile) {
            if (length > 1000) fontSize = '0.8rem'; // Shrink sooner and more
            else if (length > 700) fontSize = '0.9rem';
            else if (length > 500) fontSize = '1.0rem';
            else if (length > 300) fontSize = '1.2rem';
            else fontSize = '1.5rem'; // Base smaller on mobile
        } else {
            if (length > 1200) fontSize = '0.9rem';
            else if (length > 800) fontSize = '1rem';
            else if (length > 600) fontSize = '1.2rem';
            else if (length > 400) fontSize = '1.4rem';
        }
        return { fontSize };
    }

    static getHeaderSize(item) {
        const length = item.description.length;
        const isMobile = window.innerWidth < 768;
        let fontSize = '2.3rem';
        if (isMobile) {
            if (length > 1000) fontSize = '1.4rem'; // Shrink sooner and more
            else if (length > 700) fontSize = '1.6rem';
            else if (length > 500) fontSize = '1.8rem';
            else if (length > 300) fontSize = '1.9rem';
            else fontSize = '2.0rem'; // Base smaller on mobile
        } else {
            if (length > 1200) fontSize = '1.6rem';
            else if (length > 800) fontSize = '1.8rem';
            else if (length > 600) fontSize = '2.0rem';
            else if (length > 400) fontSize = '2.1rem';
        }
        return { fontSize };
    }

    static getSubTextSize(item) {
        const length = item.description.length;
        const isMobile = window.innerWidth < 768;
        let fontSize = '1.3rem';
        if (isMobile) {
            if (length > 1000) fontSize = '1.0rem'; // Shrink sooner and more
            else if (length > 700) fontSize = '1.1rem';
            else fontSize = '1.2rem'; // Base smaller on mobile
        } else {
            if (length > 1200) fontSize = '1.1rem';
            else if (length > 800) fontSize = '1.2rem';
        }
        return { fontSize };
    }



    // SECTION this adds & controls the random quail silhouettes

    static quails = []; // Store the quail images for repositioning
    static lastWidth = 0; //checks if window size changes
    static shuffleTimeout = null; // Track the timeout to prevent multiple timers

    static addRandomQuails() {
        if (this.quails.length > 0) {
            this.repositionQuails();
            return;
        }

        const numQuails = Math.floor(Math.random() * 5) + 3; // Random number between 3 and 7
        const minSize = 50; // quail img sizing
        const maxSize = 100;

        for (let i = 0; i < numQuails; i++) {
            const img = document.createElement('img');
            img.src = quailImg;
            img.style.position = 'absolute';
            img.style.zIndex = '9999';
            img.style.pointerEvents = 'none';
            const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
            img.style.width = `${randomSize}px`;
            img.style.height = 'auto'; // Maintain aspect ratio
            if (Math.random() < 0.5) {
                img.style.transform = 'scaleX(-1)';
            }

            // Generate random opacity between 25% and 100%
            const randomOpacity = (Math.random() * 0.75) + 0.25; // 0.25 to 1.0
            img.dataset.maxOpacity = randomOpacity; // Store the max opacity for this quail

            img.style.opacity = '0'; // Start with fade out
            document.body.appendChild(img);
            this.quails.push(img);
        }

        this.lastWidth = document.documentElement.clientWidth;
        this.repositionQuails();
        this.scheduleNextShuffle();
        this.setupResizeListener();
    }

    static repositionQuails() {
        const pageWidth = document.documentElement.clientWidth;
        const pageHeight = document.documentElement.scrollHeight;
        const positions = [];

        this.quails.forEach(img => {
            let newLeft, newTop;
            let attempts = 0;
            const maxAttempts = 50;
            const quailSize = parseInt(img.style.width);

            do {
                newLeft = Math.random() * (pageWidth - quailSize);
                newTop = Math.random() * (pageHeight - quailSize);
                attempts++;
            } while (attempts < maxAttempts && positions.some(pos =>
                Math.abs(pos.left - newLeft) < quailSize && Math.abs(pos.top - newTop) < quailSize
            ));

            if (attempts >= maxAttempts) {
                newLeft = Math.random() * (pageWidth - quailSize);
                newTop = Math.random() * (pageHeight - quailSize);
            }

            img.style.transition = 'opacity 1s ease'; // Fade transition
            // Use the stored max opacity instead of hardcoded '1'
            img.style.opacity = img.dataset.maxOpacity; // Fade in to individual opacity
            img.style.left = `${newLeft}px`;
            img.style.top = `${newTop}px`;

            positions.push({ left: newLeft, top: newTop });
        });
    }

    static scheduleNextShuffle() {
        // Clear any existing timeout first
        if (this.shuffleTimeout) {
            clearTimeout(this.shuffleTimeout);
        }

        const randomInterval = Math.floor(Math.random() * 21) + 10; // 10-30 seconds
        this.shuffleTimeout = setTimeout(() => {
            this.quails.forEach(img => {
                img.style.transition = 'opacity 1s ease'; // Fade out transition
                img.style.opacity = '0';
                setTimeout(() => {
                    this.repositionQuails();
                    // Use individual max opacity for each quail when fading back in
                    this.quails.forEach(q => q.style.opacity = q.dataset.maxOpacity);
                }, 1000); // Match fade duration
            });
            this.scheduleNextShuffle();
        }, randomInterval * 1000);
    }

    static setupResizeListener() {
        window.addEventListener('resize', () => {
            const currentWidth = document.documentElement.clientWidth;
            if (currentWidth !== this.lastWidth) {
                this.quails.forEach(img => img.style.opacity = '0');
                setTimeout(() => {
                    this.repositionQuails();
                    // Use individual max opacity for each quail after resize
                    this.quails.forEach(q => q.style.opacity = q.dataset.maxOpacity);
                    this.lastWidth = currentWidth;
                }, 1000);
            }
        });
    }

    static clearAllQuails() {
        // Clear timeout to stop the shuffle cycle
        if (this.shuffleTimeout) {
            clearTimeout(this.shuffleTimeout);
            this.shuffleTimeout = null;
        }

        // Clear quails from DOM and array
        this.quails.forEach(img => {
            img.remove();
        });
        this.quails = [];
    }



}


export default MagicItemService;
