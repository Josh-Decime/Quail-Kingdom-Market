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
