import { MagicItem } from '../models/MagicItem.js';

export const blackMarketTableA = {
    range: [1001, 1009],
    items: [
        new MagicItem({
            name: "Accuracy Stone",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [1, 10],
            description: "This large, circular stone is etched with intercrossing lines and a central hole. While holding it, if you roll a natural 1 on an attack roll, you can choose to reroll the attack. If the reroll misses, the stone crumbles to dust. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Bolt of Step",
            rarity: "Common",
            type: "Weapon (crossbow bolt)",
            weight: 0.05,
            attunement: false,
            range: [11, 20],
            description: "This enchanted crossbow bolt holds one charge. When fired from a crossbow, for the next 1 minute, you can use a bonus action to teleport to the bolt’s location, provided it has stopped moving. The bolt regains its charge at dawn."
        }),
        new MagicItem({
            name: "Connected Hand-Mirrors",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [21, 30],
            description: "This pair of small hand-mirrors is magically linked, each displaying what is in front of the other. They can be used for communication or spying across distances, making them ideal for covert operations."
        }),
        new MagicItem({
            name: "Dagger of Denial",
            rarity: "Common",
            type: "Weapon (dagger)",
            weight: 1,
            attunement: false,
            range: [31, 40],
            description: "This dagger functions as a standard dagger, dealing piercing damage, but leaves no visible wounds on its target, making it perfect for discreet assassinations."
        }),
        new MagicItem({
            name: "Fine Mustache",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [41, 50],
            description: "This glorious fake mustache adheres to your upper lip, compelling others to compliment its fine quality. However, each time it is complimented, the mustache falls off, requiring reapplication."
        }),
        new MagicItem({
            name: "Flask of Perpetual Booze",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [51, 60],
            description: "This ornate platinum flask magically produces up to 1 gallon of dark, brackish whiskey when poured. It refills 1 hour after being emptied. Whiskey not consumed within 8 hours turns to brine."
        }),
        new MagicItem({
            name: "All-or-Nothing Coin",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [61, 70],
            description: "Instead of rolling a d20 for an attack, check, or save, you can flip this coin. Heads counts as a natural 20, tails as a natural 1. The coin can be used twice per short rest."
        }),
        new MagicItem({
            name: "Adventurer's Harness",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [71, 80],
            description: "This leather harness, adjustable with belt buckles, fits over or under armor. It magically secures up to three weapons or two weapons and a shield to your back, allowing you to draw them with ease."
        }),
        new MagicItem({
            name: "Arrow of Frost",
            rarity: "Common",
            type: "Weapon (arrow)",
            weight: 0.05,
            attunement: false,
            isConsumable: true,
            range: [81, 90],
            description: "This arrow, appearing to be made of ice that never melts, deals an extra 1d8 cold damage on a hit as it creates magical ice. The arrow shatters after dealing its damage."
        }),
        new MagicItem({
            name: "Trinket Tracker Compass",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [91, 100],
            description: "This compass points not to the north but to a designated mundane trinket, such as a coin or gem. Designate a trinket by holding it with the compass for 1 minute. It points to the trinket if it’s on the same plane."
        })
    ]
};

export default blackMarketTableA;