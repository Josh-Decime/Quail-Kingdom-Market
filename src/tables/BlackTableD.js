import { MagicItem } from '../models/MagicItem.js';

export const blackMarketTableD = {
    range: [1028, 1036],
    items: [
        new MagicItem({
            name: "Blade of the Eternal",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [1, 2],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with this weapon. On a critical hit, the target takes an additional 3d6 radiant damage and must succeed on a DC 17 Constitution saving throw or be blinded for 1 minute."
        }),
        new MagicItem({
            name: "Amulet of the Voidwalker",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [3, 4],
            description: "While attuned, you can cast *teleport* once per day without components, targeting yourself and up to eight willing creatures. You also gain resistance to force damage and a +2 bonus to AC while in an extradimensional space."
        }),
        new MagicItem({
            name: "Cloak of the Abyss",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [5, 6],
            description: "While attuned, you can cast *greater invisibility* on yourself twice per day without components, lasting up to 1 minute (concentration required). As a bonus action, you can teleport up to 60 feet to an unoccupied space you can see. This teleportation can be used three times per day, recharging at midnight."
        }),
        new MagicItem({
            name: "Ring of the Archmage",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [7, 8],
            description: "While attuned, you gain one additional 3rd-level spell slot and one additional 2nd-level spell slot. You can cast *counterspell* (4th level) twice per day without components (DC 17). If you have no spellcasting ability, use Intelligence for the spell DC."
        }),
        new MagicItem({
            name: "Staff of the Cosmos",
            rarity: "Very Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [9, 10],
            description: "While attuned, you can use this staff as a spellcasting focus and gain a +3 bonus to spell attack rolls. The staff has 15 charges. You can expend 1 charge to cast *fireball* (DC 17), 2 charges for *fly* (concentration), 3 charges for *wall of force*, or 5 charges for *teleport* without components. The staff regains 1d8+7 charges daily at dawn."
        }),
        new MagicItem({
            name: "Eclipse Blade",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [11, 12],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with this weapon. As an action, you can cause the blade to emit a 30-foot-radius sphere of magical darkness for 1 minute, which you can see through. This property can be used once per day, recharging at midnight."
        }),
        new MagicItem({
            name: "Boots of the Voidstrider",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [13, 14],
            description: "While attuned, you can cast *dimension door* three times per day without components, teleporting up to 500 feet. You also gain a flying speed of 60 feet for up to 10 minutes per day, which can be split across multiple uses."
        }),
        new MagicItem({
            name: "Crown of the Oracle",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: true,
            range: [15, 16],
            description: "While attuned, you can cast *divination* twice per day without components, requiring no material cost. You also gain a +3 bonus to Wisdom (Insight) checks and can cast *commune* once per day without components."
        }),
        new MagicItem({
            name: "Amulet of the Divine",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [17, 18],
            description: "While attuned, you gain a +3 bonus to spell attack rolls and saving throw DCs for cleric spells. You can use two additional Channel Divinity options per day, even if you’ve used your normal limit."
        }),
        new MagicItem({
            name: "Shield of the Cosmos",
            rarity: "Very Rare",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [19, 20],
            description: "While attuned, you gain a +3 bonus to AC from this shield. As a reaction when hit by an attack, you can teleport up to 30 feet to an unoccupied space you can see, taking no damage from the attack. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Pendant of the Seer",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [21, 22],
            description: "While attuned, you can cast *scrying* once per day without components (DC 17). You also gain a +3 bonus to Wisdom (Perception) checks and can see through illusions with a DC 17 Intelligence (Investigation) check as an action."
        }),
        new MagicItem({
            name: "Gauntlets of Godlike Strength",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [23, 24],
            description: "While attuned, your Strength score is 23 unless it is already higher. You gain advantage on Strength (Athletics) checks and can lift, push, or drag twice your normal carrying capacity."
        }),
        new MagicItem({
            name: "Ring of the Archon",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [25, 26],
            description: "While attuned, your Charisma score is 20 unless it is already higher. You can cast *charm monster* (DC 17) twice per day without components, lasting up to 1 hour."
        }),
        new MagicItem({
            name: "Staff of the Archivist",
            rarity: "Very Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [27, 28],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 15 charges. You can expend 1 charge to cast *legend lore*, 2 charges for *greater restoration*, or 3 charges for *teleport* (DC 17) without components. The staff regains 1d8+7 charges daily at dawn."
        }),
        new MagicItem({
            name: "Dagger of the Eclipse",
            rarity: "Very Rare",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [29, 30],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with this weapon. When you hit a creature while you are hidden or invisible, the attack deals an extra 3d6 necrotic damage, and the creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute."
        }),
        new MagicItem({
            name: "Cloak of the Celestial",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [31, 32],
            description: "While attuned, you gain a +2 bonus to AC and saving throws. You can cast *fly* on yourself twice per day without components, lasting up to 10 minutes (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Void",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [33, 34],
            description: "While attuned, you can cast *banishment* (DC 17) twice per day without components, targeting a creature within 60 feet. You also gain resistance to necrotic damage and can see through magical darkness up to 60 feet."
        }),
        new MagicItem({
            name: "Helm of the War God",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [35, 36],
            description: "While attuned, you gain a +3 bonus to attack rolls with weapons. You can cast *crusader’s mantle* (DC 17) once per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Amulet of the Wildheart",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [37, 38],
            description: "While attuned, you can cast *conjure animals* (5th level, DC 17) twice per day without components, summoning beasts of CR 2 or lower. You also gain a +3 bonus to Wisdom (Animal Handling) checks."
        }),
        new MagicItem({
            name: "Starfall Arrow",
            rarity: "Very Rare",
            type: "Weapon (arrow)",
            blackMarket: true,
            weight: 0.05,
            attunement: false,
            range: [39, 40],
            description: "When fired, this arrow creates a 20-foot-radius burst of radiant energy at the point of impact, dealing 4d8 radiant damage to creatures in the area (DC 17 Dexterity saving throw for half damage). The arrow is not consumed and can be retrieved after use. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Cloak of the Stormlord",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [41, 42],
            description: "While attuned, you gain resistance to lightning and thunder damage. You can cast *storm of vengeance* (DC 17) once per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Celestial",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [43, 44],
            description: "While attuned, you can cast *daylight* at will without components, shedding bright light in a 60-foot radius. You can cast *hallow* (DC 17) once per day without components, lasting 24 hours."
        }),
        new MagicItem({
            name: "Staff of the Warlock",
            rarity: "Very Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [45, 46],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 15 charges. You can expend 1 charge to cast *eldritch blast* (3 beams, +8 to hit), 2 charges for *darkness* (DC 17), or 4 charges for *hunger of Hadar* (DC 17) without components. The staff regains 1d8+7 charges daily at midnight."
        }),
        new MagicItem({
            name: "Amulet of the Archivist",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [47, 48],
            description: "While attuned, you can cast *legend lore* twice per day without components. You also gain a +3 bonus to Intelligence (Arcana) checks and can copy spells into a spellbook at half the normal time and cost."
        }),
        new MagicItem({
            name: "Shield of the Void",
            rarity: "Very Rare",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [49, 50],
            description: "While attuned, you gain a +3 bonus to AC from this shield. As a reaction when targeted by a spell, you can cast *counterspell* (4th level, DC 17) without components. This property can be used three times per day, recharging at midnight."
        }),
        new MagicItem({
            name: "Cloak of the Warlord",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [51, 52],
            description: "While attuned, you gain a +3 bonus to AC. You can cast *aura of vitality* (DC 17) twice per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Planeswalker",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [53, 54],
            description: "While attuned, you can cast *plane shift* twice per day without components, targeting yourself and up to eight willing creatures to a plane you’ve visited. You also gain resistance to force damage."
        }),
        new MagicItem({
            name: "Blade of the Abyss",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [55, 56],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with this weapon. When you hit a creature, you can expend a charge to deal an extra 3d6 necrotic damage and regain hit points equal to the necrotic damage dealt. The blade has 3 charges, regaining 1d3 charges daily at midnight."
        }),
        new MagicItem({
            name: "Amulet of the Starlord",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [57, 58],
            description: "While attuned, you can cast *sunburst* (DC 17) once per day without components, dealing 12d6 radiant damage in a 60-foot radius. You also gain a +2 bonus to saving throws against spells."
        }),
        new MagicItem({
            name: "Boots of the Celestial",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [59, 60],
            description: "While attuned, you gain a flying speed of 60 feet. You can cast *fly* on up to three creatures within 30 feet twice per day without components, lasting up to 10 minutes (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the War God",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [61, 62],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with weapons. You can cast *divine favor* (3rd level) three times per day without components, dealing an extra 1d4 radiant damage on weapon hits for 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Staff of the Void",
            rarity: "Very Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [63, 64],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 15 charges. You can expend 1 charge to cast *darkness*, 2 charges for *banishment* (DC 17), or 4 charges for *teleport* (DC 17) without components. The staff regains 1d8+7 charges daily at midnight."
        }),
        new MagicItem({
            name: "Amulet of the Necromancer",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [65, 66],
            description: "While attuned, you can cast *create undead* (DC 17) twice per day without components, creating up to three ghouls or two ghasts. You also gain resistance to necrotic damage and a +2 bonus to saving throws against undead effects."
        }),
        new MagicItem({
            name: "Cloak of the Archmage",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [67, 68],
            description: "While attuned, you gain a +3 bonus to AC and saving throws. You can cast *dispel magic* (4th level) twice per day without components (DC 17)."
        }),
        new MagicItem({
            name: "Ring of the Eternal Flame",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [69, 70],
            description: "While attuned, you gain immunity to fire damage. You can cast *fire storm* (DC 17) once per day without components, dealing 7d10 fire damage in a 10-foot-radius area."
        }),
        new MagicItem({
            name: "Shield of the Warlord",
            rarity: "Very Rare",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [71, 72],
            description: "While attuned, you gain a +3 bonus to AC from this shield. As a reaction when hit by a melee attack, you can deal 3d8 force damage to the attacker (DC 17 Dexterity saving throw for half damage). This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Boots of the Archon",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [73, 74],
            description: "While attuned, you gain a +10 bonus to your walking speed and a flying speed of 60 feet. You can cast *teleport* once per day without components, targeting yourself and up to eight willing creatures."
        }),
        new MagicItem({
            name: "Amulet of the Celestial",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [75, 76],
            description: "While attuned, you can cast *sunburst* (DC 17) twice per day without components, dealing 12d6 radiant damage in a 60-foot radius. You also gain a +2 bonus to saving throws against spells."
        }),
        new MagicItem({
            name: "Ring of the Necromancer",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [77, 78],
            description: "While attuned, you can cast *animate dead* (5th level, DC 17) three times per day without components, creating up to four skeletons or zombies. You also gain a +3 bonus to Charisma (Intimidation) checks when interacting with undead."
        }),
        new MagicItem({
            name: "Cloak of the Voidstrider",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [79, 80],
            description: "While attuned, you can cast *etherealness* twice per day without components, lasting up to 10 minutes or until you end it early. You also gain resistance to force damage."
        }),
        new MagicItem({
            name: "Staff of the Celestial",
            rarity: "Very Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [81, 82],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 15 charges. You can expend 1 charge to cast *daylight*, 2 charges for *hallow* (DC 17), or 4 charges for *sunburst* (DC 17) without components. The staff regains 1d8+7 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the War God",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [83, 84],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with weapons. You can cast *divine word* (DC 17) once per day without components."
        }),
        new MagicItem({
            name: "Blade of the Celestial",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [85, 86],
            description: "While attuned, you gain a +3 bonus to attack and damage rolls with this weapon. You can cast *searing smite* (4th level, DC 17) three times per day without components, dealing an extra 4d6 fire damage on your next hit."
        }),
        new MagicItem({
            name: "Ring of the Stormlord",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [87, 88],
            description: "While attuned, you gain immunity to lightning damage. You can cast *storm of vengeance* (DC 17) once per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Cloak of the Necromancer",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [89, 90],
            description: "While attuned, you gain a +3 bonus to AC. You can cast *create undead* (DC 17) twice per day without components, creating up to three ghouls or two ghasts."
        }),
        new MagicItem({
            name: "Boots of the Warlord",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [91, 92],
            description: "While attuned, you gain a +10 bonus to your walking speed and a +2 bonus to AC. You can cast *haste* on yourself three times per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Amulet of the Archon",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [93, 94],
            description: "While attuned, your Wisdom score is 20 unless it is already higher. You can cast *commune* twice per day without components and gain a +3 bonus to Wisdom (Insight) checks."
        }),
        new MagicItem({
            name: "Ring of the Celestial",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [95, 96],
            description: "While attuned, you can cast *sunburst* (DC 17) twice per day without components, dealing 12d6 radiant damage in a 60-foot radius. You also gain resistance to radiant damage."
        }),
        new MagicItem({
            name: "Staff of the Warlord",
            rarity: "Very Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [97, 98],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 15 charges. You can expend 1 charge to cast *crusader’s mantle* (DC 17), 2 charges for *aura of vitality* (DC 17), or 4 charges for *divine word* (DC 17) without components. The staff regains 1d8+7 charges daily at dawn."
        }),
        new MagicItem({
            name: "Cloak of the Archon",
            rarity: "Very Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [99, 100],
            description: "While attuned, you gain a +3 bonus to AC and saving throws. You can cast *aura of purity* (DC 17) twice per day without components, lasting up to 10 minutes (concentration required)."
        })
    ]
};

export default blackMarketTableD;