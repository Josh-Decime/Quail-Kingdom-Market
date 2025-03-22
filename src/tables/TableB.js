import { MagicItem } from "../models/MagicItem.js";

export const tableB = {
    range: [10, 18], // ✅ Ensure this is present
    items: [
        new MagicItem({
            name: "Wand of Magic Detection",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            description: "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the **detect magic** spell from it.\n\nThe wand regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of Magic Missiles",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the **magic missile** spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a roll of 1, the wand crumbles into ash and is destroyed."
        }),
        new MagicItem({
            name: "Wand of Secrets",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge. If a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you.\n\nThe wand regains 1d3 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of the War Mage, +1",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: true,
            description: "While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack."
        }),
        new MagicItem({
            name: "Wand of Conducting",
            rarity: "Uncommon",
            type: "Wand",
            weight: 1,
            attunement: false,
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge and cause the wand to emit music for 1 minute. The music can be heard up to 60 feet away and ends early if you stop holding the wand.\n\nThe wand regains all expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Weapon, +1",
            rarity: "Uncommon",
            type: "Weapon",
            weight: 3,
            attunement: false,
            description: "You have a +1 bonus to attack and damage rolls made with this magic weapon."
        }),
        new MagicItem({
            name: "Weapon of Warning",
            rarity: "Uncommon",
            type: "Weapon",
            weight: 3,
            attunement: true,
            description: "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. \n\nAdditionally, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins."
        }),
        new MagicItem({
            name: "Wind Fan",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            description: "While holding this fan, you can use an action to cast the **gust of wind** spell (save DC 13) from it. Once used, the fan shouldn’t be used again until the next dawn. \n\nEach time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters."
        }),
        new MagicItem({
            name: "Spell Scroll (2nd Level)",
            rarity: "Uncommon",
            type: "Scroll",
            weight: 0,
            attunement: false,
            isConsumable: true,
            description: "A **spell scroll** bears the words of a single spell, written in a magical script. If the spell is on your class’s spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible.\n\nOnce the spell is cast, the words on the scroll fade, and it crumbles to dust.\n\nIf the spell requires concentration, it lasts for the full duration but requires concentration as normal."
        }),
        new MagicItem({
            name: "Adamantine Armor",
            rarity: "Uncommon",
            type: "Armor",
            weight: 40,
            attunement: false,
            description: "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. \n\nWhile you’re wearing it, any critical hit against you becomes a normal hit."
        })
    ]
};

export default tableB;
