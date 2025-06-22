import { MagicItem } from "@/models/MagicItem.js";

export const tableE = {
    range: [37, 50], // Placeholder, can adjust if needed
    items: [
        new MagicItem({
            name: "Apparatus of Kwalish",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 500,
            attunement: false,
            range: [1, 4],
            description: "This barrel-shaped metal vehicle can hold up to two Medium creatures. It has AC 20, 200 hit points, and a speed of 30 ft. It can transform into a giant crab-like apparatus with claws that can grapple and crush. The user can control its 10 levers to navigate or use the claws in combat.\n\nIt can travel underwater at half speed and has a sealed interior for breathing."
        }),
        new MagicItem({
            name: "Armor of Invulnerability",
            rarity: "Legendary",
            type: "Armor (plate)",
            weight: 65,
            attunement: true,
            range: [5, 8],
            description: "You have resistance to nonmagical damage while wearing this armor. Additionally, you can use an action to gain immunity to nonmagical damage for 10 minutes. Once this special action is used, it can’t be used again until the next dawn."
        }),
        new MagicItem({
            name: "Belt of Fire Giant Strength",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [9, 12],
            description: "While wearing this belt, your Strength score changes to 25. The item has no effect if your Strength is equal to or greater than this score without it."
        }),
        new MagicItem({
            name: "Blackrazor",
            rarity: "Legendary",
            type: "Weapon (greatsword)",
            weight: 6,
            attunement: true,
            range: [13, 16],
            description: "This sentient greatsword craves souls. When you reduce a creature to 0 hit points, its soul is devoured, granting you temporary hit points equal to its HP. The weapon speaks telepathically and may try to control you if you deny it souls. It deals an extra 2d6 necrotic damage per hit."
        }),
        new MagicItem({
            name: "Cloak of Invisibility",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [17, 20],
            description: "While wearing this cloak, you can use an action to become invisible. Anything you wear or carry is invisible with you. You remain invisible until the cloak is removed, until you attack or cast a spell, or until you use a bonus action to become visible again. The cloak has 2d4 hours of invisibility. When all time is used, the cloak loses its magic."
        }),
        new MagicItem({
            name: "Crystal Ball of Mind Reading",
            rarity: "Very Rare",
            type: "Wondrous Item",
            weight: 4,
            attunement: true,
            range: [21, 24],
            description: "While touching this crystal ball, you can cast the *scrying* spell (save DC 17) with it. The ball has 3 charges. While scrying, you can spend 1 charge to cast *detect thoughts* on a creature within the spell’s perception. The ball regains 1d3 charges at dawn."
        }),
        new MagicItem({
            name: "Defender",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [25, 28],
            description: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a creature with it, you can transfer some or all of the bonus to your AC instead of using it on the attack. This change lasts until the start of your next turn."
        }),
        new MagicItem({
            name: "Efreeti Chain",
            rarity: "Very Rare",
            type: "Armor (chain mail)",
            weight: 55,
            attunement: true,
            range: [29, 32],
            description: "This fine chain mail grants you immunity to fire damage and lets you walk on lava as if it were solid ground. You can also speak and understand Primordial while attuned."
        }),
        new MagicItem({
            name: "Hammer of Thunderbolts",
            rarity: "Legendary",
            type: "Weapon (maul)",
            weight: 20,
            attunement: true,
            range: [33, 36],
            description: "This magic maul deals an extra 2d6 lightning damage. If you are attuned to both a Belt of Giant Strength and Gauntlets of Ogre Power, you gain +4 to attack/damage rolls, and you can throw it (range 20/60). On a hit, the target must succeed a DC 17 Constitution saving throw or be stunned until the end of your next turn."
        }),
        new MagicItem({
            name: "Holy Avenger",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            weight: 4,
            attunement: true,
            range: [37, 40],
            description: "When attuned by a paladin, this +3 weapon deals an extra 2d10 radiant damage to fiends and undead. While you hold it, you and friendly creatures within 10 feet have advantage on saving throws against spells and other magical effects. The aura increases to 30 feet at level 18."
        }),
        new MagicItem({
            name: "Horn of Valhalla (Iron)",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [41, 44],
            description: "This iron horn summons berserkers to fight for you. You can blow the horn as an action, summoning 5d4 + 5 berserkers that appear within 60 feet of you. They fight until they are slain or 1 hour has passed. Once you use the horn, it can't be used again for 7 days."
        }),
        new MagicItem({
            name: "Instrument of the Bards (Anstruth Harp)",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [45, 48],
            description: "This ornate harp grants advantage on Performance checks and allows you to cast spells like *fly*, *invisibility*, *levitate*, *protection from evil and good*, *control weather*, *cure wounds (5th level)*, and *wall of thorns*. Each spell can be cast once per day, using your spell save DC and spellcasting ability."
        }),
        new MagicItem({
            name: "Ioun Stone (Legendary variants)",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [49, 52],
            description: "These magical stones float around your head and grant various benefits. Legendary variants include:\n\n- **Greater Absorption**: Absorbs spells of 8th level or lower cast at you, storing them for your use.\n- **Mastery**: Increases your proficiency bonus by 1.\n- **Regeneration**: Regains 15 hit points every 10 minutes, provided you have at least 1 hit point."
        }),
        new MagicItem({
            name: "Luck Blade (with wishes)",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [53, 56],
            description: "This sword grants a +1 bonus to attack and damage rolls. It also has 1d4 - 1 charges, representing the number of wishes you can make with it. You can use an action to expend one charge to cast the *wish* spell. The sword regains 1d4 - 1 charges every dawn."
        }),
        new MagicItem({
            name: "Plate Armor of Etherealness",
            rarity: "Legendary",
            type: "Armor (plate)",
            weight: 65,
            attunement: true,
            range: [57, 60],
            description: "While wearing this armor, you can use an action to cast the *etherealness* spell, allowing you to move through objects and creatures as if they were difficult terrain. This effect lasts for 10 minutes or until you end it as a bonus action. Once used, this property can't be used again until the next dawn."
        }),
        new MagicItem({
            name: "Ring of Djinni Summoning",
            rarity: "Legendary",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [61, 64],
            description: "This ring has 3 charges. While wearing it, you can use an action to expend 1 charge to cast the *conjure elemental* spell, summoning an air elemental. Alternatively, you can expend 2 charges to summon a djinni. The ring regains 1d3 charges daily at dawn."
        }),
        new MagicItem({
            name: "Ring of Invisibility",
            rarity: "Legendary",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [65, 68],
            description: "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying becomes invisible with you. You remain invisible until the ring is removed, you attack, or you cast a spell."
        }),
        new MagicItem({
            name: "Ring of Spell Turning",
            rarity: "Very Rare",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [69, 72],
            description: "This ring grants advantage on saving throws against spells that target only you. Additionally, if you roll a natural 20 on such a save, the spell is reflected back at the caster as if it originated from you, turning the caster into the target."
        }),
        new MagicItem({
            name: "Robe of the Archmagi",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [73, 76],
            description: "This elegant robe increases your Armor Class to 15 + your Dexterity modifier and grants advantage on saving throws against spells and other magical effects. Additionally, it increases your spell save DC and spell attack bonus by 2. However, it can only be attuned by a sorcerer, warlock, or wizard of a specific alignment (determined by the robe's color)."
        }),
        new MagicItem({
            name: "Rod of Lordly Might",
            rarity: "Legendary",
            type: "Rod",
            weight: 10,
            attunement: true,
            range: [77, 80],
            description: "This rod has several magical properties:\n\n- **Weapon Transformation**: As a bonus action, transform the rod into a flame tongue, a +3 battleaxe, or a +3 spear.\n- **Drain Life**: When you hit a creature with the rod, it must succeed on a DC 17 Constitution saving throw or take an extra 4d6 necrotic damage, and you regain hit points equal to that amount.\n- **Paralyze**: You can use an action to force a creature you can see within 30 feet to make a DC 17 Wisdom saving throw or be paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }),
        new MagicItem({
            name: "Sphere of Annihilation",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [81, 84],
            description: "This 2-foot-diameter black sphere obliterates all matter it touches. You can control the sphere within 60 feet using your action, moving it up to 30 feet per turn. Any creature that comes into contact with the sphere must make a DC 13 Dexterity saving throw or be obliterated, leaving no trace behind. The sphere can be destroyed by a *gate* spell or by coming into contact with a *rod of cancellation*."
        }),
        new MagicItem({
            name: "Staff of the Magi",
            rarity: "Legendary",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [85, 88],
            description: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls. While holding it, you gain a +2 bonus to spell attack rolls and to your saving throw DCs for your wizard spells.\n\nThe staff has 50 charges for the following properties. The staff regains 4d6 + 2 expended charges daily at dawn.\n\n**Spell Absorption**: While holding the staff, you have advantage on saving throws against spells. You can use your reaction to absorb a spell directed at only you and regain charges equal to the spell's level.\n\n**Spell Casting**: While holding the staff, you can use an action to expend 1 or more of its charges to cast one of the following spells (spell save DC 17): *cone of cold (5)*, *fireball (3)*, *fog cloud (1)*, *ice storm (4)*, *lightning bolt (3)*, *passwall (5)*, *plane shift (7)*, *telekinesis (5)*, *wall of fire (4)*, or *web (2)*.\n\n**Retributive Strike**: You can use an action to break the staff against a solid surface, causing it to explode and destroy itself. Each creature in a 30-foot radius must make a DC 17 Dexterity saving throw. On a failed save, a creature takes damage based on the remaining charges in the staff (8 × number of charges), or half as much on a success. You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion entirely."
        }),

        new MagicItem({
            name: "Sword of Answering",
            rarity: "Legendary",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: true,
            range: [89, 92],
            description: "This magic sword grants a +3 bonus to attack and damage rolls made with it. While holding the sword, you have advantage on initiative rolls and Wisdom (Insight) checks made to detect lies.\n\nWhen a creature damages you while within 5 feet, you can use your reaction to make a melee attack with the sword against that creature.\n\nThis sword is sentient and has a distinct personality, usually aligned with its historical wielder or the cause it champions."
        }),

        new MagicItem({
            name: "Vorpal Sword",
            rarity: "Legendary",
            type: "Weapon (any sword that deals slashing damage)",
            weight: 3,
            attunement: true,
            range: [93, 96],
            description: "You gain a +3 bonus to attack and damage rolls made with this magic weapon.\n\nWhen you roll a 20 on an attack roll with this weapon against a creature that has at least one head, you cut off one of the creature’s heads. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides it is too big. Such a creature instead takes an extra 6d8 slashing damage."
        }),

        new MagicItem({
            name: "Well of Many Worlds",
            rarity: "Legendary",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [97, 100],
            description: "This fine black cloth, soft as silk, is folded up to the size of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n\nYou can use an action to unfold and place the well on a solid surface, creating a two-way portal to another world or plane. Each time the well is used, roll a d100 to determine a random destination.\n\nThe portal lasts until the cloth is folded back up, which takes an action. Anything that passes through the portal while it is open is transported to the destination plane. The well can be used once per day."
        })

    ]
};

export default tableE;
