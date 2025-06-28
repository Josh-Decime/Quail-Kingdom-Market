import { MagicItem } from '../models/MagicItem.js';

export const blackMarketTableB = {
    range: [1010, 1018],
    items: [
        new MagicItem({
            name: "Amulet of the Black Skull",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [1, 2],
            description: "This amulet, shaped like a grinning skull carved from obsidian, hums with dark energy. While attuned, you can cast *invisibility* on yourself once per day, requiring no components. The spell lasts up to 10 minutes or until you attack or cast a spell.\n\nThe amulet’s magic leaves a faint trail of shadow, granting advantage on Wisdom (Perception) checks to detect you within 10 feet. It’s a prized tool for black market infiltrators but risks exposure if not used carefully."
        }),
        new MagicItem({
            name: "Bloodseeker Blade",
            rarity: "Uncommon",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [3, 4],
            description: "This sword’s blade is etched with crimson runes that pulse when near blood. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you hit a creature that has blood, the blade deals an extra 1d4 necrotic damage, and you regain hit points equal to the necrotic damage dealt.\n\nThis property functions only against creatures with blood, as determined by the DM. The blade’s hunger for blood makes it a favorite among black market assassins."
        }),
        new MagicItem({
            name: "Chameleon Cloak",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: false,
            range: [5, 6],
            description: "This cloak shimmers with iridescent threads that blend into surroundings. As an action, you can pull the cloak tightly around you, granting advantage on Dexterity (Stealth) checks for 1 hour or until you take damage. This property can be used twice per day, recharging at dusk.\n\nThe cloak’s colors shift subtly, making it ideal for black market spies navigating crowded markets or dark alleys."
        }),
        new MagicItem({
            name: "Whispering Ring",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [7, 8],
            description: "This silver ring is engraved with faint elvish script. While attuned, you can cast *message* at will, targeting any creature you can see within 120 feet, and the message is inaudible to others. Once per day, you can cast *suggestion* on a creature you’ve targeted with *message*, requiring no components, with a DC 13 Wisdom saving throw.\n\nThe ring’s subtle magic makes it a tool for black market negotiators, planting ideas or coordinating covert plans."
        }),
        new MagicItem({
            name: "Lockpick’s Charm",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: false,
            range: [9, 10],
            description: "This small brass charm, shaped like a key, jingles softly. As an action, you can touch it to a nonmagical lock and make a Dexterity (Sleight of Hand) check to pick it with advantage, treating the charm as thieves’ tools (no proficiency required). On a success, the lock opens silently. This property can be used three times per day, recharging at midnight.\n\nThe charm is a black market favorite for burglars, though it leaves faint scratches detectable with a DC 15 Intelligence (Investigation) check."
        }),
        new MagicItem({
            name: "Shadow Cloak",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [11, 12],
            description: "This dark, flowing cloak seems to absorb light. While attuned, you can use a bonus action to become lightly obscured, even in bright light, for 1 minute, granting advantage on Dexterity (Stealth) checks. This property can be used twice per day, recharging at midnight.\n\nWhile obscured, you leave faint footprints of shadow, requiring a DC 13 Wisdom (Perception) check to track. The cloak is coveted by black market operatives for nighttime heists."
        }),
        new MagicItem({
            name: "Ring of the Liar",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [13, 14],
            description: "This gold ring has a gem that glints mischievously. While attuned, you gain proficiency in Deception if you don’t already have it, and you can cast *charm person* once per day (DC 13 Wisdom saving throw). When you lie while wearing the ring, your voice carries a subtle enchantment, granting advantage on Charisma (Deception) checks.\n\nThe ring’s magic fails against creatures immune to charm, making it a risky but effective tool for black market con artists."
        }),
        new MagicItem({
            name: "Gloves of the Night",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: false,
            range: [15, 16],
            description: "These black leather gloves are embroidered with silver stars. While wearing them, you can cast *darkness* once per day, centered on yourself, requiring no components. You can see normally within this darkness, but others cannot unless they have darkvision or similar abilities.\n\nThe gloves’ magic is perfect for black market escapes, but the darkness can hinder allies without proper vision, requiring careful coordination."
        }),
        new MagicItem({
            name: "Veil of Whispers",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [17, 18],
            description: "This sheer, black veil hums with faint voices. While attuned and wearing it, you can hear whispered conversations within 30 feet, even through walls up to 1 foot thick, granting advantage on Wisdom (Perception) checks to eavesdrop. Once per day, you can cast *detect thoughts* (DC 13 Wisdom saving throw), requiring no components.\n\nThe veil’s whispers can distract, imposing disadvantage on Wisdom (Insight) checks while worn. It’s a prized item for black market spies."
        }),
        new MagicItem({
            name: "Thief’s Lantern",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: false,
            range: [19, 20],
            description: "This hooded lantern emits no light unless commanded. As an action, you can speak a command word to make it shed bright light in a 20-foot radius and dim light for an additional 20 feet, visible only to you and creatures you designate within 10 feet. Others see only darkness. This effect lasts for 1 hour and can be used twice per day, recharging at midnight.\n\nThe lantern is ideal for black market operations, allowing discreet illumination without alerting others."
        }),
        new MagicItem({
            name: "Silent Boots",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: false,
            range: [21, 22],
            description: "These soft leather boots muffle all sound. While wearing them, your footsteps are silent, granting advantage on Dexterity (Stealth) checks to move quietly. As an action, you can cast *silence* centered on yourself once per day, requiring no components, lasting up to 10 minutes (concentration required).\n\nThe boots’ magic makes them a staple for black market thieves infiltrating guarded strongholds."
        }),
        new MagicItem({
            name: "Phantom Dagger",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [23, 24],
            description: "This dagger’s blade flickers like a ghost. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. As a bonus action, you can make the dagger vanish into an extradimensional space, becoming invisible and weightless. You can summon it back to your hand as a bonus action.\n\nThe dagger’s ability to disappear makes it a black market favorite for smugglers hiding weapons from searches."
        }),
        new MagicItem({
            name: "Cloak of the Cutthroat",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [25, 26],
            description: "This tattered cloak is stained with dark patches. While attuned, you gain a +1 bonus to AC when you are not wielding a shield. Once per day, as a reaction when a creature within 5 feet hits you with a melee attack, you can deal 1d6 necrotic damage to that creature, and you gain temporary hit points equal to the damage dealt.\n\nThe cloak’s grim magic suits black market enforcers facing close-quarters combat."
        }),
        new MagicItem({
            name: "Earring of Deception",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [27, 28],
            description: "This small ruby earring glints with cunning. While attuned, you can cast *disguise self* once per day, requiring no components, lasting up to 1 hour. Additionally, when a creature attempts to discern your true identity with a Wisdom (Insight) check, you can use your reaction to impose disadvantage on the check.\n\nThe earring is a black market staple for those evading recognition or infiltrating high society."
        }),
        new MagicItem({
            name: "Smuggler’s Satchel",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: false,
            range: [29, 30],
            description: "This leather satchel has an interior larger than its exterior. It can hold up to 50 pounds of material, not exceeding 5 cubic feet, but weighs only 2 pounds regardless of contents. Items placed inside are undetectable by nonmagical searches, requiring a DC 15 Intelligence (Investigation) check to notice the satchel’s magical nature.\n\nThe satchel is a black market essential for smuggling contraband past guards or magical wards."
        }),
        new MagicItem({
            name: "Blade of the Betrayer",
            rarity: "Uncommon",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [31, 32],
            description: "This sword’s hilt is shaped like a coiled serpent. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you hit a creature that considers you an ally, the weapon deals an extra 1d6 psychic damage, and the creature must succeed on a DC 13 Wisdom saving throw or be frightened of you until the end of its next turn.\n\nThe blade’s treachery makes it a black market weapon for double-crossing partners."
        }),
        new MagicItem({
            name: "Pendant of Shadows",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [33, 34],
            description: "This black pendant absorbs ambient light. While attuned, you can cast *misty step* once per day, requiring no components, teleporting up to 30 feet to an unoccupied space you can see. When you teleport, you leave a shadowy afterimage that dissipates after 1 minute.\n\nThe pendant’s ability to facilitate quick escapes makes it a black market favorite for evading capture."
        }),
        new MagicItem({
            name: "Rogue’s Gauntlets",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: true,
            range: [35, 36],
            description: "These sleek gloves enhance dexterity. While attuned, you gain a +1 bonus to Dexterity saving throws and ability checks. As an action, you can cast *knock* once per day, requiring no components, targeting a lock or door within 60 feet, producing a loud knock audible up to 300 feet away.\n\nThe gauntlets are prized by black market thieves for bypassing locked barriers, though the noise risks attracting attention."
        }),
        new MagicItem({
            name: "Mirror of Motives",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [37, 38],
            description: "This hand mirror reflects hidden truths. While attuned, you can use an action to gaze into it and target a creature you can see within 30 feet. The creature must succeed on a DC 13 Wisdom saving throw or reveal its primary motivation (e.g., greed, loyalty) to you telepathically. This property can be used twice per day, recharging at midnight.\n\nThe mirror’s insight is invaluable for black market negotiators reading their opponents."
        }),
        new MagicItem({
            name: "Spectral Chain",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: true,
            range: [39, 40],
            description: "This ghostly chain wraps around your arm. While attuned, you can use an action to cast *hold person* on a humanoid you can see within 60 feet (DC 13 Wisdom saving throw), requiring no components. The chain appears to bind the target during the spell’s duration. This property can be used once per day, recharging at midnight.\n\nThe chain’s ability to restrain foes makes it a black market tool for capturing bounties."
        }),
        new MagicItem({
            name: "Cloaked Blade",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [41, 42],
            description: "This dagger’s blade is shrouded in faint mist. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. As a bonus action, you can cause the dagger to become invisible for 1 minute, granting advantage on the next attack roll made with it. This property can be used twice per day, recharging at dusk.\n\nThe dagger’s stealth makes it a black market assassin’s choice."
        }),
        new MagicItem({
            name: "Tome of Secrets",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [43, 44],
            description: "This leather-bound book has blank pages that reveal hidden text. While attuned, you can spend 1 hour reading it to cast *identify* without components, targeting an object you touch. Additionally, you gain advantage on Intelligence (Investigation) checks to uncover hidden writing or codes. These properties can be used once per day, recharging at midnight.\n\nThe tome is a black market scholar’s tool for deciphering stolen documents."
        }),
        new MagicItem({
            name: "Hood of the Nightstalker",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: true,
            range: [45, 46],
            description: "This dark hood enhances your senses. While attuned and wearing it, you gain darkvision out to 60 feet (or extend existing darkvision by 30 feet). As an action, you can cast *hunter’s mark* once per day, requiring no components, lasting up to 1 hour (concentration required).\n\nThe hood’s tracking magic makes it a black market hunter’s asset for pursuing targets."
        }),
        new MagicItem({
            name: "Viper’s Fang",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [47, 48],
            description: "This dagger’s blade drips with green venom. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you hit a creature, it must succeed on a DC 13 Constitution saving throw or take 2d4 poison damage and be poisoned until the end of its next turn. This property can be used three times per day, recharging at dawn.\n\nThe dagger’s venom makes it a black market weapon for disabling foes."
        }),
        new MagicItem({
            name: "Bracers of Deft Hands",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [49, 50],
            description: "These silver bracers enhance agility. While attuned, you can draw or stow two weapons or objects as part of the same action, ignoring the usual object interaction limit. Once per day, you can cast *haste* on yourself, requiring no components, lasting up to 1 minute (concentration required).\n\nThe bracers’ speed is prized by black market duelists and thieves."
        }),
        new MagicItem({
            name: "Crimson Cord",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: true,
            range: [51, 52],
            description: "This red silk cord binds allies. While attuned, you can tie it around your wrist and another willing creature’s wrist within 5 feet as an action. For the next 1 hour, you can communicate telepathically with that creature up to 100 feet away, and you both gain a +1 bonus to AC when within 10 feet of each other. This property can be used once per day, recharging at midnight.\n\nThe cord is used by black market partners for coordinated heists."
        }),
        new MagicItem({
            name: "Gloom Arrow",
            rarity: "Uncommon",
            type: "Weapon (arrow)",
            blackMarket: true,
            weight: 0.05,
            attunement: false,
            range: [53, 54],
            description: "This black-fletched arrow hums with shadow. When fired, it creates a 15-foot-radius sphere of magical darkness at the point of impact, lasting for 1 minute or until dispelled. You can see through this darkness if you have darkvision. The arrow is not consumed and can be retrieved after use.\n\nThe arrow’s darkness makes it a black market archer’s tool for creating cover or chaos."
        }),
        new MagicItem({
            name: "Mask of the Faceless",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: true,
            range: [55, 56],
            description: "This featureless mask molds to your face. While attuned, you can cast *alter self* once per day, requiring no components, lasting up to 1 hour. When you use this spell to disguise yourself, you gain advantage on Charisma (Deception) checks to maintain the disguise.\n\nThe mask’s transformative magic is a black market infiltrator’s dream for impersonating others."
        }),
        new MagicItem({
            name: "Sable Gauntlet",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [57, 58],
            description: "This black gauntlet crackles with energy. While attuned, you can use an action to cast *shocking grasp* at will, with a +5 spell attack bonus, dealing 1d8 lightning damage and preventing reactions until the target’s next turn. Once per day, you can cast *thunderwave* (DC 13 Constitution saving throw), requiring no components.\n\nThe gauntlet’s electric power suits black market enforcers intimidating or repelling foes."
        }),
        new MagicItem({
            name: "Raven’s Quill",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [59, 60],
            description: "This black feather quill writes without ink. While attuned, you can use it to cast *comprehend languages* once per day, requiring no components, lasting up to 1 hour. Additionally, you can write a message of up to 25 words that becomes invisible after 1 minute, readable only by a creature you designate when writing. This property can be used twice per day, recharging at midnight.\n\nThe quill is a black market scribe’s tool for secret correspondence."
        }),
        new MagicItem({
            name: "Chain of Binding",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: true,
            range: [61, 62],
            description: "This silver chain coils like a snake. While attuned, you can use an action to cast *entangle* on a creature within 30 feet (DC 13 Strength saving throw), using ghostly chains instead of vines. The effect lasts up to 1 minute (concentration required). This property can be used twice per day, recharging at midnight.\n\nThe chain’s restraining magic makes it a black market bounty hunter’s tool."
        }),
        new MagicItem({
            name: "Obsidian Blade",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [63, 64],
            description: "This dagger is carved from volcanic glass. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you score a critical hit, the target must succeed on a DC 13 Constitution saving throw or be blinded until the end of its next turn due to a flash of dark light.\n\nThe blade’s disorienting effect is a black market duelist’s advantage."
        }),
        new MagicItem({
            name: "Cloak of the Mist",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [65, 66],
            description: "This gray cloak swirls like fog. While attuned, you can use a bonus action to cast *fog cloud* centered on yourself once per day, requiring no components, lasting up to 10 minutes (concentration required). While in fog or mist, you gain a +1 bonus to AC.\n\nThe cloak’s concealment is perfect for black market operatives ambushing or fleeing."
        }),
        new MagicItem({
            name: "Amulet of Evasion",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [67, 68],
            description: "This silver amulet pulses with agility. While attuned, you can use your reaction when targeted by an attack to impose disadvantage on the attack roll, provided you can see the attacker. This property can be used twice per day, recharging at dawn.\n\nThe amulet’s defensive magic is a black market rogue’s lifeline in combat."
        }),
        new MagicItem({
            name: "Spectral Lantern",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 2,
            attunement: true,
            range: [69, 70],
            description: "This lantern emits a pale, ghostly light. While attuned, you can use an action to make it shed bright light in a 20-foot radius and dim light for an additional 20 feet, revealing invisible creatures within the light. This effect lasts for 1 hour and can be used twice per day, recharging at midnight.\n\nThe lantern’s ability to expose hidden foes makes it a black market guard’s tool."
        }),
        new MagicItem({
            name: "Iron Thorn Ring",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [71, 72],
            description: "This iron ring is spiked like a thorn. While attuned, you can use an action to cast *spike growth* once per day, requiring no components, lasting up to 10 minutes (concentration required). You are immune to the spell’s damage and movement penalties while wearing the ring.\n\nThe ring’s terrain control is useful for black market ambushes or escapes."
        }),
        new MagicItem({
            name: "Duskblade",
            rarity: "Uncommon",
            type: "Weapon (any sword)",
            blackMarket: true,
            weight: 3,
            attunement: true,
            range: [73, 74],
            description: "This sword’s blade darkens at twilight. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. During dusk or dawn, the weapon deals an extra 1d6 radiant damage on a hit. This property functions only during these times, as determined by the DM.\n\nThe blade’s timing makes it a black market ritualist’s weapon for twilight strikes."
        }),
        new MagicItem({
            name: "Gloves of Precision",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: true,
            range: [75, 76],
            description: "These fine gloves enhance accuracy. While attuned, you gain a +1 bonus to attack rolls with ranged weapons. As an action, you can cast *true strike* on yourself at will, requiring no components, granting advantage on your next attack roll before the end of your next turn.\n\nThe gloves’ precision is a black market archer’s edge in high-stakes missions."
        }),
        new MagicItem({
            name: "Cloak of the Shadowcat",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [77, 78],
            description: "This sleek cloak mimics a panther’s hide. While attuned, you can move through nonmagical difficult terrain without penalty. Once per day, you can cast *pass without trace* on yourself, requiring no components, lasting up to 1 hour.\n\nThe cloak’s stealthy movement makes it a black market scout’s choice for evading trackers."
        }),
        new MagicItem({
            name: "Ring of the Silent Step",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [79, 80],
            description: "This silver ring is etched with footprints. While attuned, you can move silently, leaving no audible trace, and gain a +1 bonus to Dexterity (Stealth) checks. Once per day, you can cast *invisibility* on yourself, requiring no components, lasting up to 10 minutes or until you attack or cast a spell.\n\nThe ring’s silence is a black market infiltrator’s key to unseen movement."
        }),
        new MagicItem({
            name: "Sable Cloak",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [81, 82],
            description: "This black cloak flows like liquid shadow. While attuned, you gain resistance to necrotic damage. As an action, you can cast *darkness* centered on yourself once per day, requiring no components, lasting up to 10 minutes (concentration required).\n\nThe cloak’s protective and concealing magic is a black market necromancer’s ally."
        }),
        new MagicItem({
            name: "Fang of the Viper",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [83, 84],
            description: "This curved dagger resembles a snake’s fang. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you hit a creature, you can expend a charge to deal an extra 1d6 poison damage. The dagger has 3 charges, regaining all charges at dawn.\n\nThe dagger’s venomous strike is a black market assassin’s precision tool."
        }),
        new MagicItem({
            name: "Amulet of the Rogue",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [85, 86],
            description: "This amulet bears a dagger motif. While attuned, you gain a +1 bonus to AC when wearing no armor. Once per day, you can cast *blur* on yourself, requiring no components, lasting up to 1 minute (concentration required).\n\nThe amulet’s defensive magic is a black market rogue’s shield in dangerous encounters."
        }),
        new MagicItem({
            name: "Spectral Dagger",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [87, 88],
            description: "This dagger’s blade shimmers with ghostly light. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. As an action, you can throw the dagger up to 60 feet, and it passes through objects and creatures, dealing 1d6 force damage to one creature it passes through (DC 13 Dexterity saving throw for half damage). The dagger returns to your hand after the attack. This property can be used twice per day, recharging at midnight.\n\nThe dagger’s ethereal strike is a black market operative’s tool for striking through cover."
        }),
        new MagicItem({
            name: "Cloak of the Night",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [89, 90],
            description: "This velvet cloak deepens shadows around you. While attuned, you can use a bonus action to cast *dim light* in a 20-foot radius centered on yourself, lasting for 1 hour or until dismissed. While in dim light or darkness, you gain a +1 bonus to AC.\n\nThe cloak’s shadowy protection is a black market stalker’s defense."
        }),
        new MagicItem({
            name: "Ring of the Betrayer",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.1,
            attunement: true,
            range: [91, 92],
            description: "This ring has a serpent eating its tail. While attuned, you can cast *charm person* twice per day (DC 13 Wisdom saving throw), requiring no components. When you charm a creature, you gain advantage on Charisma (Persuasion) checks to convince it to act against its allies.\n\nThe ring’s manipulative magic is a black market schemer’s weapon."
        }),
        new MagicItem({
            name: "Shadow Dagger",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [93, 94],
            description: "This dagger’s blade is dark as night. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you hit a creature in dim light or darkness, the weapon deals an extra 1d6 necrotic damage, and you become invisible until the start of your next turn or until you attack or cast a spell.\n\nThe dagger’s stealthy power is a black market assassin’s edge."
        }),
        new MagicItem({
            name: "Amulet of the Night",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.2,
            attunement: true,
            range: [95, 96],
            description: "This amulet glows faintly in darkness. While attuned, you gain darkvision out to 120 feet. Once per day, you can cast *darkness* centered on yourself, requiring no components, lasting up to 10 minutes (concentration required), and you can see through this darkness.\n\nThe amulet’s vision and concealment are black market necessities for nocturnal operations."
        }),
        new MagicItem({
            name: "Gloves of the Shadow",
            rarity: "Uncommon",
            type: "Wondrous Item",
            blackMarket: true,
            weight: 0.5,
            attunement: true,
            range: [97, 98],
            description: "These dark gloves blend into shadows. While attuned, you can use an action to cast *misty step* twice per day, requiring no components, teleporting up to 30 feet to an unoccupied space you can see. You gain advantage on Dexterity (Stealth) checks for 1 minute after teleporting.\n\nThe gloves’ mobility is a black market thief’s escape plan."
        }),
        new MagicItem({
            name: "Dagger of the Night",
            rarity: "Uncommon",
            type: "Weapon (dagger)",
            blackMarket: true,
            weight: 1,
            attunement: true,
            range: [99, 100],
            description: "This dagger’s blade is etched with stars. While attuned, you gain a +1 bonus to attack and damage rolls with this weapon. When you hit a creature, you can expend a charge to cast *darkness* centered on the target, requiring no components, lasting up to 10 minutes (concentration required). The dagger has 3 charges, regaining all charges at midnight.\n\nThe dagger’s disruptive magic is a black market operative’s chaos tool."
        })
    ]
};

export default blackMarketTableB;