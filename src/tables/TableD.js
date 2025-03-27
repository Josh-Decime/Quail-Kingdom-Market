import { MagicItem } from "../models/MagicItem.js";

export const tableD = {
    range: [28, 36],
    items: [
        new MagicItem({
            name: "All-Purpose Tool (+3)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [1, 1],
            description: "This simple multi-tool can transform into any artisan's tool. You gain a +3 bonus to spell attack rolls and saving throw DCs of your artificer spells while using it."
        }),
        new MagicItem({
            name: "Armor, +2",
            rarity: "Very Rare",
            type: "Armor",
            weight: 40,
            attunement: false,
            range: [2, 2],
            description: "You have a +2 bonus to AC while wearing this armor."
        }),
        new MagicItem({
            name: "Shield, +3",
            rarity: "Very Rare",
            type: "Armor (Shield)",
            weight: 6,
            attunement: false,
            range: [3, 4],
            description: "While holding this shield, you have a +3 bonus to AC."
        }),
        new MagicItem({
            name: "Weapon, +3",
            rarity: "Very Rare",
            type: "Weapon",
            weight: 3,
            attunement: false,
            range: [5, 5],
            description: "You have a +3 bonus to attack and damage rolls made with this magic weapon."
        }),
        new MagicItem({
            name: "Amulet of the Planes",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [6, 6],
            description: "While wearing this amulet, you can use an action to cast the **plane shift** spell (save DC 15)."
        }),
        new MagicItem({
            name: "Absorbing Tattoo",
            rarity: "Very Rare",
            type: "Wondrous Item (Tattoo)",
            weight: 0,
            attunement: true,
            range: [7, 8],
            description: "This tattoo grants resistance to one damage type. When you take damage of that type, you can use your reaction to absorb and regain hit points equal to half the damage taken. Once used, this feature can't be used again until the next dawn."
        }),
        new MagicItem({
            name: "Animated Shield",
            rarity: "Very Rare",
            type: "Armor (Shield)",
            weight: 6,
            attunement: true,
            range: [9, 9],
            description: "You can speak a command word as a bonus action to cause this shield to animate. It floats in your space, granting you its bonus to AC without needing to hold it. The shield remains animated for 1 minute or until you use a bonus action to end the effect."
        }),
        new MagicItem({
            name: "Arcane Grimoire (+2)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [10, 10],
            description: "While holding this tome, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your wizard spells. It can be used as a spellbook and grants advantage on Arcana checks related to magic lore."
        }),
        new MagicItem({
            name: "Armor of Invulnerability",
            rarity: "Legendary",
            type: "Armor",
            weight: 40,
            attunement: true,
            range: [11, 12],
            description: "You have resistance to nonmagical damage while wearing this armor. Once per day, you can use an action to gain immunity to nonmagical damage for 10 minutes."
        }),
        new MagicItem({
            name: "Armor of Resistance (Very Rare variant)",
            rarity: "Very Rare",
            type: "Armor",
            weight: 40,
            attunement: true,
            range: [13, 13],
            description: "While wearing this armor, you have resistance to one type of damage. The damage type is chosen when the armor is created."
        }),
        new MagicItem({
            name: "Arrow of Slaying",
            rarity: "Very Rare",
            type: "Weapon (Arrow)",
            weight: 0.05,
            attunement: false,
            range: [14, 14],
            description: "An arrow designed to slay a specific type of creature. When it hits, the target must make a DC 17 Constitution saving throw or take 6d10 extra damage of the appropriate type."
        }),
        new MagicItem({
            name: "Belt of Fire Giant Strength",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [15, 16],
            description: "Your Strength score is 25 while you wear this belt. It has no effect if your Strength is already 25 or higher."
        }),
        new MagicItem({
            name: "Belt of Frost Giant Strength",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [17, 17],
            description: "Your Strength score is 23 while you wear this belt. It has no effect if your Strength is already 23 or higher."
        }),
        new MagicItem({
            name: "Belt of Stone Giant Strength",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [18, 18],
            description: "Your Strength score is 23 while you wear this belt. It has no effect if your Strength is already 23 or higher."
        }),
        new MagicItem({
            name: "Belt of Hill Giant Strength (Very Rare variant)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [19, 20],
            description: "Your Strength score is 21 while you wear this belt. It has no effect if your Strength is already 21 or higher."
        }),
        new MagicItem({
            name: "Blackrazor (Very Rare variant if applicable)",
            rarity: "Very Rare",
            type: "Weapon (Greatsword)",
            weight: 6,
            attunement: true,
            range: [21, 21],
            description: "This sentient greatsword craves souls. When you kill a creature with it, you gain temporary hit points equal to its hit points. Blackrazor can communicate telepathically and has its own agenda."
        }),
        new MagicItem({
            name: "Bloodwell Vial (+2)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [22, 22],
            description: "While attuned to this vial, your spell save DC and spell attack bonus each increase by +2. Additionally, it stores sorcery points which you can use when you roll initiative."
        }),
        new MagicItem({
            name: "Cloak of Arachnida",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [23, 24],
            description: "You gain resistance to poison damage, immunity to the poisoned condition, the ability to climb difficult surfaces including upside down, and you can cast *web* once per long rest."
        }),
        new MagicItem({
            name: "Cloak of Invisibility (Very Rare variant)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [25, 25],
            description: "While wearing this cloak, you can pull the hood over your head to become invisible. The effect lasts up to 2 hours per day, which can be used in increments of 1 minute."
        }),
        new MagicItem({
            name: "Cloak of the Bat (Very Rare variant)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [26, 26],
            description: "You can fly in dim light or darkness and have advantage on Stealth checks made in such conditions. You can also polymorph into a bat once per long rest."
        }),
        new MagicItem({
            name: "Crystal Ball (Very Rare variant)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [27, 28],
            description: "This crystal ball allows you to cast the *scrying* spell (save DC 17). Some versions grant additional abilities, such as *detect thoughts* or *clairvoyance* while scrying."
        }),
        new MagicItem({
            name: "Dagger of Venom (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Dagger)",
            weight: 1,
            attunement: false,
            range: [29, 29],
            description: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. You can use an action to cause thick black poison to coat the blade. The poison remains for 1 minute or until an attack hits. The target must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute."
        }),
        new MagicItem({
            name: "Defender (Very Rare variant if applicable)",
            rarity: "Very Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: true,
            range: [30, 30],
            description: "This weapon grants a +3 bonus to attack and damage rolls. As a bonus action, you can transfer some or all of that bonus to your AC instead, until the start of your next turn."
        }),
        new MagicItem({
            name: "Dragon Scale Mail",
            rarity: "Very Rare",
            type: "Armor (Scale Mail)",
            weight: 45,
            attunement: true,
            range: [31, 32],
            description: "While wearing this armor, you gain advantage on saving throws against the breath weapons of dragons, and you have resistance to one type of damage associated with the dragon type. Additionally, you can sense the presence of dragons within 30 miles."
        }),
        new MagicItem({
            name: "Dragon Slayer (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: false,
            range: [33, 33],
            description: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a dragon with it, the dragon takes an extra 3d6 damage of the weapon’s type."
        }),
        new MagicItem({
            name: "Dwarven Plate",
            rarity: "Very Rare",
            type: "Armor (Plate)",
            weight: 65,
            attunement: false,
            range: [34, 34],
            description: "While wearing this armor, you gain a +2 bonus to AC. In addition, if a creature knocks you prone, you can use your reaction to remain standing."
        }),
        new MagicItem({
            name: "Dwarven Thrower (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Warhammer)",
            weight: 2,
            attunement: true,
            range: [35, 36],
            description: "This warhammer grants a +3 bonus to attack and damage rolls when used by a dwarf. It returns when thrown, and deals an extra 1d8 damage (2d8 against giants)."
        }),
        new MagicItem({
            name: "Efreeti Bottle",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [37, 37],
            description: "You can use an action to remove the stopper and release an efreeti. Depending on a roll, the efreeti might serve you, attack you, or grant three wishes. Once used, the bottle can't be used again for 24 hours."
        }),
        new MagicItem({
            name: "Flame Tongue (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: true,
            range: [38, 38],
            description: "You can use a bonus action to speak this magic sword’s command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While ablaze, the sword deals an extra 2d6 fire damage to any target it hits."
        }),
        new MagicItem({
            name: "Frost Brand (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: true,
            range: [39, 40],
            description: "When you hit with this magic sword, it deals an extra 1d6 cold damage. While you hold the sword, you have resistance to fire damage. In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
        }),
        new MagicItem({
            name: "Gem of Seeing",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [41, 41],
            description: "While wearing the gem, you can use an action to speak its command word. This grants **true seeing** out to 120 feet for 10 minutes. The gem has 3 charges and regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Giant Slayer",
            rarity: "Very Rare",
            type: "Weapon (any axe or sword)",
            weight: 4,
            attunement: false,
            range: [42, 42],
            description: "You gain a +1 bonus to attack and damage rolls. When you hit a giant with it, the giant takes an extra 2d6 damage. The target must succeed on a DC 15 Strength saving throw or fall prone."
        }),
        new MagicItem({
            name: "Wings of Flying (Very Rare variant)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [43, 44],
            description: "While wearing this cloak, you can use an action to transform it into bat-like wings, gaining a flying speed of 60 feet for 1 hour. Once used, the cloak can’t be used again until the next dawn."
        }),
        new MagicItem({
            name: "Hammer of Thunderbolts",
            rarity: "Very Rare",
            type: "Weapon (maul)",
            weight: 60,
            attunement: true,
            range: [45, 45],
            description: "You must be wearing a Belt of Giant Strength and Gauntlets of Ogre Power to wield this weapon properly. If so, it becomes a +1 weapon. On a hit, it deals an extra 2d6 thunder damage. When you throw it and speak its command word, it emits a thunderclap in a 300-foot radius. Each creature within 30 feet (not including you) must make a DC 17 Constitution save or be stunned until your next turn."
        }),
        new MagicItem({
            name: "Holy Avenger (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [46, 46],
            description: "When attuned by a paladin, this weapon grants +2 to attack and damage rolls. It deals an extra 2d10 radiant damage to fiends and undead. Allies within 10 feet of you gain advantage on saving throws against spells and magical effects."
        }),
        new MagicItem({
            name: "Horn of Valhalla (Bronze or Iron)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [47, 48],
            description: "You can use an action to blow the horn and summon warrior spirits. The type and number of spirits depend on the horn’s material and your martial weapon proficiency. Once used, the horn can’t be used again for 7 days."
        }),
        new MagicItem({
            name: "Instrument of the Bards (Canaith Mandolin, Cli Lyre)",
            rarity: "Very Rare",
            type: "Wondrous Item (Instrument)",
            weight: 3,
            attunement: true,
            range: [49, 49],
            description: "While attuned, you can use the instrument to cast specific spells such as **cure wounds**, **dispel magic**, and **protection from evil and good**. You have advantage on Charisma (Performance) checks and ignore verbal and somatic components for bard spells."
        }),
        new MagicItem({
            name: "Ioun Stone (Various Very Rare variants)",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [50, 50],
            description: "These stones float around your head and grant various effects depending on the type: +2 to ability scores, regeneration, absorption, etc. Only one Ioun Stone can benefit you at a time unless otherwise stated."
        }),
        new MagicItem({
            name: "Luck Blade (Very Rare variant with no wishes)",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [51, 52],
            description: "You gain a +1 bonus to attack and damage rolls. While attuned, you have advantage on saving throws. This version of the blade does not contain any remaining wishes."
        }),
        new MagicItem({
            name: "Mirror of Life Trapping",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 50,
            attunement: false,
            range: [53, 53],
            description: "This mirror can trap up to 12 creatures inside its extradimensional cells. If a creature sees its reflection, it must succeed on a DC 15 Charisma save or be trapped. Destroying the mirror frees all creatures."
        }),
        new MagicItem({
            name: "Nine Lives Stealer (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [54, 54],
            description: "This magic weapon has 1d8 + 1 charges. When you reduce a creature to 0 hit points, you can expend 1 charge to force it to make a DC 15 Constitution saving throw. On a fail, it dies instantly. Charges recharge at dawn."
        }),
        new MagicItem({
            name: "Oathbow (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (longbow)",
            weight: 2,
            attunement: true,
            range: [55, 56],
            description: "When you swear an oath against a sworn enemy, attacks against them deal an extra 3d6 piercing damage. You have advantage on attack rolls made against the target, and they have disadvantage on saving throws against your attacks with this bow."
        }),
        new MagicItem({
            name: "Ring of Regeneration",
            rarity: "Very Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [57, 57],
            description: "While wearing this ring, you regain 1d6 hit points every 10 minutes provided you have at least 1 hit point. If you lose a body part, the ring causes it to regrow after 1d6 + 1 days if you wear the ring the entire time."
        }),
        new MagicItem({
            name: "Ring of Shooting Stars",
            rarity: "Very Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [58, 58],
            description: "While in dim light or darkness, you can use the ring to cast **dancing lights**, **light**, **faerie fire**, and **ball lightning**. It has 6 charges and regains 1d6 daily at dawn."
        }),
        new MagicItem({
            name: "Ring of Spell Turning",
            rarity: "Very Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [59, 60],
            description: "You have advantage on saving throws against spells that target only you. If you roll a 20 on the save and the spell is 7th level or lower, the spell has no effect and is reflected back at the caster."
        }),
        new MagicItem({
            name: "Ring of Telekinesis",
            rarity: "Very Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [61, 61],
            description: "While wearing this ring, you can cast **telekinesis** at will without expending a spell slot or material components. Your spellcasting ability for this is Intelligence (spell save DC 18)."
        }),
        new MagicItem({
            name: "Robe of Eyes",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [62, 62],
            description: "This robe is covered in eye-like patterns. While wearing it, you gain darkvision to 120 feet, see invisible creatures and objects, and have advantage on Perception checks. The robe is blinded if you are blinded."
        }),
        new MagicItem({
            name: "Rod of Absorption",
            rarity: "Very Rare",
            type: "Rod",
            weight: 2,
            attunement: true,
            range: [63, 64],
            description: "While holding this rod, you can use your reaction to absorb a spell targeting only you. The absorbed energy can be used to cast your own spells. The rod can absorb up to 50 levels of spells before becoming inert."
        }),
        new MagicItem({
            name: "Rod of Alertness",
            rarity: "Very Rare",
            type: "Rod",
            weight: 2,
            attunement: true,
            range: [65, 65],
            description: "While holding this rod, you have advantage on Perception checks and initiative rolls. You and companions within 120 feet can’t be surprised. You can also use an action to activate an aura of alertness that lasts 10 minutes."
        }),
        new MagicItem({
            name: "Rod of Security",
            rarity: "Very Rare",
            type: "Rod",
            weight: 2,
            attunement: true,
            range: [66, 66],
            description: "This rod can create a tranquil extradimensional paradise for up to 200 people. You and your chosen creatures can remain there for up to 200 days. Time doesn’t pass for you while inside."
        }),
        new MagicItem({
            name: "Rod of the Pact Keeper (+3)",
            rarity: "Very Rare",
            type: "Rod",
            weight: 2,
            attunement: true,
            range: [67, 68],
            description: "While holding this rod, you gain a +3 bonus to spell attack rolls and the saving throw DCs of your warlock spells. In addition, you can regain one warlock spell slot as an action once per long rest."
        }),
        new MagicItem({
            name: "Manual of Bodily Health",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [69, 69],
            description: "This book contains health tips and exercises. If you spend 48 hours over 6 days studying it, your Constitution score increases by 2, and your maximum for that score increases by 2. Once used, the book loses its magic for a century."
        }),
        new MagicItem({
            name: "Manual of Gainful Exercise",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [70, 70],
            description: "This manual contains fitness routines and techniques. If you spend 48 hours over 6 days studying it, your Strength score increases by 2, and your maximum for that score increases by 2. Once used, it loses its magic for a century."
        }),
        new MagicItem({
            name: "Manual of Quickness of Action",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [71, 72],
            description: "This tome contains agility-enhancing practices. If you spend 48 hours over 6 days studying it, your Dexterity score increases by 2, and your maximum for that score increases by 2. Once used, the book loses its magic for a century."
        }),
        new MagicItem({
            name: "Tome of Clear Thought",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [73, 73],
            description: "This book contains logic puzzles and analysis techniques. If you spend 48 hours over 6 days studying it, your Intelligence score increases by 2, and your maximum for that score increases by 2. It loses its magic for a century after use."
        }),
        new MagicItem({
            name: "Tome of Leadership and Influence",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [74, 74],
            description: "This book contains persuasive rhetoric and social strategies. After reading it for 48 hours over 6 days, your Charisma score increases by 2, and its maximum increases by 2. It becomes nonmagical for 100 years after being used."
        }),
        new MagicItem({
            name: "Tome of Understanding",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [75, 76],
            description: "This book is full of wisdom-enhancing teachings. Reading it for 48 hours over 6 days increases your Wisdom score by 2, and the score’s maximum increases by 2. The book then loses its magic for a century."
        }),
        new MagicItem({
            name: "Spellguard Shield",
            rarity: "Very Rare",
            type: "Shield",
            weight: 6,
            attunement: true,
            range: [77, 77],
            description: "While holding this shield, you have advantage on saving throws against spells and other magical effects. Spell attacks also have disadvantage against you."
        }),
        new MagicItem({
            name: "Wand of the War Mage, +3",
            rarity: "Very Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [78, 78],
            description: "While holding this wand, you gain a +3 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
        }),
        new MagicItem({
            name: "Wand of Polymorph",
            rarity: "Very Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [79, 80],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the **polymorph** spell (save DC 15). The wand regains 1d6 + 1 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Fire",
            rarity: "Very Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [81, 81],
            description: "This staff can be wielded as a magic quarterstaff. While attuned, you gain access to a number of fire spells and can use charges to cast them. It regains 1d6 + 4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Frost",
            rarity: "Very Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [82, 82],
            description: "This icy staff can cast spells like **cone of cold**, **ice storm**, and more using charges. You gain resistance to cold damage while attuned to it. It regains 1d6 + 4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Power",
            rarity: "Very Rare",
            type: "Staff",
            weight: 6,
            attunement: true,
            range: [83, 84],
            description: "This staff has numerous magical abilities including spell casting, damage resistance, and a retributive strike option. It has 20 charges and regains 2d8 + 4 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Striking",
            rarity: "Very Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [85, 85],
            description: "This staff can be used as a magic weapon. When you hit with a melee attack using it, you can expend charges to deal extra force damage. It regains 1d6 + 4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Thunder and Lightning",
            rarity: "Very Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [86, 86],
            description: "This staff lets you cast **lightning bolt**, **thunderclap**, and similar spells using charges. You can also use special thunder/lightning effects on hit. It regains 1d6 + 4 charges daily."
        }),
        new MagicItem({
            name: "Staff of Withering (Very Rare variant)",
            rarity: "Very Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [87, 88],
            description: "This staff deals necrotic damage and reduces target's Strength on hit. It also functions as a magic quarterstaff and regains 1d6 + 4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Sun Blade (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Longsword)",
            weight: 3,
            attunement: true,
            range: [89, 89],
            description: "This sword emits bright sunlight and deals radiant damage instead of slashing. It has a +2 bonus to attack and damage rolls, and deals extra damage to undead."
        }),
        new MagicItem({
            name: "Sword of Answering (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Any sword)",
            weight: 3,
            attunement: true,
            range: [90, 90],
            description: "This sword grants a bonus to initiative and lets you use a reaction to counterattack when hit in melee. Only a few such swords exist, each aligned to a specific alignment."
        }),
        new MagicItem({
            name: "Sword of Life Stealing (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Any sword)",
            weight: 3,
            attunement: true,
            range: [91, 92],
            description: "When you score a critical hit with this magic weapon, it deals extra necrotic damage and you gain temporary hit points equal to that damage."
        }),
        new MagicItem({
            name: "Sword of Sharpness",
            rarity: "Very Rare",
            type: "Weapon (Slashing)",
            weight: 3,
            attunement: true,
            range: [93, 94],
            description: "When you score a critical hit with this weapon, you roll an extra damage die and may lop off limbs if the target has any. Deals extra slashing damage."
        }),
        new MagicItem({
            name: "Sword of Wounding (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Any sword)",
            weight: 3,
            attunement: true,
            range: [95, 96],
            description: "This weapon causes wounds that can’t heal normally. At the start of each of the wounded creature’s turns, it takes 1d4 necrotic damage for each wound it has. A creature can make a DC 15 Con check to stop the bleeding."
        }),
        new MagicItem({
            name: "Scimitar of Speed (Very Rare variant)",
            rarity: "Very Rare",
            type: "Weapon (Scimitar)",
            weight: 3,
            attunement: true,
            range: [97, 98],
            description: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. You can make one attack with it as a bonus action on each of your turns."
        }),
        new MagicItem({
            name: "Dancing Sword",
            rarity: "Very Rare",
            type: "Weapon (Sword)",
            weight: 3,
            attunement: true,
            range: [99, 100],
            description: "You can use a bonus action to toss this magic sword into the air and speak a command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice. It uses your attack and damage bonuses."
        }),
    ]
};

export default tableD;
