import { MagicItem } from "../models/MagicItem.js";

export const tableB = {
    range: [10, 18],
    items: [
        new MagicItem({
            name: "Wand of Magic Detection",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [1, 1],
            description: "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the detect magic spell from it. The wand regains 1d3 expended charges daily at dawn."
        }),

        new MagicItem({
            name: "Wand of Magic Missiles",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [2, 3],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the magic missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed."
        }),

        new MagicItem({
            name: "Wand of Secrets",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [4, 4],
            description: "The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn."
        }),

        new MagicItem({
            name: "Wand of the War Mage, +1",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: true,
            range: [5, 5],
            description: "While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
        }),

        new MagicItem({
            name: "Wand of Conducting",
            rarity: "Common",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [6, 6],
            description: "This wooden baton is decorated with musical notes. While holding it, you can use an action to cause it to start conducting music of your choice, audible out to 30 feet. The conducting lasts for 1 minute or until you use an action to end it. The conducting requires no concentration and continues even if you release the wand. Once used, the wand can't be used again until the next dawn."
        }),

        new MagicItem({
            name: "Arcane Grimoire",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [7, 7],
            description: "While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a +1 bonus to spell attack rolls and to the saving throw DCs of your wizard spells.\n\nYou can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1."
        }),

        new MagicItem({
            name: "Weapon, +1",
            rarity: "Uncommon",
            type: "Weapon (any)",
            weight: "Varies",
            attunement: false,
            range: [8, 9],
            description: "You have a +1 bonus to attack and damage rolls made with this magic weapon."
        }),

        new MagicItem({
            name: "Weapon of Warning",
            rarity: "Uncommon",
            type: "Weapon (any)",
            weight: "Varies",
            attunement: true,
            range: [10, 10],
            description: "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins."
        }),

        new MagicItem({
            name: "Wind Fan",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [11, 11],
            description: "While holding this fan, you can use an action to cast the gust of wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters."
        }),

        new MagicItem({
            name: "Spell Scroll (2nd Level)",
            rarity: "Uncommon",
            type: "Scroll",
            weight: 0.1,
            attunement: false,
            range: [12, 12],
            description: "A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n\nIf the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 12. On a failed check, the spell disappears from the scroll with no other effect.\n\nThe level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.\n\nA 2nd level spell scroll has a spell save DC of 13, an attack bonus of +5, and is of uncommon rarity."
        }),

        new MagicItem({
            name: "Adamantine Armor",
            rarity: "Uncommon",
            type: "Armor (medium or heavy, but not hide)",
            weight: "Varies",
            attunement: false,
            range: [13, 13],
            description: "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit."
        }),

        new MagicItem({
            name: "Alchemy Jug",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 12,
            attunement: false,
            range: [14, 14],
            description: "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.\n\nYou can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.\n\nOnce the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\nLiquid | Max Amount\n--- | ---\nAcid | 8 ounces\nBasic poison | 1/2 ounce\nBeer | 4 gallons\nHoney | 1 gallon\nMayonnaise | 2 gallons\nOil | 1 quart\nVinegar | 2 gallons\nWater, fresh | 8 gallons\nWater, salt | 12 gallons\nWine | 1 gallon"
        }),

        new MagicItem({
            name: "Ammunition, +1",
            rarity: "Uncommon",
            type: "Weapon (any ammunition)",
            weight: "Varies",
            attunement: false,
            range: [15, 15],
            description: "You have a +1 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical."
        }),

        new MagicItem({
            name: "Amulet of Proof Against Detection and Location",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [16, 16],
            description: "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors."
        }),

        new MagicItem({
            name: "Bag of Holding",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 15,
            attunement: false,
            range: [17, 18],
            description: "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n\nIf the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n\nPlacing a bag of holding inside an extradimensional space created by a handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
        }),

        new MagicItem({
            name: "Bag of Tricks (Gray)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [19, 19],
            description: "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.\n\nYou can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table for the bag's color. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n\nThe creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n\nOnce three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\nd8 | Creature\n--- | ---\n1 | Weasel\n2 | Giant rat\n3 | Badger\n4 | Boar\n5 | Panther\n6 | Giant badger\n7 | Dire wolf\n8 | Giant elk"
        }),

        new MagicItem({
            name: "Bag of Tricks (Rust)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [20, 20],
            description: "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.\n\nYou can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table for the bag's color. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n\nThe creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n\nOnce three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\nd8 | Creature\n--- | ---\n1 | Rat\n2 | Owl\n3 | Mastiff\n4 | Goat\n5 | Giant goat\n6 | Giant boar\n7 | Lion\n8 | Brown bear"
        }),

        new MagicItem({
            name: "Bag of Tricks (Tan)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [21, 21],
            description: "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.\n\nYou can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table for the bag's color. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n\nThe creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n\nOnce three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\nd8 | Creature\n--- | ---\n1 | Jackal\n2 | Ape\n3 | Baboon\n4 | Axe beak\n5 | Black bear\n6 | Giant weasel\n7 | Giant hyena\n8 | Tiger"
        }),

        new MagicItem({
            name: "Boots of Elvenkind",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [22, 22],
            description: "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently."
        }),

        new MagicItem({
            name: "Boots of Striding and Springing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [23, 23],
            description: "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow."
        }),

        new MagicItem({
            name: "Boots of the Winterlands",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [24, 24],
            description: "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n\n• You have resistance to cold damage.\n• You ignore difficult terrain created by ice or snow.\n• You can tolerate temperatures as low as −50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as −100 degrees Fahrenheit."
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
            range: [26, 27],
            description: "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the magic missile spell."
        }),

        new MagicItem({
            name: "Broom of Flying",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [28, 28],
            description: "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n\nYou can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you."
        }),

        new MagicItem({
            name: "Circlet of Blasting",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [29, 29],
            description: "While wearing this circlet, you can use an action to cast the scorching ray spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn."
        }),

        new MagicItem({
            name: "Ring of Jumping",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0.1,
            attunement: true,
            range: [30, 30],
            description: "While wearing this ring, you can cast the jump spell from it as a bonus action at will, but can target only yourself when you do so."
        }),

        new MagicItem({
            name: "Ring of Mind Shielding",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0.1,
            attunement: true,
            range: [31, 31],
            description: "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n\nYou can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n\nIf you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication."
        }),

        new MagicItem({
            name: "Ring of Swimming",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0.1,
            attunement: false,
            range: [32, 32],
            description: "You have a swimming speed of 40 feet while wearing this ring."
        }),

        new MagicItem({
            name: "Ring of Warmth",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0.1,
            attunement: true,
            range: [33, 33],
            description: "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as −50 degrees Fahrenheit."
        }),

        new MagicItem({
            name: "Ring of Water Walking",
            rarity: "Uncommon",
            type: "Ring",
            weight: 0.1,
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
            range: [35, 35],
            description: "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n\nYou can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:\n\n• \"Stream\" produces 1 gallon of water.\n• \"Fountain\" produces 5 gallons of water.\n• \"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Bronze Griffon)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [36, 36],
            description: "A bronze figurine of wondrous power is a statuette of a griffon small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living Bronze griffon for up to 24 hours. If it is slain, it reverts to its figurine form and cannot be used again until 7 days have passed.\n\nThe bronze griffon acts as per a normal griffon except that it will serve as a mount for you and up to two other creatures you designate and will follow simple verbal commands. The DM has the griffon's statistics."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Ebony Fly)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [37, 37],
            description: "A ebony figurine of wondrous power is a statuette of a fly small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant fly for up to 12 hours. If it is slain, it reverts to its figurine form and cannot be used again until 2 days have passed.\n\nThe giant fly is the size of a pony and has the statistics of a riding horse but with a flying speed of 60 feet. It will serve as a mount for a small or medium creature and will follow simple verbal commands."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Golden Lions)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [38, 38],
            description: "These golden statuettes of lions are always created in pairs. If you use an action to speak the command word and throw a figurine to a point on the ground within 60 feet of you, the figurine becomes a living lion for up to 1 hour. If you cast both figurines within 60 feet of each other, the lions become a mated pair, with increased aggression, loyalty and intelligence. If either lion is slain, they revert to their figurine form and cannot be used again until 7 days have passed.\n\nThe lions will follow simple verbal commands and fight alongside you. The DM has the lions' statistics."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Ivory Goats)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [39, 39],
            description: "These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. The command word for all three figurines is the same.\n\nThe goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.\n\nThe goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.\n\nThe goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you ride it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Marble Elephant)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [40, 40],
            description: "A marble figurine of wondrous power is a statuette of an elephant small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living elephant for up to 24 hours. If it is slain, it reverts to its figurine form and cannot be used again until 7 days have passed.\n\nThe elephant will serve as a beast of burden, and will follow simple verbal commands. The DM has the elephant's statistics."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Onyx Dog)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [41, 41],
            description: "An onyx figurine of wondrous power is a statuette of a dog small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living mastiff for up to 6 hours. If it is slain, it reverts to its figurine form and cannot be used again until 7 days have passed.\n\nThe mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. The mastiff is friendly to you and your allies, and will follow simple verbal commands. The DM has the mastiff's statistics."
        }),

        new MagicItem({
            name: "Figurine of Wondrous Power (Serpentine Owl)",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [42, 42],
            description: "A serpentine figurine of wondrous power is a statuette of an owl small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant owl for up to 8 hours. If it is slain, it reverts to its figurine form and is destroyed. Once used, it can't be used again until 2 days have passed.\n\nThe giant owl has an Intelligence of 8 and can speak Common, Elvish, and Sylvan. It has darkvision with a range of 120 feet, and it can see in dim light as if it were bright light. While it's active, it can fly to deliver messages. The owl won't fight for you, but it will follow simple commands and will fight to defend itself. The DM has the giant owl's statistics."
        }),
        new MagicItem({
            name: "Deck of Illusions",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [43, 44],
            description: "This box contains a set of parchment cards. A full deck has 34 cards. A deck missing cards still has its magic, but the chances of drawing the same card twice increase.\n\nBefore you draw a card, you must announce how many cards you intend to draw and then draw them randomly from the deck. Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect.\n\nYou can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you. An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature, except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent.\n\nThe illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can't be used again."
        }),

        new MagicItem({
            name: "Driftglobe",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [45, 45],
            description: "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the light or daylight spell. Once used, the daylight effect can't be used again until the next dawn.\n\nYou can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out."
        }),

        new MagicItem({
            name: "Efficient Quiver",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [46, 46],
            description: "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n\nYou can draw any item the quiver contains as if doing so from a regular quiver or scabbard."
        }),

        new MagicItem({
            name: "Eversmoking Bottle",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [47, 47],
            description: "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.\n\nThe cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round."
        }),

        new MagicItem({
            name: "Eyes of Charming",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [48, 48],
            description: "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the charm person spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn."
        }),

        new MagicItem({
            name: "Eyes of Minute Seeing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [49, 49],
            description: "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range."
        }),

        new MagicItem({
            name: "Eyes of the Eagle",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [50, 51],
            description: "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
        }),

        new MagicItem({
            name: "Pipes of Haunting",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [52, 52],
            description: "You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn."
        }),

        new MagicItem({
            name: "Pipes of the Sewers",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [53, 53],
            description: "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.\n\nThe pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.\n\nWhenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours."
        }),

        new MagicItem({
            name: "Gauntlets of Ogre Power",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [54, 54],
            description: "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them."
        }),

        new MagicItem({
            name: "Gem of Brightness",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [55, 55],
            description: "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:\n\n• The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.\n\n• The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n• The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.\n\nWhen all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp."
        }),

        new MagicItem({
            name: "Gloves of Missile Snaring",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [56, 56],
            description: "These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand."
        }),

        new MagicItem({
            name: "Gloves of Swimming and Climbing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [57, 57],
            description: "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim."
        }),

        new MagicItem({
            name: "Goggles of Night",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.25,
            attunement: false,
            range: [58, 58],
            description: "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet."
        }),

        new MagicItem({
            name: "Cloak of Elvenkind",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [59, 60],
            description: "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action."
        }),

        new MagicItem({
            name: "Cloak of Protection",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [61, 61],
            description: "You gain a +1 bonus to AC and saving throws while you wear this cloak."
        }),

        new MagicItem({
            name: "Cloak of the Manta Ray",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [62, 62],
            description: "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action."
        }),

        new MagicItem({
            name: "Hat of Disguise",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [63, 63],
            description: "While wearing this hat, you can use an action to cast the disguise self spell from it at will. The spell ends if the hat is removed."
        }),

        new MagicItem({
            name: "Headband of Intellect",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [64, 64],
            description: "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it."
        }),

        new MagicItem({
            name: "Helm of Comprehending Languages",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [65, 65],
            description: "While wearing this helm, you can use an action to cast the comprehend languages spell from it at will."
        }),

        new MagicItem({
            name: "Helm of Telepathy",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [66, 66],
            description: "While wearing this helm, you can use an action to cast the detect thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply—using a bonus action to do so—while your focus on it continues.\n\nWhile focusing on a creature with detect thoughts, you can use an action to cast the suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn."
        }),

        new MagicItem({
            name: "Horseshoes of Speed",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 4,
            attunement: false,
            range: [67, 67],
            description: "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet."
        }),

        new MagicItem({
            name: "Immovable Rod",
            rarity: "Uncommon",
            type: "Rod",
            weight: 2,
            attunement: false,
            range: [68, 69],
            description: "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success."
        }),

        new MagicItem({
            name: "Keoghtom's Ointment",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [70, 70],
            description: "This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.\n\nAs an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease."
        }),

        new MagicItem({
            name: "Lantern of Revealing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [71, 71],
            description: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius."
        }),

        new MagicItem({
            name: "Medallion of Thoughts",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [72, 72],
            description: "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the detect thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn."
        }),

        new MagicItem({
            name: "Spell Scroll (3rd Level)",
            rarity: "Uncommon",
            type: "Scroll",
            weight: 0.1,
            attunement: false,
            range: [73, 73],
            description: "A spell scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n\nIf the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 13. On a failed check, the spell disappears from the scroll with no other effect.\n\nThe level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as shown in the Spell Scroll table.\n\nA 3rd level spell scroll has a spell save DC of 15, an attack bonus of +7, and is of uncommon rarity."
        }),

        new MagicItem({
            name: "Mithral Armor",
            rarity: "Uncommon",
            type: "Armor (medium or heavy, but not hide)",
            weight: "Varies",
            attunement: false,
            range: [74, 75],
            description: "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.\n\nA mithral chain shirt weighs 10 pounds.\nA mithral breastplate weighs 15 pounds.\nMithral heavy armor weighs 25 pounds."
        }),

        new MagicItem({
            name: "Periapt of Health",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [76, 76],
            description: "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed while you wear the pendant."
        }),

        new MagicItem({
            name: "Periapt of Wound Closure",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [77, 77],
            description: "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores."
        }),

        new MagicItem({
            name: "Portable Hole",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [78, 78],
            description: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n\nYou can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.\n\nYou can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n\nIf the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.\n\nPlacing a portable hole inside an extradimensional space created by a bag of holding, handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
        }),

        new MagicItem({
            name: "Quiver of Ehlonna",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [79, 79],
            description: "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n\nYou can draw any item the quiver contains as if doing so from a regular quiver or scabbard."
        }),
        new MagicItem({
            name: "Robe of Useful Items",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [80, 80],
            description: "This robe has cloth patches of various shapes and colors sewn into it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n• Dagger\n• Bullseye lantern (filled and lit)\n• Steel mirror\n• 10-foot pole\n• Hempen rope (50 feet, coiled)\n• Sack\n\nIn addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly.\n\nd100 | Patch\n----- | -----\n1-8 | Bag of 100 gp\n9-15 | Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n16-22 | Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n23-30 | 10 gems worth 100 gp each\n31-44 | Wooden ladder (24 feet long)\n45-51 | A riding horse with saddle bags\n52-59 | Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you\n60-68 | 4 potions of healing\n69-75 | Rowboat (12 feet long)\n76-83 | Spell scroll containing one spell of 1st to 3rd level\n84-90 | 2 mastiffs\n91-96 | Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n97-00 | Portable ram"
        }),

        new MagicItem({
            name: "Rope of Climbing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [81, 81],
            description: "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds.\n\nIf you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop.\n\nYou can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n\nIf you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.\n\nThe rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
        }),

        new MagicItem({
            name: "Saddle of the Cavalier",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 25,
            attunement: false,
            range: [82, 82],
            description: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
        }),

        new MagicItem({
            name: "Sending Stones",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [83, 83],
            description: "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the sending spell from it to the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n\nOnce sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical."
        }),

        new MagicItem({
            name: "Slippers of Spider Climbing",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: true,
            range: [84, 84],
            description: "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil."
        }),

        new MagicItem({
            name: "Staff of the Python",
            rarity: "Uncommon",
            type: "Staff",
            weight: 4,
            attunement: true,
            range: [85, 85],
            description: "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n\nOn your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n\nIf the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them."
        }),

        new MagicItem({
            name: "Trident of Fish Command",
            rarity: "Uncommon",
            type: "Weapon (trident)",
            weight: 4,
            attunement: true,
            range: [86, 86],
            description: "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast dominate beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Winged Boots",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 1,
            attunement: true,
            range: [87, 88],
            description: "While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n\nThe boots regain 2 hours of flying capability for every 12 hours they aren't in use."
        }),

        new MagicItem({
            name: "Wingwear",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 4,
            attunement: false,
            range: [89, 90],
            description: "This fine cloth garment is fashioned from white feathers and designed to be worn over clothing. It has tiny loops for a wearer's thumbs, allowing the garment to be stretched out to form wings.\n\nAs an action, the wearer can speak a command word and transform the garment into a pair of wings on the wearer's back. Another command word, spoken as an action, returns the wingwear to its normal form.\n\nWhile transformed, the wings give the wearer a flying speed of 30 feet. When the wearer is falling (whether the wings are transformed or not), the wearer can use a reaction to transform the wingwear into wings (if it isn't already transformed), and at the end of the fall, the wearer takes no falling damage if still conscious and able to use the wings."
        }),

        new MagicItem({
            name: "Wheel of Wind and Water",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [91, 93],
            description: "This wheel is made from lashed driftwood inlaid with ivory and gold, with a carved wooden fish or water elemental as the wheel's hub. While the wheel is mounted at the helm of a water vehicle, a creature attuned to the wheel can use an action to activate it and gain one of the following effects:\n\n• Calm. The weather clears in a 1-mile radius centered on the vehicle. The clear weather lasts for 8 hours and doesn't disperse existing fog, only prevent new fog from forming.\n\n• Wind. A 30-foot wind blows from directly behind the vehicle for 8 hours, giving advantage on ability checks to determine the vehicle's speed. If the vehicle has sails, its speed is increased by 5 miles per hour.\n\n• Storm. Storm clouds form in a 1-mile radius centered on the vehicle. The temperature becomes cold, visibility is limited to 300 feet, and there is a 50 percent chance each hour that a lightning bolt streaks down from the clouds to strike the tallest conductive surface within range. The lightning bolt deals damage as normal. The storm lasts for 1 hour.\n\n• Mist. Dense fog spreads out from the vehicle to a radius of 1 mile, making the area heavily obscured. The fog lasts for 1 hour and doesn't disperse due to wind."
        }),

        new MagicItem({
            name: "Wings of Flying",
            rarity: "Rare",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [94, 96],
            description: "While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours."
        }),

        new MagicItem({
            name: "Stone of Good Luck (Luckstone)",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: true,
            range: [97, 100],
            description: "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws."
        })

    ]
};

export default tableB;