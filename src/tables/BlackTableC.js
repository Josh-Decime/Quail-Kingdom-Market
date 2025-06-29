import { MagicItem } from '../models/MagicItem.js';

export const blackMarketTableC = {
    range: [1, 100],
    items: [
        new MagicItem({
            name: "Blade of the Arcane",
            rarity: "Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [1, 2],
            description: "While attuned, you gain a +2 bonus to attack and damage rolls with this weapon. You can cast one spell from the wizard spell list (up to 3rd level) using the blade as a spellcasting focus, expending a charge. The blade has 3 charges, regaining 1d3 charges daily at dawn. The spell uses your spellcasting ability or Intelligence (DC 15, +7 to hit)."
        }),
        new MagicItem({
            name: "Amulet of the Storm",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [3, 4],
            description: "While attuned, you gain resistance to lightning and thunder damage. Once per day, you can cast *call lightning* (DC 15, concentration, up to 10 minutes) without components. You can also cast *thunderwave* (DC 15) twice per day without components."
        }),
        new MagicItem({
            name: "Cloak of Displacement",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [5, 6],
            description: "While attuned, attacks against you have disadvantage due to an illusory displacement effect. If you take damage, this effect is suppressed until the start of your next turn. The effect resumes after you avoid damage for a full round."
        }),
        new MagicItem({
            name: "Ring of the Phoenix",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [7, 8],
            description: "While attuned, you gain resistance to fire damage. Once per day, if you drop to 0 hit points, you can choose to regain 20 hit points and emit a 15-foot-radius burst of flame, dealing 3d6 fire damage to creatures within the area (DC 15 Dexterity saving throw for half damage)."
        }),
        new MagicItem({
            name: "Staff of the Wild",
            rarity: "Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [9, 10],
            description: "While attuned, you can use this staff as a spellcasting focus and gain a +2 bonus to spell attack rolls. The staff has 10 charges. You can expend 1 charge to cast *entangle* (DC 15), 2 charges for *spike growth* (DC 15), or 3 charges for *plant growth* without components. The staff regains 1d6+4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Shadowflame Blade",
            rarity: "Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [11, 12],
            description: "While attuned, you gain a +2 bonus to attack and damage rolls with this weapon. As an action, you can cause the blade to ignite with shadowflame for 1 minute, dealing an extra 2d6 necrotic damage on a hit. This property can be used once per day, recharging at midnight."
        }),
        new MagicItem({
            name: "Boots of the Skywalker",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [13, 14],
            description: "While attuned, you can cast *fly* on yourself once per day without components, lasting up to 10 minutes (concentration required). You also gain a +1 bonus to AC while flying."
        }),
        new MagicItem({
            name: "Ring of Arcane Mastery",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [15, 16],
            description: "While attuned, you gain one additional 2nd-level spell slot. Once per day, you can cast *counterspell* as a 3rd-level spell (DC 15) without components. If you have no spellcasting ability, use Intelligence for the spell DC."
        }),
        new MagicItem({
            name: "Amulet of the Devout",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [17, 18],
            description: "While attuned, you gain a +2 bonus to spell attack rolls and saving throw DCs for cleric spells. You can use an additional Channel Divinity option once per day, even if you’ve used your normal limit."
        }),
        new MagicItem({
            name: "Shield of Retribution",
            rarity: "Rare",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [19, 20],
            description: "While attuned, you gain a +2 bonus to AC from this shield. When a creature within 5 feet hits you with a melee attack, you can use your reaction to deal 2d8 force damage to that creature (DC 15 Dexterity saving throw for half damage). This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Cloak of the Void",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [21, 22],
            description: "While attuned, you can cast *dimension door* twice per day without components, teleporting up to 500 feet. Once per day, you can cast *banishment* (DC 15) without components, targeting a creature within 60 feet. If you have no spellcasting ability, use Charisma."
        }),
        new MagicItem({
            name: "Pendant of the Oracle",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [23, 24],
            description: "While attuned, you can cast *divination* once per day without components, requiring no material cost. You also gain a +2 bonus to Wisdom (Insight) checks."
        }),
        new MagicItem({
            name: "Gauntlets of Titan Strength",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [25, 26],
            description: "While attuned, your Strength score is 21 unless it is already higher. You also gain advantage on Strength (Athletics) checks for grappling or shoving."
        }),
        new MagicItem({
            name: "Ring of Elemental Resistance",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [27, 28],
            description: "While attuned, you gain resistance to one damage type chosen when you attune: acid, cold, fire, lightning, or thunder. Once per day, you can cast *absorb elements* as a reaction without components, matching the chosen damage type."
        }),
        new MagicItem({
            name: "Staff of the Archmage",
            rarity: "Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [29, 30],
            description: "While attuned, you can use this staff as a spellcasting focus and gain a +2 bonus to spell attack rolls. The staff has 10 charges. You can expend 1 charge to cast *magic missile* (3rd level), 2 charges for *fireball* (DC 15), or 3 charges for *counterspell* (3rd level) without components. The staff regains 1d6+4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Mirror of Far Sight",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: true,
            range: [31, 32],
            description: "While attuned, you can use an action to cast *clairvoyance* once per day without components, creating a sensor up to 1 mile away. The sensor lasts 10 minutes (concentration required). You also gain advantage on Wisdom (Perception) checks to notice distant objects."
        }),
        new MagicItem({
            name: "Amulet of the Planeswalker",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [33, 34],
            description: "While attuned, you can cast *plane shift* once per day without components, transporting yourself and up to eight willing creatures to a plane you’ve previously visited. You arrive at a random location unless you have a tuning fork for that plane."
        }),
        new MagicItem({
            name: "Blade of the Void",
            rarity: "Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [35, 36],
            description: "While attuned, you gain a +2 bonus to attack and damage rolls with this weapon. When you score a critical hit, the target must succeed on a DC 15 Wisdom saving throw or be banished to a harmless demiplane until the end of its next turn."
        }),
        new MagicItem({
            name: "Cloak of the Starlit Night",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [37, 38],
            description: "While attuned, you gain a +1 bonus to AC and saving throws. Once per day, you can cast *invisibility* on yourself without components, lasting up to 1 hour or until you attack or cast a spell."
        }),
        new MagicItem({
            name: "Ring of the Spellblade",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [39, 40],
            description: "While attuned, you gain a +1 bonus to attack and damage rolls with melee weapons. You can cast *magic weapon* on a weapon you touch once per day without components, granting a +2 bonus for 1 hour (concentration required)."
        }),
        new MagicItem({
            name: "Helm of the Mind",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [41, 42],
            description: "While attuned, your Intelligence score is 21 unless it is already higher. You can cast *detect thoughts* twice per day (DC 15) without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Boots of Ethereal Stride",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [43, 44],
            description: "While attuned, you can cast *blink* once per day without components, lasting up to 1 minute. You also gain a +1 bonus to AC while moving at least 10 feet on your turn."
        }),
        new MagicItem({
            name: "Staff of the Elements",
            rarity: "Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [45, 46],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 10 charges. You can expend 1 charge to cast *burning hands* (DC 15), 2 charges for *gust of wind* (DC 15), or 3 charges for *lightning bolt* (DC 15) without components. The staff regains 1d6+4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Warlord",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [47, 48],
            description: "While attuned, you gain a +2 bonus to attack rolls with weapons. Once per day, you can cast *haste* on yourself without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Cloak of the Ethereal",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [49, 50],
            description: "While attuned, you can cast *etherealness* once per day without components, lasting up to 10 minutes or until you end it early. You can only affect yourself with this spell."
        }),
        new MagicItem({
            name: "Ring of the Dragon’s Breath",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [51, 52],
            description: "While attuned, you can cast *dragon’s breath* (3rd level, DC 15) twice per day without components, choosing fire, cold, acid, or lightning damage. You also gain resistance to the chosen damage type for 1 hour after casting."
        }),
        new MagicItem({
            name: "Shield of the Guardian",
            rarity: "Rare",
            type: "Armor (shield)",
            blackMarket: true,
            weight: 6,
            attunement: true,
            range: [53, 54],
            description: "While attuned, you gain a +2 bonus to AC from this shield. As a reaction when an ally within 5 feet is hit by an attack, you can grant them a +2 bonus to AC against that attack, potentially causing it to miss. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Wand of the Void",
            rarity: "Rare",
            type: "Wand",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [55, 56],
            description: "While attuned, this wand has 7 charges. You can expend 1 charge to cast *darkness* (DC 15), 2 charges for *silence* (DC 15), or 3 charges for *banishment* (DC 15) without components. The wand regains 1d4+3 charges daily at midnight."
        }),
        new MagicItem({
            name: "Boots of the Stormrider",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [57, 58],
            description: "While attuned, you gain a flying speed of 30 feet when outdoors in stormy weather (rain, wind, or lightning). You can cast *gust of wind* (DC 15) twice per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Mind’s Eye",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [59, 60],
            description: "While attuned, you can cast *see invisibility* twice per day without components, lasting up to 1 hour. You also gain a +2 bonus to Wisdom (Perception) checks to notice hidden or invisible creatures."
        }),
        new MagicItem({
            name: "Amulet of the Wild",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [61, 62],
            description: "While attuned, you can cast *speak with animals* at will and *commune with nature* once per day without components. You gain a +2 bonus to Wisdom (Animal Handling) checks."
        }),
        new MagicItem({
            name: "Blade of the Fallen",
            rarity: "Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [63, 64],
            description: "While attuned, you gain a +2 bonus to attack and damage rolls with this weapon. When you reduce a creature to 0 hit points, you gain temporary hit points equal to twice your proficiency bonus, lasting 1 hour."
        }),
        new MagicItem({
            name: "Cloak of the Phantom",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [65, 66],
            description: "While attuned, you can cast *greater invisibility* on yourself once per day without components, lasting up to 1 minute (concentration required). You also gain a +1 bonus to AC while invisible."
        }),
        new MagicItem({
            name: "Ring of the Battlemage",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [67, 68],
            description: "While attuned, you gain a +1 bonus to AC and spell attack rolls. Once per day, you can cast *fireball* (DC 15) without components, dealing 8d6 fire damage in a 20-foot radius."
        }),
        new MagicItem({
            name: "Stormcaller Arrow",
            rarity: "Rare",
            type: "Weapon (arrow)",
            blackMarket: true,
            weight: 0.05,
            attunement: false,
            range: [69, 70],
            description: "When fired, this arrow creates a 20-foot-radius storm cloud at the point of impact, dealing 3d6 lightning damage to creatures in the area (DC 15 Dexterity saving throw for half damage). The arrow is not consumed and can be retrieved after use. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Helm of the Warlord",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [71, 72],
            description: "While attuned, you gain a +2 bonus to Charisma (Intimidation) checks. You can cast *fear* (DC 15) once per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Amulet of the Arcane Shield",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [73, 74],
            description: "While attuned, you can cast *shield* as a reaction when hit by an attack three times per day without components, granting +5 AC until the start of your next turn. You also gain a +1 bonus to AC while wearing no armor."
        }),
        new MagicItem({
            name: "Staff of the Necromancer",
            rarity: "Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [75, 76],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 10 charges. You can expend 1 charge to cast *animate dead* (DC 15), 2 charges for *vampiric touch* (DC 15), or 3 charges for *create undead* (DC 15) without components. The staff regains 1d6+4 charges daily at midnight."
        }),
        new MagicItem({
            name: "Cloak of the Wyrm",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [77, 78],
            description: "While attuned, you gain a +2 bonus to AC. Once per day, you can cast *fear* (DC 15) without components, lasting up to 1 minute (concentration required), and you appear dragon-like while the spell is active."
        }),
        new MagicItem({
            name: "Ring of the Shadowlord",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [79, 80],
            description: "While attuned, you can cast *darkness* at will without components, and you can see through magical darkness you create. Once per day, you can cast *shadow of moil* (DC 15) without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Boots of the Planes",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [81, 82],
            description: "While attuned, you can cast *misty step* three times per day without components, teleporting up to 30 feet. Once per day, you can cast *plane shift* without components, targeting yourself and up to eight willing creatures to a random location on a known plane."
        }),
        new MagicItem({
            name: "Amulet of the Healer",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [83, 84],
            description: "While attuned, you can cast *cure wounds* (3rd level, 3d8+4 healing) three times per day without components. You also gain a +2 bonus to Wisdom (Medicine) checks."
        }),
        new MagicItem({
            name: "Blade of the Sun",
            rarity: "Rare",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [85, 86],
            description: "While attuned, you gain a +2 bonus to attack and damage rolls with this weapon. As an action, you can cause the blade to shine with sunlight for 1 minute, shedding bright light in a 30-foot radius and dim light for an additional 30 feet, dealing an extra 2d6 radiant damage on a hit. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Ring of the Storm",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [87, 88],
            description: "While attuned, you can cast *lightning bolt* (DC 15) twice per day without components, dealing 8d6 lightning damage in a 100-foot line. You also gain resistance to lightning damage."
        }),
        new MagicItem({
            name: "Cloak of the Sentinel",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [89, 90],
            description: "While attuned, you gain a +2 bonus to AC. As a reaction when you are hit by an attack, you can cast *shield of faith* (DC 15) without components, granting a +2 bonus to AC for up to 10 minutes (concentration required). This property can be used twice per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Staff of the Diviner",
            rarity: "Rare",
            type: "Staff",
            blackMarket: true,
            weight: 4,
            attunement: true,
            range: [91, 92],
            description: "While attuned, you can use this staff as a spellcasting focus. The staff has 10 charges. You can expend 1 charge to cast *detect magic*, 2 charges for *see invisibility*, or 3 charges for *clairvoyance* (DC 15) without components. The staff regains 1d6+4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Amulet of the Shadow",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [93, 94],
            description: "While attuned, you gain a +2 bonus to Dexterity (Stealth) checks. You can cast *greater invisibility* on yourself once per day without components, lasting up to 1 minute (concentration required)."
        }),
        new MagicItem({
            name: "Ring of the Protector",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [95, 96],
            description: "While attuned, you can cast *protection from energy* (DC 15) twice per day without components, granting resistance to one damage type for up to 1 hour (concentration required). You also gain a +1 bonus to saving throws."
        }),
        new MagicItem({
            name: "Boots of the Wind",
            rarity: "Rare",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [97, 98],
            description: "While attuned, you gain a +10 bonus to your walking speed. You can cast *fly* on yourself twice per day without components, lasting up to 10 minutes (concentration required)."
        }),
        new MagicItem({
            name: "Wand of the Archmage",
            rarity: "Rare",
            type: "Wand",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [99, 100],
            description: "While attuned, this wand has 7 charges. You can expend 1 charge to cast *fireball* (DC 15), 2 charges for *counterspell* (3rd level), or 3 charges for *dispel magic* (3rd level) without components. The wand regains 1d4+3 charges daily at dawn."
        })
    ]
};

export default blackMarketTableC;