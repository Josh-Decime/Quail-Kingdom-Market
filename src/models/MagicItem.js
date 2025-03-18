export class MagicItem {
    constructor(name, rarity, description, weight, type, attunement = false) {
        this.name = name;
        this.rarity = rarity;
        this.description = description;
        this.weight = weight;
        this.type = type; // e.g., "Wondrous Item", "Weapon", "Armor"
        this.attunement = attunement; // Boolean for attunement requirement
    }
}