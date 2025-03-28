import { AppState } from '../AppState';

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


}

export default MagicItemService;
