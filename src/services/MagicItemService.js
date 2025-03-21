import { AppState } from '../AppState';

class MagicItemService {
    static rollDie(sides, times = 1, modifier = 0) {
        let total = 0;
        for (let i = 0; i < times; i++) {
            total += Math.ceil(Math.random() * sides);
        }
        return total + modifier;
    }

    static calculateTotalRoll(tableRoll, modifier) {
        return (tableRoll || 0) + (modifier || 0);
    }

    static initializePercentileRolls(count) {
        return Array(count || 0).fill(null);
    }

    // Determines price based on rarity using Xanathar’s Guide pricing
    static calculatePrice(rarity) {
        switch (rarity.toLowerCase()) {
            case "common":
                return (this.rollDie(6) + 1) * 10;
            case "uncommon":
                return this.rollDie(6) * 100;
            case "rare":
                return this.rollDie(10, 2) * 1000;
            case "very rare":
                return (this.rollDie(4) + 1) * 10000;
            case "legendary":
                return this.rollDie(6, 2) * 25000;
            default:
                return "Price Unknown";
        }
    }

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

            if (item) {
                item.price = this.calculatePrice(item.rarity); // Assign price to item
            }

            return item || null;
        }).filter(Boolean);
    }

    // Currently work in progress to get pricing working
    static getRarityForTable(totalRoll) {
        const tableKey = Object.keys(AppState.magicItems).find(key => {
            const range = AppState.magicItems[key].range;
            return totalRoll >= range[0] && totalRoll <= range[1];
        });

        // Ensure the table exists and has items before trying to access rarity
        if (tableKey && AppState.magicItems[tableKey].items.length > 0) {
            return AppState.magicItems[tableKey].items[0].rarity; // Get rarity from first item
        }

        return "Unknown"; // Default if no valid table is found
    }
    static calculatePriceForItem(item) {
        if (!item || !item.rarity) return "N/A"; // Safety check

        switch (item.rarity) {
            case "Common":
                return (this.rollDie(6) + 1) * 10;
            case "Uncommon":
                return this.rollDie(6) * 100;
            case "Rare":
                return (this.rollDie(10) + this.rollDie(10)) * 1000;
            case "Very Rare":
                return (this.rollDie(4) + 1) * 10000;
            case "Legendary":
                return (this.rollDie(6) + this.rollDie(6)) * 25000;
            default:
                return "N/A";
        }
    }




}

export default MagicItemService;
