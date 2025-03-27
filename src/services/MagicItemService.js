import { AppState } from '../AppState';

class MagicItemService {
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

    static calculateTotalRoll(tableRoll, modifier) {
        return (tableRoll || 0) + (modifier || 0);
    }

    static initializePercentileRolls(count) {
        return Array(count || 0).fill(null);
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

            return item || null;
        }).filter(Boolean);
    }

    // NOTE this gives the number of dice & then multiplies it by the price. When I was making adjustments in an attempt to solve the dice issue I ran into another problem with price calculation not working when I input a value. I think it is important to keep price calculation separately to make input values function. 
    // So instead of swapping out the current functions with this one I could fix getDieForRarity so it rolls 2 dice for Rare & Legendary. Then this can be deleted.
    // Or I could remove the price multiplication & use this to roll the dice number & delete rollPriceForItem
    static calculatePriceForItem(item) {
        if (!item || !item.rarity) return "N/A";

        switch (item.rarity) {
            case "Common":
                return (this.rollDie(6, 1) + 1) * 10;
            case "Uncommon":
                return this.rollDie(6, 1) * 100;
            case "Rare":
                return this.rollDie(10, 2) * 1000;
            case "Very Rare":
                return (this.rollDie(4, 1) + 1) * 10000;
            case "Legendary":
                return this.rollDie(6, 2) * 25000;
            default:
                return "N/A";
        }
    }
    // just displays the gold cost formula for each rarity
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
    // FIXME this is what is giving us the dice to roll instead of calculatePriceForItem. I tried to add (10,2) but it rolls a dice of 2 once.
    // NOTE this is being called by rollPriceForItem
    static getDieForRarity(rarity) {
        switch (rarity) {
            case "Common": return 6;
            case "Uncommon": return 6;
            case "Rare": return 10;
            case "Very Rare": return 4;
            case "Legendary": return 6;
            default: return 1;
        }
    }
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



}

export default MagicItemService;
