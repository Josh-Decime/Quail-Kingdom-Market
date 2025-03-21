export class MagicItem {
    constructor(data) {
        this.name = data.name;
        this.rarity = data.rarity;
        this.type = data.type;
        this.weight = data.weight || 0;
        this.attunement = data.attunement || false;
        this.description = data.description || "No description available.";
        this.price = data.price || null;
    }
}
