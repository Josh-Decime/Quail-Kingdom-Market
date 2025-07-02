import { MagicItem } from '../models/MagicItem.js';

export const blackMarketTableE = {
    range: [1037, 1050],
    items: [
        new MagicItem({
            name: "Blade of the Cosmos",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [1, 2],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with this weapon. On a critical hit, you can choose to cut a rift to another plane, teleporting the target to a random location on that plane (DC 19 Wisdom saving throw negates). This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Overlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [3, 4],
            description: "While attuned, you can cast *teleport* at will without components, targeting yourself and up to eight willing creatures. Once per day, you can cast *gate* (DC 19) without components, opening a portal to another plane for 1 minute."
        }),
        new MagicItem({
            name: "Cloak of the Overlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [5, 6],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *greater invisibility* at will without components, lasting up to 1 minute (concentration required). Once per day, you can cast *time stop* without components."
        }),
        new MagicItem({
            name: "Ring of the Sovereign",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [7, 8],
            description: "While attuned, your Charisma score is 22 unless it is already higher. You can cast *dominate person* (DC 19) three times per day without components, lasting up to 1 hour. You also gain advantage on Charisma (Persuasion) and (Intimidation) checks."
        }),
        new MagicItem({
            name: "Staff of Eternity",
            rarity: "Legendary",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [9, 10],
            description: "While attuned, you can use this staff as a spellcasting focus and gain a +4 bonus to spell attack rolls and saving throw DCs. The staff has 20 charges. You can expend 1 charge to cast *fireball* (DC 19), 3 charges for *meteor swarm* (DC 19), or 5 charges for *time stop* without components. The staff regains 1d10+10 charges daily at dawn."
        }),
        new MagicItem({
            name: "Starblade",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [11, 12],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with this weapon. As an action, you can cause the blade to emit a 60-foot-radius sphere of radiant light for 1 minute, dealing 4d8 radiant damage to creatures that start their turn in the area (DC 19 Dexterity saving throw for half damage). This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Boots of the Godwalker",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [13, 14],
            description: "While attuned, you gain a flying speed of 120 feet. You can cast *teleport* three times per day without components, targeting yourself and up to eight willing creatures. You also gain a +3 bonus to AC while moving at least 30 feet on your turn."
        }),
        new MagicItem({
            name: "Crown of the Seer",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: true,
            range: [15, 16],
            description: "While attuned, you can cast *foresight* once per day without components, lasting 8 hours. You also gain a +4 bonus to Wisdom (Insight) and (Perception) checks and cannot be surprised while conscious."
        }),
        new MagicItem({
            name: "Amulet of the High Priest",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [17, 18],
            description: "While attuned, you gain a +4 bonus to spell attack rolls and saving throw DCs for cleric spells. You can cast *divine intervention* twice per day without components, and the success chance is doubled (20% instead of 10% for a 10th-level cleric)."
        }),
        new MagicItem({
            name: "Shield of Divinity",
            rarity: "Legendary",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [19, 20],
            description: "While attuned, you gain a +4 bonus to AC from this shield. As a reaction when targeted by a spell, you can reflect it back at the caster as if using *counterspell* (6th level, DC 19). This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Pendant of Divinity",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [21, 22],
            description: "While attuned, you can cast *mass cure wounds* (7th level, 7d8+10 healing, DC 19) three times per day without components. You also gain a +4 bonus to Wisdom (Medicine) checks and can stabilize any creature within 30 feet as a bonus action."
        }),
        new MagicItem({
            name: "Gauntlets of Divine Might",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [23, 24],
            description: "While attuned, your Strength score is 25 unless it is already higher. You gain advantage on Strength (Athletics) checks and can deal an extra 2d10 force damage on a successful melee weapon attack once per turn."
        }),
        new MagicItem({
            name: "Ring of the Sovereign",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [25, 26],
            description: "While attuned, your Charisma score is 24 unless it is already higher. You can cast *dominate monster* (DC 19) twice per day without components, lasting up to 1 hour."
        }),
        new MagicItem({
            name: "Tome of the Overlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [27, 28],
            description: "While attuned, you can copy any spell into this tome at half the normal time and cost. You can cast any spell from the tome (up to 7th level) once per day without components, using your spellcasting ability or Intelligence (DC 19, +11 to hit)."
        }),
        new MagicItem({
            name: "Dagger of the Cosmos",
            rarity: "Legendary",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [29, 30],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with this weapon. When you hit a creature while hidden or invisible, the attack deals an extra 4d8 necrotic damage, and the creature must succeed on a DC 19 Constitution saving throw or be paralyzed for 1 minute."
        }),
        new MagicItem({
            name: "Cloak of Divinity",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [31, 32],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *holy aura* (DC 19) once per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Overlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [33, 34],
            description: "While attuned, you can cast *power word stun* (DC 19) twice per day without components. You also gain a +4 bonus to saving throws against spells and immunity to being charmed."
        }),
        new MagicItem({
            name: "Helm of the Overlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [35, 36],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with weapons. You can cast *aura of life* (DC 19) three times per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Amulet of the Wildsoul",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [37, 38],
            description: "While attuned, you can cast *conjure animals* (9th level, DC 19) three times per day without components, summoning beasts of CR 4 or lower. You also gain a +4 bonus to Wisdom (Animal Handling) checks and can communicate telepathically with beasts within 120 feet."
        }),
        new MagicItem({
            name: "Celestial Arrow",
            rarity: "Legendary",
            type: "Weapon (arrow)",
            blackMarket: true,
            weight: 0.05,
            attunement: false,
            range: [39, 40],
            description: "When fired, this arrow creates a 30-foot-radius burst of celestial energy at the point of impact, dealing 6d10 radiant damage to creatures in the area (DC 19 Dexterity saving throw for half damage). The arrow is not consumed and can be retrieved after use. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Cloak of the Sovereign",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [41, 42],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *invulnerability* (DC 19) once per day without components, lasting up to 10 minutes (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the High Priest",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [43, 44],
            description: "While attuned, you can cast *mass heal* (DC 19) once per day without components, restoring 700 hit points divided among creatures within 60 feet. You also gain a +4 bonus to Wisdom (Insight) checks."
        }),
        new MagicItem({
            name: "Staff of the Sovereign",
            rarity: "Legendary",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [45, 46],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 20 charges. You can expend 1 charge to cast *power word stun* (DC 19), 3 charges for *meteor swarm* (DC 19), or 5 charges for *wish* without components. The staff regains 1d10+10 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Archmage",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [47, 48],
            description: "While attuned, you gain one additional 5th-level spell slot and one additional 4th-level spell slot. You can cast *dispel magic* (7th level, DC 19) at will without components."
        }),
        new MagicItem({
            name: "Shield of the Sovereign",
            rarity: "Legendary",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [49, 50],
            description: "While attuned, you gain a +4 bonus to AC from this shield. As a reaction when targeted by an attack or spell, you can cast *counterspell* (7th level, DC 19) or *shield* (+5 AC) without components. This property can be used four times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Cloak of the High Priest",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [51, 52],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *divine word* (DC 19) twice per day without components."
        }),
        new MagicItem({
            name: "Ring of the Cosmos",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [53, 54],
            description: "While attuned, you can cast *gate* (DC 19) twice per day without components, opening a portal to another plane for 1 minute. You also gain a +4 bonus to saving throws against spells."
        }),
        new MagicItem({
            name: "Blade of the Sovereign",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [55, 56],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with this weapon. When you hit a creature, you can expend a charge to deal an extra 5d10 radiant damage and force the creature to make a DC 19 Wisdom saving throw or be stunned for 1 minute. The blade has 3 charges, regaining 1d3 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Sovereign",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [57, 58],
            description: "While attuned, you gain a +4 bonus to all saving throws. You can cast *power word heal* once per day without components, restoring all hit points to one creature within 30 feet."
        }),
        new MagicItem({
            name: "Boots of the Sovereign",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [59, 60],
            description: "While attuned, you gain a flying speed of 120 feet and a +4 bonus to AC. You can cast *teleport* at will without components, targeting yourself and up to eight willing creatures."
        }),
        new MagicItem({
            name: "Ring of the Archmage",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [61, 62],
            description: "While attuned, you gain one additional 6th-level spell slot and one additional 5th-level spell slot. You can cast *counterspell* (7th level, DC 19) at will without components."
        }),
        new MagicItem({
            name: "Staff of the Overlord",
            rarity: "Legendary",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [63, 64],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 20 charges. You can expend 1 charge to cast *dominate monster* (DC 19), 3 charges for *meteor swarm* (DC 19), or 5 charges for *wish* without components. The staff regains 1d10+10 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Cosmos",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [65, 66],
            description: "While attuned, you can cast *wish* once per day without components, but only to replicate a spell of 8th level or lower. You also gain a +4 bonus to Intelligence (Arcana) checks."
        }),
        new MagicItem({
            name: "Cloak of the Cosmos",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [67, 68],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *time stop* twice per day without components."
        }),
        new MagicItem({
            name: "Ring of Divinity",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [69, 70],
            description: "While attuned, you can cast *mass heal* (DC 19) twice per day without components, restoring 700 hit points divided among creatures within 60 feet. You also gain immunity to radiant damage."
        }),
        new MagicItem({
            name: "Shield of the Overlord",
            rarity: "Legendary",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [71, 72],
            description: "While attuned, you gain a +4 bonus to AC from this shield. As a reaction when hit by an attack, you can deal 5d10 force damage to the attacker (DC 19 Dexterity saving throw for half damage). This property can be used four times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Boots of the High Priest",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [73, 74],
            description: "While attuned, you gain a +4 bonus to AC and a flying speed of 90 feet. You can cast *divine word* (DC 19) three times per day without components."
        }),
        new MagicItem({
            name: "Amulet of the Warlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [75, 76],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with weapons. You can cast *invulnerability* (DC 19) once per day without components, lasting up to 10 minutes (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Warlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [77, 78],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with weapons. You can cast *power word kill* (DC 19) once per day without components, targeting a creature with 100 hit points or fewer."
        }),
        new MagicItem({
            name: "Cloak of the Archmage",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [79, 80],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *meteor swarm* (DC 19) twice per day without components."
        }),
        new MagicItem({
            name: "Staff of the High Priest",
            rarity: "Legendary",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [81, 82],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 20 charges. You can expend 1 charge to cast *mass cure wounds* (7th level, DC 19), 3 charges for *divine word* (DC 19), or 5 charges for *mass heal* (DC 19) without components. The staff regains 1d10+10 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Seer",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [83, 84],
            description: "While attuned, you can cast *foresight* twice per day without components, lasting 8 hours. You also gain a +4 bonus to Wisdom (Perception) checks and immunity to being surprised."
        }),
        new MagicItem({
            name: "Blade of the Warlord",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [85, 86],
            description: "While attuned, you gain a +4 bonus to attack and damage rolls with this weapon. You can cast *aura of vitality* (7th level, DC 19) three times per day without components, restoring 2d6 hit points per round for 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Seer",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [87, 88],
            description: "While attuned, you can cast *scrying* (DC 19) at will without components. You also gain a +4 bonus to Wisdom (Insight) checks and can see through illusions with a DC 19 Intelligence (Investigation) check as an action."
        }),
        new MagicItem({
            name: "Cloak of the Warlord",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [89, 90],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *aura of vitality* (7th level, DC 19) three times per day without components, restoring 2d6 hit points per round for 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Boots of the Archmage",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [91, 92],
            description: "While attuned, you gain a +4 bonus to AC and a flying speed of 120 feet. You can cast *time stop* twice per day without components."
        }),
        new MagicItem({
            name: "Amulet of the High Priest",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [93, 94],
            description: "While attuned, you gain a +4 bonus to spell attack rolls and saving throw DCs for cleric spells. You can cast *mass heal* (DC 19) twice per day without components, restoring 700 hit points divided among creatures within 60 feet."
        }),
        new MagicItem({
            name: "Ring of the High Priest",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [95, 96],
            description: "While attuned, you can cast *divine word* (DC 19) three times per day without components. You also gain a +4 bonus to Wisdom (Insight) checks and immunity to being charmed."
        }),
        new MagicItem({
            name: "Staff of the Archmage",
            rarity: "Legendary",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [97, 98],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 20 charges. You can expend 1 charge to cast *fireball* (DC 19), 3 charges for *meteor swarm* (DC 19), or 5 charges for *wish* without components. The staff regains 1d10+10 charges daily at dawn."
        }),
        new MagicItem({
            name: "Cloak of the Seer",
            rarity: "Legendary",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [99, 100],
            description: "While attuned, you gain a +4 bonus to AC and saving throws. You can cast *foresight* twice per day without components, lasting 8 hours."
        })
    ]
};

export default blackMarketTableE;