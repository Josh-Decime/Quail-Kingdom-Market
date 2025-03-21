import { reactive } from 'vue';
import { MagicItem } from './models/MagicItem.js';
import AllTables from './tables/AllTableManager.js';

export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  magicItems: AllTables, // 🔥 Loads all tables dynamically!

  // NOTE old tables, can be deleted once new table system is implemented
  // Store magic items categorized by rarity, excluding consumables
  // magicItems: {
  //   A: {
  //     range: [1, 5],
  //     items: [
  //       { range: [1, 25], name: 'Moon-Touched Sword', rarity: 'Common', type: 'Weapon', weight: 3, attunement: false, description: 'A sword that sheds moonlight in darkness, granting dim light in a 15-foot radius.\n\nIt is particularly useful for characters who lack darkvision.' },
  //       { range: [26, 50], name: 'Armor of Gleaming', rarity: 'Common', type: 'Armor', weight: 10, attunement: false, description: 'This armor never gets dirty or stained, making it ideal for those who want to maintain an immaculate appearance even after battles.' },
  //       { range: [51, 75], name: 'Hat of Vermin', rarity: 'Common', type: 'Wondrous Item', weight: 0, attunement: false, description: 'Once per day, the wearer can produce a harmless bat, rat, or frog.\n\nThe creature is mundane and disappears after a short time.' },
  //       { range: [76, 100], name: 'Candle of the Deep', rarity: 'Common', type: 'Wondrous Item', weight: 1, attunement: false, description: 'This magical candle remains lit even underwater.\n\nUseful for deep-sea exploration or illuminating areas with high humidity.' }
  //     ]
  //   },
  //   B: {
  //     range: [6, 10],
  //     items: [
  //       { range: [1, 33], name: 'Rope of Climbing', rarity: 'Uncommon', type: 'Wondrous Item', weight: 3, attunement: false, description: 'This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds.\n\nIf you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop.\n\nYou can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n\nIf you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.\n\nThe rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.' },
  //       { range: [34, 66], name: 'Headband of Intellect', rarity: 'Uncommon', type: 'Wondrous Item', weight: 0, attunement: true, description: 'Your Intelligence score is 19 while you wear this headband.\n\nIt has no effect on you if your Intelligence is 19 or higher without it.' },
  //       { range: [67, 100], name: 'Bag of Holding', rarity: 'Uncommon', type: 'Wondrous Item', weight: 15, attunement: false, description: 'This bag can hold up to 500 pounds of material, but it always weighs only 15 pounds.\n\nIf the bag is overloaded, or if a sharp object pierces it, the bag ruptures and is destroyed. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put back right before it can be used again.\n\nBreathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.' }
  //     ]
  //   },
  //   C: {
  //     range: [11, 15],
  //     items: [
  //       { range: [1, 50], name: 'Cloak of Protection', rarity: 'Uncommon', type: 'Wondrous Item', weight: 1, attunement: true, description: 'You gain a +1 bonus to AC and saving throws while wearing this cloak.' },
  //       { range: [51, 100], name: 'Boots of Elvenkind', rarity: 'Uncommon', type: 'Wondrous Item', weight: 1, attunement: false, description: 'While you wear these boots, your steps make no sound, regardless of the surface you are moving across.\n\nYou also have advantage on Dexterity (Stealth) checks that rely on moving silently.' }
  //     ]
  //   }
  // },

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
