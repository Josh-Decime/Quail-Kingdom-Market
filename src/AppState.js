import { reactive } from 'vue';
import { MagicItem } from './models/MagicItem.js';

export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  // Store magic items categorized by rarity, excluding consumables
  magicItems: {
    common: [
      new MagicItem(
        'Moon-Touched Sword', 'Common',
        'A sword that sheds moonlight in darkness, granting dim light in a 15-foot radius.',
        3, 'Weapon'
      ),
      new MagicItem(
        'Armor of Gleaming', 'Common',
        'This armor never gets dirty or stained.',
        10, 'Armor'
      )
    ],
    uncommon: [
      new MagicItem(
        'Rope of Climbing', 'Uncommon',
        `This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.

If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.

The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.`,
        3, 'Wondrous Item'
      ),
      new MagicItem(
        'Headband of Intellect', 'Uncommon',
        'Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is 19 or higher without it.',
        0, 'Wondrous Item', true
      ),
      new MagicItem(
        'Bag of Holding', 'Uncommon',
        'This bag can hold up to 500 pounds of material, but it always weighs only 15 pounds.',
        15, 'Wondrous Item'
      ),
      new MagicItem(
        'Cloak of Protection', 'Uncommon',
        'You gain a +1 bonus to AC and saving throws while wearing this cloak.',
        1, 'Wondrous Item', true
      )
    ],
    rare: [
      new MagicItem(
        'Amulet of Health', 'Rare',
        'Your Constitution score is 19 while you wear this amulet. It has no effect if your Constitution is already 19 or higher.',
        0, 'Wondrous Item', true
      ),
      new MagicItem(
        'Ring of Spell Storing', 'Rare',
        'This ring stores spells cast into it, up to a total of 5 levels worth of spells.',
        0, 'Ring', true
      ),
      new MagicItem(
        'Wand of Fireballs', 'Rare',
        'This wand has 7 charges. While holding it, you can use an action to expend charges to cast Fireball (save DC 15).',
        1, 'Wand'
      ),
      new MagicItem(
        'Cloak of Displacement', 'Rare',
        'While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing attack rolls against you to have disadvantage. If you take damage, the property ceases to function until the start of your next turn.',
        1, 'Wondrous Item', true
      )
    ]
  },

  // Homebrew items stored separately with a toggle
  homebrewItems: [],
  allowHomebrew: false,

  // Rolling results
  rollResults: {
    tableRoll: null,
    itemCountRoll: null,
    selectedItems: []
  }
});
