import { MagicItem } from "../models/MagicItem.js";

export const tableB = {
    range: [10, 18],
    items: [
        new MagicItem({
            name: "Wand of Magic Detection",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [1, 1],
            description: "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the **detect magic** spell from it.\n\nThe wand regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of Magic Missiles",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [2, 2],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the **magic missile** spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a roll of 1, the wand crumbles into ash and is destroyed."
        }),
        new MagicItem({
            name: "Wand of Secrets",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [3, 3],
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge. If a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you.\n\nThe wand regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of the War Mage, +1",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [4, 4],
            description: "While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
        }),
        new MagicItem({
            name: "Wand of Conducting",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [5, 5],
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge and cause the wand to emit music for 1 minute. The music can be heard up to 60 feet away and ends early if you stop holding the wand.\n\nThe wand regains all expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Arcane Grimoire",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [6, 6],
            description: "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells.\n\nYou gain a +1 bonus to spell attack rolls and to the saving throw DCs of your wizard spells.\n\nYou can use this book as a spellbook. If you do so, it does not count against the number of spellbooks you can use."
        }),
        new MagicItem({
            name: "Weapon, +1",
            rarity: "Uncommon",
            type: "Weapon",
            weight: 3,
            attunement: false,
            range: [7, 7],
            description: "You have a +1 bonus to attack and damage rolls made with this magic weapon."
        }),
        new MagicItem({
            name: "Weapon of Warning",
            rarity: "Uncommon",
            type: "Weapon",
            weight: 3,
            attunement: true,
            range: [8, 8],
            description: "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. \n\nAdditionally, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins."
        }),
        new MagicItem({
            name: "Wind Fan",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [9, 9],
            description: "While holding this fan, you can use an action to cast the **gust of wind** spell (save DC 13) from it. Once used, the fan shouldn’t be used again until the next dawn. \n\nEach time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters."
        }),
        new MagicItem({
            name: "Spell Scroll (2nd Level)",
            rarity: "Uncommon",
            type: "Scroll",
            weight: 0,
            attunement: false,
            isConsumable: true,
            range: [10, 10],
            description: "A **spell scroll** bears the words of a single spell, written in a magical script. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible.\n\nOnce the spell is cast, the words on the scroll fade, and it crumbles to dust.\n\nIf the spell requires concentration, it lasts for the full duration but requires concentration as normal."
        }),
        new MagicItem({
            name: "Adamantine Armor",
            rarity: "Uncommon",
            type: "Armor",
            weight: 40,
            attunement: false,
            range: [11, 12],
            description: "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. \n\nWhile you’re wearing it, any critical hit against you becomes a normal hit."
        }),
        new MagicItem({
            name: "Alchemy Jug",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 12,
            attunement: false,
            range: [13, 13],
            description: "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.\n\nYou can use an action to name one liquid from the table below, and cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.\n\nThe jug regains its properties at dawn."
        }),
        new MagicItem({
            name: "Ammunition, +1",
            rarity: "Uncommon",
            type: "Weapon (any ammunition)",
            weight: 0.05,
            attunement: false,
            range: [14, 14],
            description: "You have a +1 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition loses its magic."
        }),
        new MagicItem({
            name: "Amulet of Proof Against Detection and Location",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [15, 15],
            description: "While wearing this amulet, you are hidden from divination magic. You can’t be targeted by such magic or perceived through magical scrying sensors."
        }),
        new MagicItem({
            name: "Bag of Holding",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 15,
            attunement: false,
            range: [16, 16],
            description: "This bag has an interior space considerably larger than its outside dimensions. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag always weighs 15 pounds, regardless of contents.\n\nRetrieving an item from the bag requires an action. If the bag is overloaded, pierced, or torn, it ruptures and is destroyed. Its contents spill into the Astral Plane."
        }),
        new MagicItem({
            name: "Bag of Tricks (Gray)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [17, 18],
            description: "This small bag appears empty. Reaching inside reveals a small, fuzzy object. You can use an action to pull the object from the bag and throw it up to 20 feet. When it lands, it transforms into a creature, determined by a d8 roll. The creature is friendly to you and your companions.\n\nThe creature vanishes at the next dawn or when reduced to 0 hit points."
        }),
        new MagicItem({
            name: "Bag of Tricks (Rust)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [19, 19],
            description: "Functions identically to the Gray Bag of Tricks, but summons a different set of animals determined by a different d8 roll table."
        }),
        new MagicItem({
            name: "Bag of Tricks (Tan)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [20, 20],
            description: "Functions identically to the Gray Bag of Tricks, but summons another unique set of animals determined by a third d8 roll table."
        }),
        new MagicItem({
            name: "Boots of Elvenkind",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [21, 21],
            description: "While you wear these boots, your steps make no sound, regardless of the surface. You also have advantage on Dexterity (Stealth) checks that rely on moving silently."
        }),
        new MagicItem({
            name: "Boots of Striding and Springing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [22, 22],
            description: "While you wear these boots, your walking speed becomes 30 feet, unless it is higher. Your speed isn’t reduced if you are encumbered or wearing heavy armor. You can also jump three times the normal distance, though you can’t jump farther than your remaining movement would allow."
        }),
        new MagicItem({
            name: "Boots of the Winterlands",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [23, 24],
            description: "These fur-lined boots keep your feet warm and dry, no matter the environment. You have resistance to cold damage, ignore difficult terrain created by ice or snow, and can tolerate temperatures as low as -50 degrees Fahrenheit without additional protection."
        }),
        new MagicItem({
            name: "Bracers of Archery",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [25, 25],
            description: "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."
        }),
        new MagicItem({
            name: "Brooch of Shielding",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [26, 26],
            description: "While wearing this brooch, you have resistance to force damage, and you are immune to damage from the magic missile spell."
        }),
        new MagicItem({
            name: "Broom of Flying",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [27, 27],
            description: "This wooden broom functions like a flying carpet, capable of carrying up to 400 pounds at a speed of 50 feet. It can be summoned to your hand with a command word if within 1 mile."
        }),
        new MagicItem({
            name: "Circlet of Blasting",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [28, 28],
            description: "While wearing this circlet, you can use an action to cast the scorching ray spell (save DC 15). Once used, the circlet can't be used again until the next dawn."
        }),
        new MagicItem({
            name: "Ring of Jumping",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [29, 30],
            description: "While wearing this ring, you can cast the jump spell from it as a bonus action at will, no components required."
        }),
        new MagicItem({
            name: "Ring of Mind Shielding",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [31, 31],
            description: "While wearing this ring, your thoughts can't be read, creatures can't detect your presence with divination magic, and you are immune to magic that would determine if you are lying. If you die while wearing it, your soul can choose to reside in the ring."
        }),
        new MagicItem({
            name: "Ring of Swimming",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0,
            attunement: false,
            range: [32, 32],
            description: "While wearing this ring, you have a swimming speed of 40 feet."
        }),
        new MagicItem({
            name: "Ring of Warmth",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0,
            attunement: true,
            range: [33, 33],
            description: "While wearing this ring, you have resistance to cold damage. You and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit."
        }),
        new MagicItem({
            name: "Ring of Water Walking",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0,
            attunement: false,
            range: [34, 34],
            description: "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground."
        }),
        new MagicItem({
            name: "Decanter of Endless Water",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [35, 36],
            description: "This stoppered flask sloshes when shaken, as if full of water. It can produce fresh water in three ways: \"stream\" (1 gallon), \"fountain\" (5 gallons), or \"geyser\" (30 gallons) per action. The geyser can push creatures away and knock them prone."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Bronze Griffon)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [37, 38],
            description: "A bronze griffon that can become a living griffon for up to 6 hours. It can't be used again until 5 days have passed."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Ebony Fly)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [39, 39],
            description: "An ebony fly that becomes a giant fly for up to 12 hours. It can’t be used again for 2 days."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Golden Lions)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [40, 40],
            description: "Two golden lions that become lions for up to 1 hour. They can’t be used again for 7 days."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Ivory Goats)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [41, 41],
            description: "Three ivory goats with different magical effects. Each can be used once every 7 days."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Marble Elephant)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [42, 43],
            description: "A marble elephant that becomes an elephant for up to 24 hours. Can’t be used again for 7 days."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Onyx Dog)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [44, 44],
            description: "An onyx dog that becomes a mastiff for up to 6 hours. Can’t be used again for 7 days."
        }),
        new MagicItem({
            name: "Figurine of Wondrous Power (Serpentine Owl)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [45, 45],
            description: "A serpentine owl that becomes a giant owl for up to 8 hours. Can’t be used again for 2 days."
        }),
        new MagicItem({
            name: "Deck of Illusions",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [46, 46],
            description: "This box contains a set of parchment cards. You can use an action to draw a card and throw it to the ground, creating an illusion of a creature."
        }),
        new MagicItem({
            name: "Driftglobe",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [47, 47],
            description: "This small sphere of glass sheds bright light and can be commanded to cast **light** or **daylight**."
        }),
        new MagicItem({
            name: "Efficient Quiver",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [48, 49],
            description: "This quiver has extra-dimensional spaces that hold numerous items. It can hold up to 60 arrows, 18 javelins, and 6 long objects like bows or spears."
        }),
        new MagicItem({
            name: "Eversmoking Bottle",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [50, 50],
            description: "Smoke pours out of the bottle in a 60-foot radius until you use an action to stop it. The smoke spreads around corners and heavily obscures the area."
        }),
        new MagicItem({
            name: "Eyes of Charming",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [51, 51],
            description: "These crystal lenses fit over the eyes. While wearing them, you can cast the **charm person** spell (save DC 13) three times per day."
        }),
        new MagicItem({
            name: "Eyes of Minute Seeing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [52, 52],
            description: "While wearing these lenses, you can see much better than normal out to a range of 1 foot. You have advantage on Investigation checks that rely on sight while searching an area or studying an object within that range."
        }),
        new MagicItem({
            name: "Eyes of the Eagle",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [53, 53],
            description: "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
        }),
        new MagicItem({
            name: "Pipes of Haunting",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [54, 54],
            description: "You can use an action to play these pipes and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute."
        }),
        new MagicItem({
            name: "Pipes of the Sewers",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [55, 56],
            description: "You can use an action to play these pipes and cast **animal friendship** (save DC 10) on rats while playing. You can also use an action to summon 1d4 swarms of rats with the pipes. Once used, the pipes can’t summon rats again until the next dawn."
        }),
        new MagicItem({
            name: "Gauntlets of Ogre Power",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [57, 57],
            description: "Your Strength score is 19 while you wear these gauntlets. They have no effect if your Strength is already 19 or higher."
        }),
        new MagicItem({
            name: "Gem of Brightness",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [58, 58],
            description: "This prism has 50 charges. While holding it, you can use an action to expend 1 to 5 charges to create a beam of light. You can also use it to blind a creature or create daylight."
        }),
        new MagicItem({
            name: "Gloves of Missile Snaring",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [59, 59],
            description: "When a ranged weapon attack hits you while you’re wearing these gloves, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier. If damage is reduced to 0, you catch the missile if it’s small enough."
        }),
        new MagicItem({
            name: "Gloves of Swimming and Climbing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [60, 61],
            description: "While wearing these gloves, you gain a swimming speed and a climbing speed equal to your walking speed."
        }),
        new MagicItem({
            name: "Goggles of Night",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [62, 62],
            description: "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet."
        }),
        new MagicItem({
            name: "Cloak of Elvenkind",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [63, 63],
            description: "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak’s color shifts to camouflage you."
        }),
        new MagicItem({
            name: "Cloak of Protection",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [64, 64],
            description: "You gain a +1 bonus to AC and saving throws while you wear this cloak."
        }),
        new MagicItem({
            name: "Cloak of the Manta Ray",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [65, 65],
            description: "While wearing this cloak with its hood up, you can breathe underwater and have a swimming speed of 60 feet."
        }),
        new MagicItem({
            name: "Hat of Disguise",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [66, 67],
            description: "While wearing this hat, you can use an action to cast the **disguise self** spell at will. The spell ends if the hat is removed."
        }),
        new MagicItem({
            name: "Headband of Intellect",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [68, 68],
            description: "While wearing this headband, your Intelligence score is 19. It has no effect if your Intelligence is already 19 or higher."
        }),
        new MagicItem({
            name: "Helm of Comprehending Languages",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [69, 69],
            description: "While wearing this helm, you can use an action to cast the **comprehend languages** spell. The spell ends if the helm is removed."
        }),
        new MagicItem({
            name: "Helm of Telepathy",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [70, 70],
            description: "While wearing this helm, you can use an action to cast the **detect thoughts** spell (save DC 13). As a bonus action, you can send a telepathic message to a creature you’re focused on."
        }),
        new MagicItem({
            name: "Horseshoes of Speed",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 12,
            attunement: false,
            range: [71, 71],
            description: "These horseshoes magically increase a horse’s speed by 30 feet. Attaching them takes 1 minute per horseshoe."
        }),
        new MagicItem({
            name: "Immovable Rod",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [72, 73],
            description: "This flat iron rod has a button on one end. You can press the button to fix the rod in place. It remains immobile, even in midair, until you or another creature pushes the button again."
        }),
        new MagicItem({
            name: "Keoghtom’s Ointment",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            isConsumable: true,
            range: [74, 74],
            description: "This sticky, translucent ointment smells faintly of aloe. The container holds 1d4 + 1 doses. As an action, one dose can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease."
        }),
        new MagicItem({
            name: "Lantern of Revealing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [75, 75],
            description: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light."
        }),
        new MagicItem({
            name: "Medallion of Thoughts",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.25,
            attunement: true,
            range: [76, 76],
            description: "This medallion has 3 charges. While wearing it, you can use an action to expend 1 charge to cast the **detect thoughts** spell (save DC 13). The medallion regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Spell Scroll (3rd Level)",
            rarity: "Uncommon",
            type: "Scroll",
            weight: 0,
            attunement: false,
            isConsumable: true,
            range: [77, 77],
            description: "A **spell scroll** bears the words of a single spell. If the spell is on your class’s list, you can read the scroll and cast its spell without components. The scroll crumbles after use.\n\nThe spell’s save DC is 15 and attack bonus is +7."
        }),
        new MagicItem({
            name: "Mithral Armor",
            rarity: "Uncommon",
            type: "Armor",
            weight: 40,
            attunement: false,
            range: [78, 79],
            description: "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth), the mithral version does not."
        }),
        new MagicItem({
            name: "Periapt of Health",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.25,
            attunement: true,
            range: [80, 80],
            description: "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects are suppressed while you wear the pendant."
        }),
        new MagicItem({
            name: "Periapt of Wound Closure",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.25,
            attunement: true,
            range: [81, 81],
            description: "While wearing this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll hit dice to regain HP, double the number of HP restored."
        }),
        new MagicItem({
            name: "Portable Hole",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [82, 82],
            description: "This fine black cloth unfolds into a circular hole 6 feet in diameter and 10 feet deep. Any object placed inside is stored in an extradimensional space. If the hole is folded up, everything inside is suspended in the space. If the hole is placed inside another extradimensional space (like a bag of holding), it opens a gate to the Astral Plane and destroys both items."
        }),
        new MagicItem({
            name: "Quiver of Ehlonna",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [83, 83],
            description: "This quiver has three compartments, each capable of holding different amounts and sizes of ammunition or weapons. Drawing an item from it takes no more time than drawing from a normal quiver."
        }),
        new MagicItem({
            name: "Robe of Useful Items",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [84, 87],
            description: "This robe has various cloth patches sewn into it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. The robe comes with a selection of standard patches and may include others determined randomly."
        }),
        new MagicItem({
            name: "Rope of Climbing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [88, 90],
            description: "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds.\n\nIf you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop.\n\nYou can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n\nIf you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.\n\nThe rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
        }),
        new MagicItem({
            name: "Saddle of the Cavalier",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 40,
            attunement: false,
            range: [91, 91],
            description: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against your mount have disadvantage."
        }),
        new MagicItem({
            name: "Sending Stones",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.25,
            attunement: false,
            range: [92, 92],
            description: "Sending stones come in pairs. Each stone can send a 25-word message to the bearer of the other, anywhere on the same plane. Once used, the stones can’t be used again until the next dawn."
        }),
        new MagicItem({
            name: "Slippers of Spider Climbing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [93, 93],
            description: "While wearing these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You need not make an ability check if the surface is not slippery."
        }),
        new MagicItem({
            name: "Staff of the Python",
            rarity: "Uncommon",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [94, 94],
            description: "You can use an action to speak this staff’s command word and throw it to the ground within 10 feet of you. The staff becomes a Giant Constrictor Snake under your control. It returns to staff form if it drops to 0 hit points or after 1 hour."
        }),
        new MagicItem({
            name: "Trident of Fish Command",
            rarity: "Uncommon",
            type: "Weapon (Trident)",
            weight: 4,
            attunement: true,
            range: [95, 95],
            description: "This magical trident grants you the ability to cast **dominate beast** on beasts with a swimming speed, three times per day (save DC 15). It regains all expended uses daily at dawn."
        }),
        new MagicItem({
            name: "Winged Boots",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [96, 96],
            description: "These boots allow you to fly at your walking speed for up to 4 hours. You can use the time in any increment. The boots regain 2 hours of flying time every 12 hours."
        }),
        new MagicItem({
            name: "Wingwear",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [97, 97],
            description: "This sleek cape has hidden feathered wings. As a bonus action, you can activate it to gain a flying speed equal to your walking speed for 10 minutes. Usable once per long rest."
        }),
        new MagicItem({
            name: "Wheel of Wind and Water",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 10,
            attunement: false,
            range: [98, 98],
            description: "When affixed to a ship's helm, this wheel grants advantage on Dexterity (Vehicles—Water) checks made to steer the ship. Once per day, it can cast **control water** (helm only)."
        }),
        new MagicItem({
            name: "Wings of Flying",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [99, 99],
            description: "Wings sprout from this cloak when you use an action to speak its command word. You gain a flying speed of 60 feet for 1 hour. Once used, it can't be used again until the next dawn."
        }),
        new MagicItem({
            name: "Stone of Good Luck (Luckstone)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [100, 100],
            description: "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws."
        }),


    ]
};

export default tableB;