import { MagicItem } from '../models/MagicItem.js';

export const blackMarketTableA = {
    range: [1001, 1009],
    items: [
        new MagicItem({
            name: "Bracers of Spiderkind",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [1, 2],
            description: "These leather bracers are embossed with spiderweb patterns. While wearing them, you gain a climbing speed equal to your walking speed when climbing vertical surfaces, provided you have both hands free. You do not need to make Strength (Athletics) checks to climb non-slippery surfaces, but slippery or difficult surfaces still require checks as normal."
        }),
        new MagicItem({
            name: "Cloak of Acid",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [3, 4],
            description: "This shimmering green cloak seems to glisten with a faint acidic sheen. As a bonus action, you can cause the cloak to secrete a harmless acidic coating for 1 minute. While coated, any creature that touches you or hits you with a melee attack within 5 feet takes 1 acid damage. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Crown of Thorns",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [5, 6],
            description: "This twisted circlet is made of thorny vines that never wilt. While wearing it, you can use a bonus action to cause the thorns to prick your scalp, dealing 1 piercing damage to yourself. Until the end of your next turn, you gain advantage on Charisma (Intimidation) checks. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Crystal of Health",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.2,
            attunement: false,
            range: [7, 8],
            description: "This small, clear crystal pulses with a faint inner light. While carrying it, you automatically stabilize when you are dying at the start of your turn, without needing to make death saving throws. The crystal has no effect if you are already stable or have 1 or more hit points."
        }),
        new MagicItem({
            name: "Cufflinks of Warding",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [9, 10],
            description: "These silver cufflinks are engraved with protective runes. While wearing them, you gain a +1 bonus to saving throws against effects that would charm you. If you are charmed, the cufflinks glow faintly, alerting others to your condition."
        }),
        new MagicItem({
            name: "Dead-Eye's Eyepatch",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [11, 12],
            description: "This black leather eyepatch is adorned with a single red gem. While wearing it over one eye, you gain advantage on Wisdom (Perception) checks that rely on sight, but only for noticing creatures or objects that are stationary or moving slowly (10 feet or less per round). The eyepatch imposes disadvantage on Perception checks to notice fast-moving objects."
        }),
        new MagicItem({
            name: "Decanter of Endless Milk",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [13, 14],
            description: "This ceramic decanter, shaped like a cow, is always full of fresh milk. You can pour up to 1 gallon of milk per minute as an action. The milk is nutritious and equivalent to a day’s rations for one creature if consumed. If not consumed within 1 hour, the milk sours and becomes undrinkable, but it never spills or leaks unless poured intentionally."
        }),
        new MagicItem({
            name: "Deck of Infinite Whimsy",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [15, 16],
            description: "This deck of 20 colorful cards is imbued with chaotic magic. As an action, you can draw a card and throw it to the ground within 10 feet, creating a harmless, whimsical effect determined by the DM (e.g., a burst of confetti, a comical sound, or a brief illusion of a dancing animal). The effect lasts for 1 minute or until dispelled.\n\nThe deck never runs out of cards, but you can’t draw again until the previous effect ends. If the card is moved or destroyed, the effect ends, and the card reappears in the deck."
        }),
        new MagicItem({
            name: "Demon Mask",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [17, 18],
            description: "This carved wooden mask depicts a snarling demon. While wearing it, you can use a bonus action to make your eyes glow red and your voice deepen menacingly for 1 minute, granting advantage on Charisma (Intimidation) checks. This property can be used twice per day, recharging at midnight."
        }),
        new MagicItem({
            name: "Deteriorating Bracer",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [19, 20],
            description: "This rusted iron bracer hums with faint magic. While wearing it, you can use a reaction when hit by a melee attack to reduce the damage taken by 1d4. After using this property, the bracer visibly corrodes, and the damage reduction decreases by 1 (to a minimum of 1) for each subsequent use. The bracer regains its full strength (1d4) at dawn."
        }),
        new MagicItem({
            name: "Acrobat's Staff",
            rarity: "Common",
            type: "Staff",
            weight: 4,
            attunement: false,
            range: [21, 22],
            description: "This lightweight wooden staff is balanced for performance. While wielding it, you gain a +1 bonus to Dexterity (Acrobatics) checks. As an action, you can plant the staff in the ground and use it to vault up to 10 feet in any direction, landing on your feet, provided you have at least 10 feet of open space. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Adamas Weapon",
            rarity: "Common",
            type: "Weapon (any melee)",
            weight: 3,
            attunement: false,
            range: [23, 24],
            description: "This weapon is forged from a shimmering, diamond-like metal. It functions as a normal weapon of its type but is immune to rust, corrosion, or acid damage. Additionally, when you hit an object with this weapon, you deal an extra 1 damage to it, making it effective for breaking locks or doors."
        }),
        new MagicItem({
            name: "Black Key",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [25, 26],
            description: "This obsidian key is cold to the touch. As an action, you can insert it into any nonmagical lock and attempt to unlock it, making a DC 15 Dexterity (Sleight of Hand) check with advantage. On a success, the lock opens, but the key crumbles to dust. On a failure, the key remains intact but can’t be used again until the next dawn.\n\nIf the lock is magical, the key automatically crumbles, and the lock remains unaffected."
        }),
        new MagicItem({
            name: "Blade of Bludgeoning",
            rarity: "Common",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: false,
            range: [27, 28],
            description: "This sword’s blade is magically blunted, causing it to deal bludgeoning damage instead of slashing or piercing. It otherwise functions as a normal sword of its type. As a bonus action, you can cause the blade to vibrate slightly, granting advantage on the next Strength (Athletics) check you make to shove a creature within 1 minute. This property can be used twice per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Cosmic Steel Weapon",
            rarity: "Common",
            type: "Weapon (any)",
            weight: 3,
            attunement: false,
            range: [29, 30],
            description: "Forged from a starry, metallic alloy, this weapon glows faintly under moonlight. It functions as a normal weapon of its type but sheds dim light in a 5-foot radius when unsheathed in darkness. Once per day, as a bonus action, you can cause the weapon to flare briefly, imposing disadvantage on the next attack roll made against you before the end of your next turn."
        }),
        new MagicItem({
            name: "Coward's Knife",
            rarity: "Common",
            type: "Weapon (dagger)",
            weight: 1,
            attunement: false,
            range: [31, 32],
            description: "This dagger has a hilt shaped like a fleeing figure. When you hit a creature with this dagger, you can use a bonus action to move up to 10 feet away from that creature without provoking opportunity attacks. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Dagger of the Unseen Hand",
            rarity: "Common",
            type: "Weapon (dagger)",
            weight: 1,
            attunement: false,
            range: [33, 34],
            description: "This dagger’s blade is nearly transparent. As an action, you can make a single attack with this dagger, and the attack is considered invisible, imposing disadvantage on any saving throws or checks to notice it (such as Wisdom (Perception) checks). This property can be used once per day, recharging at midnight."
        }),
        new MagicItem({
            name: "Dark Render",
            rarity: "Common",
            type: "Weapon (any melee)",
            weight: 3,
            attunement: false,
            range: [35, 36],
            description: "This weapon is coated in a matte black finish that absorbs light. It functions as a normal weapon of its type but grants advantage on Dexterity (Stealth) checks made to hide the weapon on your person. Once per day, as a bonus action, you can cause the weapon to emit a 5-foot radius of magical darkness for 1 minute, which moves with the weapon but does not obscure your vision."
        }),
        new MagicItem({
            name: "Enchanted Stick",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [37, 38],
            description: "This unassuming wooden stick is imbued with minor magic. As an action, you can point it at a creature within 30 feet and speak a command word, causing the stick to emit a loud, distracting noise (e.g., a bark or whistle) at the target’s location. The target must succeed on a DC 10 Wisdom saving throw or be distracted, granting advantage on the next attack roll made against it before the end of your next turn. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Feathered Weapon",
            rarity: "Common",
            type: "Weapon (any ranged)",
            weight: 2,
            attunement: false,
            range: [39, 40],
            description: "This ranged weapon is adorned with enchanted feathers that guide its projectiles. It functions as a normal weapon of its type, but when you miss with an attack using this weapon, the projectile (e.g., arrow, bolt, or stone) lands within 5 feet of the target instead of being lost, allowing it to be retrieved. This effect does not apply if the projectile is destroyed or unreachable."
        }),
        new MagicItem({
            name: "Scavenger's Bow",
            rarity: "Common",
            type: "Weapon (longbow)",
            weight: 2,
            attunement: false,
            range: [41, 42],
            description: "This weathered longbow is etched with symbols of survival. It functions as a normal longbow, but when you fire a nonmagical arrow from it, the arrow magically returns to your quiver after the attack is resolved, provided it was not broken or lost. The bow can return up to 10 arrows per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Sinister Looking Letter Opener",
            rarity: "Common",
            type: "Weapon (dagger)",
            weight: 1,
            attunement: false,
            range: [43, 44],
            description: "This ornate letter opener is shaped like a dagger but appears mundane at a glance. It functions as a normal dagger but grants advantage on Charisma (Deception) checks made to pass it off as a non-weapon item. Once per day, as an action, you can use it to magically open a sealed letter or scroll without damaging the seal, leaving no trace of tampering."
        }),
        new MagicItem({
            name: "Slime Sword",
            rarity: "Common",
            type: "Weapon (any sword)",
            weight: 3,
            attunement: false,
            range: [45, 46],
            description: "This sword’s blade is coated in a thin layer of slippery, magical slime. It functions as a normal sword of its type. When you hit a creature with this sword, the creature must succeed on a DC 10 Dexterity saving throw or have its speed reduced by 10 feet until the start of your next turn due to the slippery residue. The slime reforms instantly and does not run out."
        }),
        new MagicItem({
            name: "Spark Rod",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [47, 48],
            description: "This metal rod crackles with faint electricity. As an action, you can touch it to a nonmagical flammable object to ignite it, creating a small flame equivalent to a candle. Alternatively, you can use an action to cause the rod to emit a harmless spark up to 10 feet away, which can distract a creature. The creature must succeed on a DC 10 Wisdom saving throw or have disadvantage on its next attack roll before the end of its next turn. This property can be used three times per day, recharging at dawn."
        }),
        new MagicItem({
            name: "The Gravedigger",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 5,
            attunement: false,
            range: [49, 50],
            description: "This enchanted shovel has a haft carved with skeletal motifs. As an action, you can use it to dig through soft earth, such as dirt or sand, at twice the normal speed, excavating up to a 5-foot cube in 1 minute. The shovel can also be used to magically loosen compacted soil in a 5-foot radius as an action, making it easier to dig or traverse, granting advantage on Strength (Athletics) checks for digging in that area for 1 hour. This property can be used three times per day, recharging at midnight."
        }),
         new MagicItem({
            name: "Connected Hand-Mirrors",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [51, 52],
            description: "This pair of small, silver-framed hand-mirrors is magically linked, each displaying the view in front of the other, regardless of distance, as long as both are on the same plane. You can use the mirrors to communicate visually or spy on a location where the other mirror is placed.\n\nThe mirrors function only when both are uncovered and held or positioned to reflect a view. Covering or storing a mirror breaks the connection, and the mirrors show only a normal reflection. The mirrors are ideal for covert operations but require careful handling to avoid accidental exposure."
        }),
        new MagicItem({
            name: "Dagger of Denial",
            rarity: "Common",
            type: "Weapon (dagger)",
            weight: 1,
            attunement: false,
            range: [53, 54],
            description: "This dagger has a blade that gleams with a faint, eerie sheen. It functions as a normal dagger, dealing piercing damage, but leaves no visible wounds on its target. The damage is real, but the lack of external marks makes it ideal for discreet assassinations, as only magical detection or internal examination reveals the injury.\n\nThe dagger’s effect does not conceal other evidence, such as blood on the blade or the target’s reaction to pain. This property functions continuously, making the dagger a favored tool for black market dealings."
        }),
        new MagicItem({
            name: "Trinket Tracker Compass",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [55, 56],
            description: "This brass compass has a needle that does not point north. As an action, you can hold a mundane trinket (such as a coin, gem, or button) against the compass for 1 minute to designate it as the target. Thereafter, the needle points toward the trinket’s location, provided it is on the same plane of existence.\n\nThe compass does not indicate distance or obstacles, and it stops tracking if the trinket is destroyed or moved to another plane. You can designate a new trinket by repeating the process, overwriting the previous target. This item is prized for tracking stolen goods or marked items in black market schemes."
        }),
        new MagicItem({
            name: "Beastmaster Armor",
            rarity: "Common",
            type: "Armor (leather)",
            weight: 10,
            attunement: false,
            range: [57, 58],
            description: "This leather armor is adorned with claw and tooth marks, imbued with primal magic. While wearing it, you can use an action to touch a non-hostile beast you can see within 5 feet. For the next hour, you gain a +1 bonus to Charisma (Animal Handling) checks and Wisdom (Perception) checks related to that beast’s type (e.g., canine, feline). This property can be used twice per day, recharging at dawn.\n\nThe armor’s magic does not compel the beast to obey you, and the effect ends early if the beast becomes hostile. This armor is valued by smugglers who work with guard animals or trackers."
        }),
        new MagicItem({
            name: "Lost Room Key",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [59, 60],
            description: "This tarnished brass key opens a door to a small, extradimensional room. As an action, you can insert the key into any nonmagical door and turn it, causing the door to open into a 10-foot-square, empty room with stone walls and no other exits. The room persists for 1 hour or until you use an action to lock the door with the key from the outside, causing it to vanish.\n\nWhile inside, you are safe from external detection, but the room offers no air or sustenance. Only you and creatures you designate can enter, and the key remains with you. This property can be used once per day, recharging at midnight, making it ideal for hiding contraband or escaping pursuit."
        }),
        new MagicItem({
            name: "Self-Directed Compass",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [61, 62],
            description: "This polished compass has a needle that responds to your will. As an action, you can speak a cardinal direction (e.g., north, southeast) or a specific location you have visited within 1 mile, and the needle points toward it for 1 hour or until you change the target. The compass does not account for obstacles or elevation.\n\nIf you name an invalid or unreachable location, the needle spins aimlessly. This property can be used three times per day, recharging at dawn. The compass is useful for navigating urban black markets or retracing steps in complex hideouts."
        }),
        new MagicItem({
            name: "Fool's Compass",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [63, 64],
            description: "This dented compass appears faulty, but its magic is deceptive. As an action, you can activate it to make the needle point in a random direction for 1 hour, causing anyone who follows it to believe they are heading toward their intended destination. A creature using the compass must succeed on a DC 12 Wisdom (Insight) check to realize the needle is misleading.\n\nThis property can be used twice per day, recharging at midnight. The compass is a favorite among black market tricksters for misdirecting pursuers or rivals."
        }),
        new MagicItem({
            name: "Comb of Cleanliness",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.2,
            attunement: false,
            range: [65, 66],
            description: "This ivory comb sparkles with faint magic. As an action, you can run it through your hair or over your clothing to instantly clean yourself, removing dirt, grime, and minor stains. The comb also removes any nonmagical odors from you, granting advantage on Dexterity (Stealth) checks to avoid detection by scent for 1 hour. This property can be used three times per day, recharging at dawn.\n\nThe comb is prized by thieves and spies who need to erase evidence of their activities, such as mud from a break-in or smoke from a diversion."
        }),
        new MagicItem({
            name: "Magical Hand Mirror",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [67, 68],
            description: "This ornate hand mirror reflects more than just your appearance. As an action, you can hold it up and speak a command word to see yourself as you would appear with a minor cosmetic change, such as a different hairstyle, eye color, or outfit. The reflection is an illusion, visible only to you, and lasts for 1 minute or until you dismiss it.\n\nThis property can be used three times per day, recharging at dawn. The mirror is popular among black market dealers for planning disguises or boosting confidence before a deal."
        }),
        new MagicItem({
            name: "Amulets of HP Transfer",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.2,
            attunement: true,
            range: [69, 70],
            description: "This pair of amulets, each etched with a heart, is magically linked. While two creatures are attuned to the amulets and within 30 feet of each other, either wearer can use an action to transfer up to 5 hit points from themselves to the other, reducing their own hit points and increasing the recipient’s by the same amount. The recipient cannot exceed their hit point maximum.\n\nThis property can be used once per day, recharging at dawn. The amulets are valued by black market partners who need to support each other in dangerous deals, but the attunement requirement limits their casual use."
        }),
        new MagicItem({
            name: "Luminous Chair of Amplification",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 10,
            attunement: false,
            range: [71, 72],
            description: "This sturdy wooden chair glows faintly when sat upon. While seated, your voice is magically amplified, allowing it to be heard clearly up to 100 feet away, even in noisy environments. The amplification does not increase the voice’s intensity to harmful levels and can be toggled on or off as a bonus action while seated.\n\nThis property functions only while you remain seated. The chair is a favorite among black market auctioneers or informants who need to address hidden crowds without drawing attention to their location."
        }),
        new MagicItem({
            name: "Maul of Teleportation",
            rarity: "Common",
            type: "Weapon (maul)",
            weight: 10,
            attunement: false,
            range: [73, 74],
            description: "This heavy maul has a haft wrapped in blue runes. It has 3 charges. As an action, you can expend 1 charge to teleport up to 10 feet to an unoccupied space you can see, leaving a faint afterimage. You can use this property before or after making an attack with the maul, but not during the attack itself.\n\nThe maul regains all expended charges daily at dawn. Its teleportation makes it a prized weapon for black market enforcers who need to close gaps or escape quickly."
        }),
        new MagicItem({
            name: "Old Reliable",
            rarity: "Common",
            type: "Weapon (any melee)",
            weight: 3,
            attunement: false,
            range: [75, 76],
            description: "This well-worn weapon bears scratches and nicks but never breaks. It functions as a normal weapon of its type and is immune to effects that would damage or destroy nonmagical weapons, such as rust or a rust monster’s touch. Once per day, as a bonus action, you can speak its command word to make your next attack roll with this weapon before the end of your next turn take a 10 instead of rolling, as if guided by its dependable nature."
        }),
        new MagicItem({
            name: "Accuracy Stone",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [77, 78],
            description: "This large, circular stone is etched with intercrossing lines and a central hole. While holding it, if you roll a natural 1 on an attack roll, you can choose to reroll the attack. If the reroll misses, the stone crumbles to dust. This property can be used once per day, recharging at dawn."
        }),
        new MagicItem({
            name: "Bolt of Step",
            rarity: "Common",
            type: "Weapon (crossbow bolt)",
            weight: 0.05,
            attunement: false,
            range: [79, 80],
            description: "This enchanted crossbow bolt holds one charge. When fired from a crossbow, for the next 1 minute, you can use a bonus action to teleport to the bolt’s location, provided it has stopped moving. The bolt regains its charge at dawn."
        }),
        new MagicItem({
            name: "Fine Mustache",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0,
            attunement: false,
            range: [81, 82],
            description: "This glorious fake mustache magically adheres to your upper lip when placed there. While wearing it, any creature that sees you must succeed on a DC 10 Wisdom saving throw or be compelled to compliment the mustache’s fine quality, using their reaction if available. After receiving a compliment, the mustache falls off, requiring reapplication as an action.\n\nThe mustache can be reapplied any number of times, but it only triggers the compulsion once per creature per 24 hours. It’s a quirky tool for black market charmers or distraction tactics."
        }),
        new MagicItem({
            name: "Flask of Perpetual Booze",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [83, 84],
            description: "This ornate platinum flask magically produces up to 1 gallon of dark, brackish whiskey when poured, refilling 1 hour after being emptied. The whiskey is potable but strong, and a creature consuming more than a pint in 1 hour must succeed on a DC 10 Constitution saving throw or be poisoned for 1 hour.\n\nIf not consumed within 8 hours, the whiskey turns to salty brine, rendering it undrinkable. The flask is a staple in black market dealings, used for bribes, celebrations, or as a makeshift poison."
        }),
        new MagicItem({
            name: "All-or-Nothing Coin",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.05,
            attunement: false,
            range: [85, 86],
            description: "This tarnished silver coin has two distinct faces. Instead of rolling a d20 for an attack roll, ability check, or saving throw, you can flip the coin as an action or reaction, as appropriate. Heads counts as a natural 20, and tails counts as a natural 1. The coin can be used twice per short or long rest.\n\nThe coin’s high-risk, high-reward nature makes it a favorite among black market gamblers and desperate adventurers."
        }),
        new MagicItem({
            name: "Adventurer's Harness",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 2,
            attunement: false,
            range: [87, 88],
            description: "This leather harness, fitted with adjustable buckles, can be worn over or under armor. It magically secures up to three weapons or two weapons and a shield to your back, allowing you to draw or stow them as part of the same action used to attack or take another action, without requiring an object interaction.\n\nThe harness adjusts to fit any humanoid creature and does not impede movement. It’s a practical tool for black market operatives who need quick access to their gear during sudden conflicts."
        }),
        new MagicItem({
            name: "Pet Rock",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [89, 90],
            description: "This smooth, palm-sized rock has a faint magical aura. As an action, you can throw it up to 20 feet, and it returns to your hand at the start of your next turn, provided it was not trapped or destroyed. The rock deals 1 bludgeoning damage if used as an improvised weapon.\n\nOnce per day, when you throw the rock, you can speak a command word to make it emit a soft hum, distracting one creature within 5 feet of where it lands. The creature must succeed on a DC 10 Wisdom saving throw or have disadvantage on its next ability check before the end of its next turn. The rock is a subtle tool for black market distractions."
        }),
        new MagicItem({
            name: "Bag of Withholding",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [91, 92],
            description: "This small cloth sack appears mundane but has a mischievous enchantment. It can hold up to 10 pounds of nonliving material, not exceeding a volume of 1 cubic foot. When you attempt to retrieve an item, the bag magically withholds one random item, requiring a DC 10 Strength check to pull it out as part of the action to retrieve it. On a failure, the item remains inside, but you can try again.\n\nThe bag always releases at least one item of your choice, ensuring you can access something. It’s a quirky item traded in black markets for its deceptive security, frustrating thieves who don’t know its trick."
        }),
        new MagicItem({
            name: "Companion Rock",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [93, 94],
            description: "This smooth stone, etched with a faint smile, radiates minor enchantment. As an action, you can speak to the rock, and it vibrates slightly as if listening, though it cannot respond. Once per day, you can ask the rock a yes-or-no question about your immediate surroundings (within 30 feet), and it vibrates once for yes or twice for no, based on its limited perception of the area.\n\nThe rock’s answers are not always accurate, having a 75% chance of being correct, as determined by the DM. It’s a whimsical item for black market loners seeking a peculiar ally."
        }),
        new MagicItem({
            name: "Cloak of Steve",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 1,
            attunement: false,
            range: [95, 96],
            description: "This plain, slightly tattered cloak bears the name ‘Steve’ embroidered inside. While wearing it, you can use a bonus action to alter its appearance to resemble any common cloak or cape of similar size, changing its color or pattern but not its quality or weight. The change lasts until you use this property again or remove the cloak.\n\nThe cloak grants advantage on Charisma (Deception) checks to pass yourself off as an unremarkable commoner named Steve (or a similar name). This property makes it a subtle tool for black market operatives blending into crowds."
        }),
        new MagicItem({
            name: "Magic Marker",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.1,
            attunement: false,
            range: [97, 98],
            description: "This enchanted quill never runs out of ink and can write on any surface, including stone or metal, without scratching it. As an action, you can use it to write a message of up to 10 words, which remains visible for 24 hours or until you erase it with the quill as an action. The message can be made invisible to all but a designated creature you name while writing, requiring a DC 15 Intelligence (Investigation) check to notice.\n\nThe marker is limited to one active message at a time, and a new message erases the previous one. It’s a covert tool for black market communication or marking secret stashes."
        }),
        new MagicItem({
            name: "Stone of Sending",
            rarity: "Common",
            type: "Wondrous Item",
            weight: 0.5,
            attunement: false,
            range: [99, 100],
            description: "This smooth, rune-etched stone pulses with faint magic. As an action, you can speak a message of up to 10 words into the stone, designating a creature you have met within the last 30 days. The stone magically transmits the message to the target, who hears it in their mind, provided they are on the same plane and within 1 mile. The target recognizes your voice but cannot respond.\n\nThis property can be used once per day, recharging at midnight. The stone is a discreet tool for black market operatives coordinating deals or issuing warnings."
        })
    ]
};

export default blackMarketTableA;