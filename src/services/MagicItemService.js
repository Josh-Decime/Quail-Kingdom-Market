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




}

export default MagicItemService;
