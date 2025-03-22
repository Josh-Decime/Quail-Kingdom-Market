import { MagicItem } from "../models/MagicItem.js";

export const tableC = {
    range: [19, 27], // Adjust based on your overall table structure
    items: [
        new MagicItem({
            name: "All-Purpose Tool (+2)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [1, 2],
            description: "This simple multi-tool can transform into a variety of artisan’s tools. You gain a +2 bonus to spell attack rolls and to the saving throw DCs of your artificer spells while you are holding it. As an action, you can use the tool to cast one cantrip from any class’s spell list. The cantrip must be on the spell list of the artificer class and must be from a class in which you have proficiency."
        }),
        new MagicItem({
            name: "Weapon, +2",
            rarity: "Rare",
            type: "Weapon",
            weight: 3,
            attunement: false,
            range: [3, 3],
            description: "You have a +2 bonus to attack and damage rolls made with this magic weapon."
        }),
        new MagicItem({
            name: "Shield, +2",
            rarity: "Rare",
            type: "Armor (Shield)",
            weight: 6,
            attunement: false,
            range: [4, 5],
            description: "While holding this shield, you have a +2 bonus to AC."
        }),
        new MagicItem({
            name: "Boots of Levitation",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [6, 6],
            description: "While you wear these boots, you can use an action to cast the *levitate* spell on yourself at will."
        }),
        new MagicItem({
            name: "Boots of Speed",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [7, 8],
            description: "While you wear these boots, you can use a bonus action and click the boots’ heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click the heels together again, you end the effect."
        }),
        new MagicItem({
            name: "Ring of Evasion",
            rarity: "Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [9, 9],
            description: "This ring has 3 charges. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 charge to succeed instead. The ring regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Ring of Feather Falling",
            rarity: "Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [10, 11],
            description: "While wearing this ring, you fall slowly. You fall at a rate of 60 feet per round and take no damage from falling."
        }),
        new MagicItem({
            name: "Ring of Free Action",
            rarity: "Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [12, 12],
            description: "While wearing this ring, you are unaffected by difficult terrain, and magic can neither reduce your speed nor cause you to be paralyzed or restrained."
        }),
        new MagicItem({
            name: "Ring of Protection",
            rarity: "Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [13, 14],
            description: "You gain a +1 bonus to AC and saving throws while wearing this ring."
        }),
        new MagicItem({
            name: "Ring of the Ram",
            rarity: "Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [15, 15],
            description: "This ring has 3 charges. While wearing it, you can use an action to expend 1 to 3 charges to attack one creature you can see within 60 feet. The ring produces a spectral ram's head that makes an attack roll with a +7 bonus. On a hit, the target takes force damage and may be pushed back. The ring regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Ring of Spell Storing",
            rarity: "Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [16, 17],
            description: "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6−1 levels of stored spells chosen by the GM.\n\nAny creature can cast a spell of 1st through 5th level into the ring by touching it and spending the spell slot. The spell has no effect when cast this way. The level of the spell determines how much space it uses.\n\nWhile wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell.\n\nThe spell cast from the ring is no longer stored in it, freeing up space."
        }),
        new MagicItem({
            name: "Cloak of Displacement",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [18, 18],
            description: "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you.\n\nIf you take damage, the property ceases to function until the start of your next turn. The property is also suppressed while you are incapacitated, restrained, or otherwise unable to move."
        }),
        new MagicItem({
            name: "Cloak of the Bat",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1.5,
            attunement: true,
            range: [19, 20],
            description: "While wearing this cloak, you have advantage on Dexterity (Stealth) checks in dim light or darkness. If you are in an area of dim light or darkness, you can use your action to polymorph into a bat. While in bat form, you can't speak, your walking speed is 5 feet, and you have a flying speed of 30 feet. You can revert to your normal form using a bonus action. The transformation lasts for up to 1 hour, until you lose concentration (as if concentrating on a spell), or until the cloak is removed."
        }),
        new MagicItem({
            name: "Armor of Resistance",
            rarity: "Rare",
            type: "Armor",
            weight: 20,
            attunement: true,
            range: [21, 21],
            description: "You have resistance to one type of damage while wearing this armor. The type is determined randomly or selected by the DM from the following: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder."
        }),
        new MagicItem({
            name: "Armor, +1 (Rare variant for heavy/medium)",
            rarity: "Rare",
            type: "Armor",
            weight: 40,
            attunement: false,
            range: [22, 23],
            description: "You have a +1 bonus to AC while wearing this armor. This version applies to heavy or medium armors and is more durable than the uncommon variant."
        }),
        new MagicItem({
            name: "Armor of Vulnerability",
            rarity: "Rare",
            type: "Armor",
            weight: 45,
            attunement: true,
            range: [24, 24],
            description: "While wearing this cursed armor, you gain resistance to one damage type (chosen by the GM). However, you are also vulnerable to two other types (also chosen by the GM). Removing the armor requires a *remove curse* spell or similar magic."
        }),
        new MagicItem({
            name: "Arrow-Catching Shield",
            rarity: "Rare",
            type: "Armor (Shield)",
            weight: 6,
            attunement: true,
            range: [25, 26],
            description: "While holding this shield, you gain a +2 bonus to AC against ranged attacks. If a creature within 5 feet of you is targeted by a ranged attack, you can use your reaction to become the target instead."
        }),
        new MagicItem({
            name: "Barrier Tattoo (Rare)",
            rarity: "Rare",
            type: "Wondrous Item (Tattoo)",
            weight: 0,
            attunement: true,
            range: [27, 27],
            description: "While the tattoo is on your skin, you have an AC of 18 if you're not wearing armor. You can use a shield and still gain this benefit."
        }),
        new MagicItem({
            name: "Belt of Dwarvenkind",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [28, 29],
            description: "While wearing this belt, your Constitution score increases by 2, up to a maximum of 20. You have advantage on Charisma (Persuasion) checks made to interact with dwarves. In addition, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one—or a visibly thicker beard if you already have one."
        }),
        new MagicItem({
            name: "Belt of Hill Giant Strength",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 4,
            attunement: true,
            range: [30, 30],
            description: "While wearing this belt, your Strength score becomes 21. It has no effect if your Strength is already 21 or higher without it."
        }),
        new MagicItem({
            name: "Wand of Binding",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [31, 32],
            description: "This wand has 7 charges. While holding it, you can expend 1 charge to cast *hold monster* (save DC 17). You can also expend 2 charges to cast *hold person* (save DC 17) on each of up to three creatures within 30 feet of each other. The wand regains 1d6 + 1 charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the wand crumbles to ash and is destroyed."
        }),
        new MagicItem({
            name: "Wand of Enemy Detection",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [33, 33],
            description: "This wand has 7 charges. While holding it, you can use an action and expend 1 charge to sense the presence of enemies. For 1 minute, you know the direction of the nearest hostile creature within 60 feet. The wand regains 1d6 + 1 charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the wand crumbles into ashes."
        }),
        new MagicItem({
            name: "Wand of Fear",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [34, 35],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 charge and command obedience from each creature of your choice within 30 feet that can hear you. Each target must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. The wand regains 1d6 + 1 charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the wand crumbles into dust."
        }),
        new MagicItem({
            name: "Wand of Fireballs",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [36, 36],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more charges to cast the *fireball* spell (save DC 15). For 1 charge, you cast the spell at 3rd level. You can increase the level by one for each additional charge. The wand regains 1d6 + 1 charges daily at dawn. On a 1, the wand explodes."
        }),
        new MagicItem({
            name: "Wand of Lightning Bolts",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [37, 38],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more charges to cast *lightning bolt* (save DC 15). For 1 charge, you cast the spell at 3rd level. Increase the level by one for each extra charge used. The wand regains 1d6 + 1 charges at dawn. On a 1 after final charge, the wand is destroyed."
        }),
        new MagicItem({
            name: "Wand of Paralysis",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [39, 39],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 charge to target one creature within 60 feet. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. The wand regains 1d6 + 1 charges daily at dawn. On a roll of 1 after using the last charge, the wand is destroyed."
        }),
        new MagicItem({
            name: "Wand of the War Mage, +2",
            rarity: "Rare",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [40, 41],
            description: "While holding this wand, you gain a +2 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
        }),
        new MagicItem({
            name: "Bowl of Commanding Water Elementals",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [42, 42],
            description: "You can fill this bowl with water and use an action to speak the command word, summoning a water elemental as if you had cast the *conjure elemental* spell. The bowl can't be used this way again until the next dawn. The bowl must be filled with water for this to work."
        }),
        new MagicItem({
            name: "Bracers of Defense",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [43, 44],
            description: "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield."
        }),
        new MagicItem({
            name: "Cape of the Mountebank",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [45, 45],
            description: "While wearing this cape, you can use an action to cast the *dimension door* spell. When you disappear, you leave behind a cloud of smoke, and you appear in a similar burst of smoke at your destination. The cape can't be used again until the next dawn."
        }),
        new MagicItem({
            name: "Crystal Ball (base variant)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 4,
            attunement: true,
            range: [46, 47],
            description: "The crystal ball allows you to cast the *scrying* spell (save DC 17) while using it. The spell doesn't require components when cast with the crystal ball."
        }),
        new MagicItem({
            name: "Cube of Force",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [48, 48],
            description: "This cube has 36 charges. You can use an action to press one of its faces, expending a number of charges based on the effect you want, such as creating barriers that block movement, gases, or spells. The cube regains 1d20 charges daily at dawn."
        }),
        new MagicItem({
            name: "Daern's Instant Fortress",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 500,
            attunement: false,
            range: [49, 50],
            description: "You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a tower 20 feet on a side and 30 feet high. The entrance appears on the side facing you and remains open for 1 minute. The fortress is made of adamantine."
        }),
        new MagicItem({
            name: "Dagger of Venom",
            rarity: "Rare",
            type: "Weapon (Dagger)",
            weight: 1,
            attunement: false,
            range: [51, 51],
            description: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. You can use an action to cause thick black poison to coat the blade. The poison lasts for 1 minute or until you hit a creature with the weapon. The target must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and be poisoned for 1 minute. This property can't be used again until the next dawn."
        }),
        new MagicItem({
            name: "Dimensional Shackles",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [52, 53],
            description: "While wearing these shackles, a creature is restrained. They can't teleport or travel to another plane. A successful DC 30 Strength (Athletics) check is required to break them. They also require a DC 20 Dexterity check using thieves’ tools to pick the lock."
        }),
        new MagicItem({
            name: "Dragon Slayer",
            rarity: "Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: false,
            range: [54, 54],
            description: "When you hit a dragon with this magic weapon, the dragon takes an extra 3d6 damage of the weapon’s type. For the purpose of this weapon, “dragon” refers to any creature with the dragon type, including dragon turtles and wyverns."
        }),
        new MagicItem({
            name: "Dwarven Thrower",
            rarity: "Rare",
            type: "Weapon (Warhammer)",
            weight: 2,
            attunement: true,
            range: [55, 56],
            description: "This warhammer grants a +3 bonus to attack and damage rolls when thrown. If you're a dwarf, you also gain the bonus when using it in melee. When you hit with a thrown attack using this weapon, it deals an extra 1d8 damage, or 2d8 if the target is a giant. Immediately after the attack, the weapon flies back to your hand."
        }),
        new MagicItem({
            name: "Elven Chain",
            rarity: "Rare",
            type: "Armor (Chain Shirt)",
            weight: 20,
            attunement: false,
            range: [57, 57],
            description: "You gain a +1 bonus to AC while wearing this armor. You are considered proficient with this armor even if you lack proficiency with medium armor."
        }),
        new MagicItem({
            name: "Flame Tongue",
            rarity: "Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: true,
            range: [58, 59],
            description: "You can use a bonus action to speak this magic sword’s command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits."
        }),
        new MagicItem({
            name: "Frost Brand",
            rarity: "Rare",
            type: "Weapon (Any Sword)",
            weight: 3,
            attunement: true,
            range: [60, 60],
            description: "When you hit with this magic sword, the target takes an extra 1d6 cold damage. While you hold the sword, you have resistance to fire damage. In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet. If you take fire damage while holding the sword, you can use your reaction to extinguish all nonmagical flames within 30 feet of you."
        }),
        new MagicItem({
            name: "Helm of Teleportation",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [61, 62],
            description: "This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the **teleport** spell (save DC 15). The helm regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Horn of Blasting",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [63, 63],
            description: "You can use an action to blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the area must make a DC 15 Constitution saving throw, taking 5d6 thunder damage on a failed save, or half as much on a success. Creatures made of glass or crystal have disadvantage. The horn has a 20% chance to explode when used, dealing 10d6 damage to the user."
        }),
        new MagicItem({
            name: "Horn of Valhalla (Silver or Brass)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [64, 65],
            description: "You can use an action to blow the horn and summon warrior spirits from Valhalla. The type and number of warriors depends on the horn's metal and the user's proficiency with all simple weapons. The horn can’t be used again until 7 days have passed."
        }),
        new MagicItem({
            name: "Ioun Stone (various rare variants)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [66, 66],
            description: "Several types of Ioun stones exist. While this stone orbits your head, it grants you benefits such as increased ability scores, absorption of spells, or improved regeneration. Each stone has its own unique magical property."
        }),
        new MagicItem({
            name: "Mantle of Spell Resistance",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [67, 68],
            description: "You have advantage on saving throws against spells while you wear this cloak."
        }),
        new MagicItem({
            name: "Manual of Golems (some versions)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [69, 69],
            description: "This book contains instructions for creating a specific type of golem. The manual's magic is consumed in the process, and the user must meet specific prerequisites to construct the golem over a long period of time using expensive components."
        }),
        new MagicItem({
            name: "Oathbow",
            rarity: "Rare",
            type: "Weapon (Longbow)",
            weight: 2,
            attunement: true,
            range: [70, 71],
            description: "When you nock an arrow on this bow, you can whisper a vow to your enemy. The target becomes your sworn enemy until it dies or 7 days pass. You deal an extra 3d6 piercing damage to your sworn enemy. All other creatures take normal damage. You can’t use this property again until the sworn enemy dies or 7 days pass."
        }),
        new MagicItem({
            name: "Staff of the Python",
            rarity: "Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [72, 72],
            description: "You can use an action to speak the staff’s command word and throw it to a point within 10 feet of you. The staff becomes a giant constrictor snake under your control. As a bonus action, you can command the snake to attack or move. It reverts back to a staff if reduced to 0 HP or when you use an action to speak the command word again."
        }),
        new MagicItem({
            name: "Staff of Withering",
            rarity: "Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [73, 74],
            description: "This staff has 3 charges. When you hit a creature with a melee attack using the staff, you can expend 1 charge to deal an extra 2d10 necrotic damage. The target also must succeed on a DC 15 Constitution saving throw or have disadvantage on Strength-based attack rolls, checks, and saves for 1 minute. The staff regains 1d3 charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of the Woodlands",
            rarity: "Rare",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [75, 76],
            description: "This staff grants a +2 bonus to attack and damage rolls made with it and can be used as a magic quarterstaff. It also has 10 charges used to cast various druid spells. The staff can also turn into a tree or allow you to pass through trees. The staff regains 1d6 + 4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Mace of Disruption",
            rarity: "Rare",
            type: "Weapon (Mace)",
            weight: 4,
            attunement: true,
            range: [77, 78],
            description: "When you hit a fiend or undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened until the end of your next turn."
        }),
        new MagicItem({
            name: "Mace of Smiting",
            rarity: "Rare",
            type: "Weapon (Mace)",
            weight: 4,
            attunement: true,
            range: [79, 80],
            description: "This magic weapon grants a +1 bonus to attack and damage rolls. When used against a construct, the bonus increases to +3, and the construct takes an extra 2d6 damage. On a critical hit against a construct, it must make a DC 17 Constitution saving throw or be destroyed."
        }),
        new MagicItem({
            name: "Scimitar of Speed",
            rarity: "Rare",
            type: "Weapon (Scimitar)",
            weight: 3,
            attunement: true,
            range: [81, 82],
            description: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. Additionally, you can make one extra attack with it as a bonus action on each of your turns."
        }),
        new MagicItem({
            name: "Necklace of Fireballs",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [83, 84],
            description: "This necklace has beads that you can detach and throw up to 60 feet away. Each bead detonates as a **fireball** spell (DC 15). You can hurl multiple beads simultaneously, increasing the spell level by 1 for each additional bead beyond the first."
        }),
        new MagicItem({
            name: "Amulet of Health",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [85, 86],
            description: "Your Constitution score is 19 while you wear this amulet. It has no effect if your Constitution is already 19 or higher."
        }),
        new MagicItem({
            name: "Stone of Controlling Earth Elementals",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [87, 88],
            description: "You can use an action to speak the stone’s command word and summon an **earth elemental**, as if you had cast the **conjure elemental** spell. The stone can't be used this way again until the next dawn."
        }),
        new MagicItem({
            name: "Tentacle Rod",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [89, 90],
            description: "This rod has three tentacles. You can use an action to direct each tentacle to make a melee attack (reach 15 ft, +9 to hit) against a creature. On a hit, the target takes 1d6 bludgeoning damage and must succeed on a DC 15 Constitution saving throw or have disadvantage on strength and dexterity checks and saving throws until the end of your next turn."
        }),
        new MagicItem({
            name: "Wings of Flying",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [91, 92],
            description: "While wearing this cloak, you can use an action to speak its command word. It unfurls into bat-like wings, giving you a flying speed of 60 feet for 1 hour. Once used, it can’t be used again until the next dawn."
        }),
        new MagicItem({
            name: "Rod of the Pact Keeper, +2",
            rarity: "Rare",
            type: "Rod",
            weight: 2,
            attunement: true,
            range: [93, 94],
            description: "This rod grants a +2 bonus to spell attack rolls and to the saving throw DCs of your warlock spells. In addition, once per long rest, you can regain one warlock spell slot while holding the rod."
        }),
        new MagicItem({
            name: "Rod of Rulership",
            rarity: "Rare",
            type: "Rod",
            weight: 2,
            attunement: true,
            range: [95, 96],
            description: "You can use an action to present the rod and command obedience from each creature of your choice within 120 feet. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. The effect ends early if the creature is attacked or sees its allies attacked."
        }),
        new MagicItem({
            name: "Sword of Wounding",
            rarity: "Rare",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [97, 98],
            description: "Hit points lost to this magic weapon's damage can be regained only through a short or long rest, not by magic. The weapon deals an additional 1d4 necrotic damage at the start of the target's turn for each time it has been wounded (stacking), up to 5d4."
        }),
        new MagicItem({
            name: "Sword of Life Stealing",
            rarity: "Rare",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [99, 99],
            description: "When you score a critical hit with this weapon against a creature that isn't a construct or undead, the target takes an extra 10 necrotic damage, and you gain 10 temporary hit points."
        }),
        new MagicItem({
            name: "Sun Blade",
            rarity: "Rare",
            type: "Weapon (longsword)",
            weight: 3,
            attunement: true,
            range: [100, 100],
            description: "This sword is a blade of pure radiance. You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing. Undead take an extra 1d8 radiant damage. It emits bright light in a 15-foot radius and dim light for an additional 15 feet."
        }),
    ]
};

export default tableC;
