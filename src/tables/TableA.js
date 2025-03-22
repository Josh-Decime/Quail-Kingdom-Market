import { MagicItem } from '../models/MagicItem.js';

export const tableA = {
    range: [1, 9],
    items: [
        new MagicItem({
            name: "Bead of Nourishment",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [1, 2],
            description: "This pearl-sized bead of nourishment dissolves in your mouth, providing as much sustenance as 1 day of rations."
        }),
        new MagicItem({
            name: "Potion of Climbing",
            rarity: "Common",
            type: "Potion",
            weight: 0.5,
            attunement: false,
            isConsumable: true,
            range: [3, 3],
            description: "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into layers of brown, silver, and gray, resembling bands of stone. Shaking the bottle fails to mix the colors."
        }),
        new MagicItem({
            name: "Potion of Healing",
            rarity: "Common",
            type: "Potion",
            weight: 0.5,
            attunement: false,
            isConsumable: true,
            range: [4, 5],
            description: "A creature that drinks this potion regains 2d4 + 2 hit points. Drinking or administering a potion takes an action."
        }),
        new MagicItem({
            name: "Potion of Watchful Rest",
            rarity: "Common",
            type: "Potion",
            weight: 0.5,
            attunement: false,
            isConsumable: true,
            range: [6, 6],
            description: "This potion allows the drinker to remain awake while taking a long rest. You gain the benefits of rest but stay conscious and aware of your surroundings."
        }),
        new MagicItem({
            name: "Crystal Lens",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.2,
            attunement: false,
            range: [7, 8],
            description: "This palm-sized lens grants advantage on Intelligence (Investigation) checks related to written text when held over a page."
        }),
        new MagicItem({
            name: "Amber Monocle",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [9, 9],
            description: "This small monocle, rimmed with bronze and set with amber glass, provides minor insight into magical energies. Once per long rest, you can cast *detect magic* without expending a spell slot."
        }),
        new MagicItem({
            name: "Armblade",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 3,
            attunement: true,
            range: [10, 11],
            description: "An armblade is a magic weapon designed to be embedded into the forearm of a Warforged. You can use your armblade as a spellcasting focus and as a weapon. It can be retracted and deployed at will."
        }),
        new MagicItem({
            name: "Boots of False Tracks",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [12, 12],
            description: "These boots leave tracks resembling those of a different kind of humanoid of the same size."
        }),
        new MagicItem({
            name: "Candle of the Deep",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [13, 14],
            description: "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
        }),
        new MagicItem({
            name: "Dark Shard Amulet",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [15, 15],
            description: "While attuned to this amulet, you can use it as a spellcasting focus for your warlock spells. You can also try to cast a cantrip you don’t know from any class’s spell list. The cantrip must be on the warlock spell list. You must succeed on a DC 10 Arcana check; on a failure, the spell fails and the action is wasted. This property can’t be used again until the next long rest."
        }),
        new MagicItem({
            name: "Cast-Off Armor",
            rarity: "Common",
            type: "Armor",
            weight: 10,
            attunement: false,
            range: [16, 17],
            description: "You can doff this armor as an action."
        }),
        new MagicItem({
            name: "Armor of Gleaming",
            rarity: "Common",
            type: "Armor",
            weight: 10,
            attunement: false,
            range: [18, 18],
            description: "This armor never gets dirty."
        }),
        new MagicItem({
            name: "Smoldering Armor",
            rarity: "Common",
            type: "Armor",
            weight: 10,
            attunement: false,
            range: [19, 20],
            description: "Wisps of harmless smoke rise from this armor while it’s worn."
        }),
        new MagicItem({
            name: "Charlatan's Die",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [21, 21],
            description: "This die is weighted to always land on a number of your choice."
        }),
        new MagicItem({
            name: "Cloak of Billowing",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [22, 23],
            description: "While wearing this cloak, you can use a bonus action to make it billow dramatically."
        }),
        new MagicItem({
            name: "Cloak of Many Fashions",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [24, 24],
            description: "While wearing this cloak, you can use a bonus action to change its style, color, and apparent quality. The cloak’s weight doesn’t change."
        }),
        new MagicItem({
            name: "Clockwork Amulet",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [25, 26],
            description: "When you make an attack roll while wearing this amulet, you can forgo the roll to instead take a 10. This property can’t be used again until the next dawn."
        }),
        new MagicItem({
            name: "Clothes of Mending",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [27, 27],
            description: "This elegant outfit magically mends itself to repair any damage."
        }),
        new MagicItem({
            name: "Dread Helm",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [28, 29],
            description: "Visor glows red when worn. No mechanical benefit—purely cosmetic intimidation."
        }),
        new MagicItem({
            name: "Ear Horn of Hearing",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [30, 30],
            description: "This brass horn amplifies sound slightly, giving advantage on Perception checks to hear faint sounds."
        }),
        new MagicItem({
            name: "Enduring Spellbook",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [31, 32],
            description: "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. It doesn’t deteriorate with age."
        }),
        new MagicItem({
            name: "Earring of Message",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [33, 33],
            description: "While wearing this earring, you can cast the *message* cantrip. The earring functions as the spell's origin point."
        }),
        new MagicItem({
            name: "Erase",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [34, 35],
            description: "This magical eraser can remove ink from parchment and paper without damaging the material. Once per day, it can also erase a single page of magical writing such as a glyph or symbol."
        }),
        new MagicItem({
            name: "Everbright Lantern",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [36, 36],
            description: "This hooded lantern sheds bright light in a 30-foot radius and dim light for an additional 30 feet. The light can be dimmed or extinguished with a command word."
        }),
        new MagicItem({
            name: "Everfull Mug",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [37, 38],
            description: "This mug always fills with fresh, cool water whenever emptied. Once per day, you can command it to fill with ale instead."
        }),
        new MagicItem({
            name: "Hat of Vermin",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [39, 39],
            description: "You can use an action to pull a tiny beast—rat, bat, or frog—from the hat. The beast is harmless and magically disappears after 1 hour or when it drops to 0 hit points. The hat can produce three such beasts per day."
        }),
        new MagicItem({
            name: "Heward's Handy Spice Pouch",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [40, 41],
            description: "This flat, cloth pouch appears empty. While holding the pouch, you can use an action to speak the name of a spice and remove a pinch of that spice from the pouch. The spice can't be a rare or magical ingredient."
        }),
        new MagicItem({
            name: "Horn of Silent Alarm",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [42, 42],
            description: "When you blow this horn, only a single creature of your choice within 600 feet can hear it, provided they are wearing the paired earring. The horn makes no other sound."
        }),
        new MagicItem({
            name: "Imbued Wood Focus",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [43, 44],
            description: "Used as an arcane focus. While holding it, you gain +1 to spell damage rolls of one elemental damage type (determined when crafted, e.g., fire, cold, etc.)."
        }),
        new MagicItem({
            name: "Instrument of Illusions",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 2,
            attunement: true,
            range: [45, 45],
            description: "While playing this musical instrument, you can create harmless illusory visual effects in a 5-foot cube originating from it. The illusions match the music and vanish when you stop playing."
        }),
        new MagicItem({
            name: "Lock of Trickery",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [46, 47],
            description: "This lock appears to be a normal, mundane lock, but any attempts to pick it are made with disadvantage. If picked incorrectly, the lock magically relocks itself after 1 minute."
        }),
        new MagicItem({
            name: "Mystery Key",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [48, 48],
            description: "A key that has a 5 percent chance of unlocking any lock it's inserted into. Once it unlocks something, it disappears."
        }),
        new MagicItem({
            name: "Orb of Direction",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [49, 50],
            description: "While holding this orb, you always know which way is north. The orb’s needle automatically spins and points to true north at all times."
        }),
        new MagicItem({
            name: "Orb of Time",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [51, 51],
            description: "This glass orb displays the time of day to the nearest hour. It automatically adjusts to local time and is unaffected by magical darkness."
        }),
        new MagicItem({
            name: "Wand of Conducting",
            rarity: "Common",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [52, 53],
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge and cause the wand to emit orchestral music for 1 minute. The music is audible up to 60 feet away and stops early if you let go of the wand.\n\nThe wand regains all expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of Pyrotechnics",
            rarity: "Common",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [54, 54],
            description: "This wand has 7 charges. While holding it, you can use an action to expend 1 charge and create a harmless burst of multi-colored light accompanied by a thunderclap sound.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of Scowls",
            rarity: "Common",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [55, 56],
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge and target a creature you can see within 30 feet. The creature must succeed on a DC 10 Charisma saving throw or scowl uncontrollably for 1 minute.\n\nThe wand regains all expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Wand of Smiles",
            rarity: "Common",
            type: "Wand",
            weight: 1,
            attunement: false,
            range: [57, 57],
            description: "This wand has 3 charges. While holding it, you can use an action to expend 1 charge and target a creature you can see within 30 feet. The creature must succeed on a DC 10 Charisma saving throw or begin smiling uncontrollably for 1 minute.\n\nThe wand regains all expended charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Adornment",
            rarity: "Common",
            type: "Staff",
            weight: 4,
            attunement: false,
            range: [58, 59],
            description: "This staff is topped with a decorative bauble that floats 1 inch above the tip. You can replace the bauble with another item weighing no more than 1 pound, which will then float in the same manner."
        }),
        new MagicItem({
            name: "Staff of Birdcalls",
            rarity: "Common",
            type: "Staff",
            weight: 4,
            attunement: false,
            range: [60, 60],
            description: "This staff has 10 charges. While holding it, you can expend 1 charge to create the sound of a specific bird’s call. The sound can be heard clearly for up to 100 feet. The staff regains 1d6 + 4 charges daily at dawn."
        }),
        new MagicItem({
            name: "Staff of Flowers",
            rarity: "Common",
            type: "Staff",
            weight: 4,
            attunement: false,
            range: [61, 62],
            description: "This wooden staff is adorned with floral carvings. While holding it, you can use an action to cause a flower to sprout from a patch of earth or soil within 5 feet of you. The flower is nonmagical and harmless."
        }),
        new MagicItem({
            name: "Moon-Touched Sword",
            rarity: "Common",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: false,
            range: [63, 63],
            description: "In darkness, the unsheathed blade of this magic sword sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet."
        }),
        new MagicItem({
            name: "Amulet of the Drunkard",
            rarity: "Uncommon",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [64, 65],
            description: "This amulet smells faintly of ale. While wearing it, if you drink a pint of alcohol as an action, you regain 4d4 + 4 hit points. You can’t benefit from this property again until the next dawn."
        }),
        new MagicItem({
            name: "Perfume of Bewitching",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [66, 67],
            description: "When you use an action to apply this perfume, you gain advantage on Charisma (Persuasion) checks directed at humanoids for 1 hour. A creature that succeeds on a DC 13 Wisdom saving throw is immune to this effect for 24 hours."
        }),
        new MagicItem({
            name: "Pipe of Smoke Monsters",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [68, 69],
            description: "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature such as a dragon, flumph, or froghemoth. The form must fit within a 1-foot cube and dissipates after a few seconds."
        }),
        new MagicItem({
            name: "Pole of Collapsing",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 7,
            attunement: false,
            range: [70, 71],
            description: "This 10-foot pole collapses into a 1-foot-long rod for ease of storage. You can use an action to extend it to its full length or collapse it. If extended beyond its normal length, it breaks."
        }),
        new MagicItem({
            name: "Pot of Awakening",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [72, 73],
            description: "If you plant a shrub in this ceramic pot and let it grow for 30 days, the shrub magically awakens and gains the properties of an awakened shrub (see the Monster Manual)."
        }),
        new MagicItem({
            name: "Pressure Capsule",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.25,
            attunement: false,
            range: [74, 75],
            description: "This tiny glass sphere contains pressure-stabilizing magic. While in your possession, you can breathe comfortably underwater or in high-altitude environments. The capsule works for 1 hour, once per day."
        }),
        new MagicItem({
            name: "Prosthetic Limb",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 6,
            attunement: false,
            range: [76, 77],
            description: "This magic item replaces a lost arm or leg. While attached, the prosthetic functions identically to the missing limb and cannot be removed against the wearer’s will."
        }),
        new MagicItem({
            name: "Rope of Mending",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [78, 79],
            description: "If this 50-foot rope is cut, it can be knotted back together and the knot magically fuses after 1 minute, restoring the rope to full strength."
        }),
        new MagicItem({
            name: "Ruby of the War Mage",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: true,
            range: [80, 81],
            description: "This small gem can be affixed to a weapon. While attached, the weapon functions as a spellcasting focus for your spells."
        }),
        new MagicItem({
            name: "Shield of Expression",
            rarity: "Common",
            type: "Armor (Shield)",
            weight: 6,
            attunement: false,
            range: [82, 83],
            description: "The front of this shield is emblazoned with a face that can display a variety of expressions. While wielding the shield, you can use a bonus action to change the face's expression."
        }),
        new MagicItem({
            name: "Spell Scroll (Cantrip)",
            rarity: "Common",
            type: "Scroll",
            weight: 0,
            attunement: false,
            isConsumable: true,
            range: [84, 85],
            description: "A **spell scroll** bears the words of a single cantrip. If the cantrip is on your class's spell list, you can read the scroll and cast the spell without components. Otherwise, the scroll is unintelligible.\n\nOnce used, the spell disappears and the scroll crumbles to dust."
        }),
        new MagicItem({
            name: "Tankard of Sobriety",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [86, 87],
            description: "While drinking alcohol from this tankard, you are immune to the inebriating effects of alcohol. It tastes normal but has no effect."
        }),
        new MagicItem({
            name: "Talking Doll",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [88, 89],
            description: "This doll repeats up to six recorded words or short phrases. As an action, you can record a phrase. The doll repeats the phrase when a creature is within 5 feet and speaks a specific trigger word."
        }),
        new MagicItem({
            name: "Unbreakable Arrow",
            rarity: "Common",
            type: "Weapon (arrow)",
            weight: 0.1,
            attunement: false,
            range: [90, 91],
            description: "This arrow is magically reinforced. It can’t be broken, except when inside an antimagic field or similar effect."
        }),
        new MagicItem({
            name: "Veteran's Cane",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 3,
            attunement: false,
            range: [92, 93],
            description: "This simple cane grants advantage on saving throws against effects that would knock you prone. While walking with it, your speed is not reduced by age-related penalties."
        }),
        new MagicItem({
            name: "Walloping Ammunition",
            rarity: "Common",
            type: "Weapon (Any Ammunition)",
            weight: 0.05,
            attunement: false,
            range: [94, 95],
            description: "When this ammunition hits a target, the creature must succeed on a DC 10 Strength saving throw or be knocked prone."
        }),
        new MagicItem({
            name: "Weapon of Certain Death",
            rarity: "Common",
            type: "Weapon",
            weight: 3,
            attunement: false,
            range: [96, 97],
            description: "When you damage a creature with this magic weapon, it can’t regain hit points until the start of your next turn."
        }),
        new MagicItem({
            name: "Wooden Coin",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [98, 98],
            description: "This simple coin always lands on its edge when flipped, never heads or tails. A novelty item with mysterious origins."
        }),
        new MagicItem({
            name: "Masquerade Tattoo",
            rarity: "Common",
            type: "Wondrous Item (Tattoo)",
            weight: 0,
            attunement: true,
            range: [99, 100],
            description: "This tattoo can appear on your skin in any pattern or color. While attuned, you can use an action to cast **disguise self** once per day."
        })
    ]
}

export default tableA;