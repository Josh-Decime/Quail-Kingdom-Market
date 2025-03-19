import { AppState } from '../AppState';

class MagicItemService {
    static rollDie(sides) {
        return Math.ceil(Math.random() * sides);
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
            return AppState.magicItems[tableKey].items.find(item => roll >= item.range[0] && roll <= item.range[1]) || null;
        }).filter(Boolean);
    }
}

export default MagicItemService;
