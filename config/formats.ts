// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712619/">Random Battle Suggestions</a>`,
		],

		mod: 'gen9',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Multi Battle",

		mod: 'gen9',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Picked Team Size = 3', 'Max Team Size = 6',
			'Standard', '+CAP'	
		],
		banlist: ['Uber', 'AG', 'Moody', 'Sand Veil', 'Snow Cloak', 'King\'s Rock', 'Baton Pass', 'Shedinja + Air Balloon'],
	},
	{
		name: "[Gen 9] Multi Battle AG",

		mod: 'gen9',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Picked Team Size = 3', 'Max Team Size = 6',
			'Standard', '+CAP'	
		],
	},
	{
		name: "[Gen 9] Unrated Random Battle",

		mod: 'gen9',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Random Battle (Blitz)",

		mod: 'gen9',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Blitz'],
	},
	{
		name: "[Gen 9] OU",

		mod: 'gen9',
		ruleset: ['Standard', '+CAP'],
		banlist: ['Uber', 'AG', 'Moody', 'Sand Veil', 'Snow Cloak', 'King\'s Rock', 'Baton Pass', 'Gorilla Tactics', 'Last Respects', 'Shedinja + Air Balloon'],
	},
	{
		name: "[Gen 9] No Team View OU",

		mod: 'gen9',
		ruleset: ['Standard No Preview', '+CAP'],
		banlist: ['Uber', 'AG', 'Moody', 'Sand Veil', 'Snow Cloak', 'King\'s Rock', 'Baton Pass', 'Gorilla Tactics', 'Last Respects', 'Shedinja + Air Balloon'],
	},
	{
		name: "[Gen 9] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710870/">Ubers Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex'],
		banlist: ['AG', 'King\'s Rock', 'Baton Pass', 'Shedinja + Air Balloon', 'Rayquaza-Mega + Life Orb'],
	},
	{
		name: "[Gen 9] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713709/">UU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL', 'Keldeo + Warrior\'s Resolve'],
	},
	{
		name: "[Gen 9] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713711/">RU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL', 'Light Clay'],
	},
	{
		name: "[Gen 9] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715408/">NU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 9] PU",

		mod: 'gen9',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 9] NFE",

		mod: 'gen9',
		ruleset: ['[Gen 9] PU', 'Max Level = 50'],
		banlist: ['PU'],
	},
	{
		name: "[Gen 9] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710868/">Little Cup Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Basculin-White-Striped', 'Diglett-Base', 'Dunsparce', 'Flittle', 'Gastly', 'Girafarig', 'Growlithe-Hisui', 'Meditite', 'Misdreavus',
			'Murkrow', 'Qwilfish-Hisui', 'Rufflet', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Stantler', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710724/">Monotype Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		banlist: ['Annihilape', 'Chi-Yu', 'Houndstone', 'Iron Bundle', 'Koraidon', 'Miraidon', 'Palafin', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Acupressure', 'Baton Pass'],
	},
	{
		name: "[Gen 9] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710864/">1v1 Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause', '!Sleep Clause Mod',
		],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cinderace', 'Dialga', 'Dialga-Origin', 'Dragonite', 'Eternatus', 'Flutter Mane',
			'Gholdengo', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Koraidon', 'Kyogre', 'Magearna', 'Meloetta', 'Mew', 'Mewtwo',
			'Mimikyu', 'Miraidon', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Scream Tail', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Moody', 'Focus Band', 'Focus Sash', 'King\'s Rock', 'Quick Claw', 'Acupressure', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710911/">AG Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710638/">NFE</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712567/">NFE Resources</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Basculin-White-Striped', 'Bisharp', 'Chansey', 'Haunter', 'Magnemite', 'Magneton', 'Misdreavus', 'Naclstack',
			'Primeape', 'Qwilfish-Hisui', 'Scyther', 'Sneasel-Hisui', 'Ursaring', 'Arena Trap', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 9] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719022/">ZU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] PU'],
		banlist: [
			'PU', 'Beartic', 'Electrode', 'Fraxure', 'Frogadier', 'Girafarig', 'Glaceon', 'Golduck', 'Grumpig',
			'Indeedee-F', 'Leafeon', 'Qwilfish-Hisui', 'Sawsbuck', 'Sneasel-Hisui', 'Squawkabilly', 'Vigoroth',
		],
	},
	{
		name: "[Gen 9] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711750/">LC UU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] LC'],
		banlist: [
			'Axew', 'Crabrawler', 'Croagunk', 'Diglett-Alola', 'Drifloon', 'Foongus', 'Fuecoco', 'Glimmet', 'Gothita', 'Grimer-Alola',
			'Grookey', 'Houndour', 'Mareanie', 'Meowth-Base', 'Mudbray', 'Numel', 'Nymble', 'Pawniard', 'Quaxly', 'Shellder', 'Shellos',
			'Shroodle', 'Teddiursa', 'Tinkatink', 'Toedscool', 'Voltorb-Hisui', 'Wattrel', 'Zorua-Hisui',
		],
	},
	{
		name: "[Gen 9] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/9437555/">SV CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/9544282/">SV CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/9460153/">SV CAP Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 9] Free-For-All",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711724/">Free-For-All</a>`,
		],

		mod: 'gen9',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard', '!Evasion Items Clause'],
		banlist: [
			'Annihilape', 'Chi-Yu', 'Flutter Mane', 'Houndstone', 'Koraidon', 'Iron Bundle', 'Miraidon', 'Palafin', 'Moody', 'Shadow Tag',
			'Toxic Debris', 'Acupressure', 'Aromatic Mist', 'Baton Pass', 'Court Change', 'Final Gambit', 'Flatter', 'Follow Me', 'Heal Pulse',
			'Poison Fang', 'Rage Powder', 'Spicy Extract', 'Swagger', 'Toxic', 'Toxic Spikes',
		],
	},
	{
		name: "[Gen 9] Battle Stadium Singles Regulation C",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Paldea Pokedex', 'Min Source Gen = 9', 'VGC Timer'],
	},
	{
		name: "[Gen 9] Battle Stadium Singles Regulation D",

		mod: 'gen9',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer'],
		banlist: ['Walking Wake', 'Iron Leaves'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
	},
	{
		name: "[Gen 9] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710876/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712864/">Doubles Ubers</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
	},
	{
		name: "[Gen 9] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712825/">Doubles UU</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] Doubles LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710957/">Doubles LC</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Little Cup', 'Sleep Clause Mod'],
		banlist: ['Basculin-White-Striped', 'Dunsparce', 'Murkrow', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui'],
	},
	{
		name: "[Gen 9] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710849/">2v2 Doubles</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 2', 'Max Team Size = 4',
			'Standard Doubles', 'Accuracy Moves Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Evasion Items Clause',
		],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Iron Hands',
			'Koraidon', 'Kyogre', 'Magearna', 'Mewtwo', 'Miraidon', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Tornadus-Base', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Commander', 'Moody', 'Focus Sash', 'King\'s Rock', 'Ally Switch', 'Final Gambit',
			'Perish Song', 'Swagger',
		],
	},
	{
		name: "[Gen 9] VGC 2023 Regulation C",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Paldea Pokedex', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets'],
	},
	{
		name: "[Gen 9] VGC 2023 Regulation D",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets'],
		banlist: ['Walking Wake', 'Iron Leaves'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 9] Frantic Fusions",
		desc: `Pok&eacute;mon nicknamed after another Pok&eacute;mon get their stats buffed by 1/4 of that Pok&eacute;mon's stats, barring HP, and access to one of their abilities.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725593/">Frantic Fusions</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', '!Nickname Clause', '!Obtainable Abilities', 'Sleep Moves Clause', 'Frantic Fusions Mod', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu', 'Dondozo', 'Dialga', 'Dialga-Origin', 'Ditto',
			'Dragapult', 'Enamorus-Base', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Hands',
			'Iron Valiant', 'Koraidon', 'Komala', 'Kyogre', 'Landorus-Base', 'Magearna', 'Mewtwo', 'Miraidon', 'Numel', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Persian-Alola', 'Rayquaza', 'Regieleki', 'Slaking', 'Spectrier', 'Toxapex', 'Ursaluna', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Arena Trap', 'Contrary', 'Huge Power', 'Ice Scales', 'Illusion', 'Magnet Pull', 'Moody', 'Poison Heal', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Stench', 'Speed Boost', 'Damp Rock', 'Eviolite', 'Heat Rock', 'King\'s Rock', 'Quick Claw', 'Baton Pass', 'Last Respects',
			'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 7] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9142994">USUM Pure Hackmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710568/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710571/">AAA Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Enamorus-Base',
			'Eternatus', 'Flutter Mane', 'Gengar', 'Giratina', 'Giratina-Origin', 'Gholdengo', 'Great Tusk', 'Groudon', 'Hariyama', 'Hoopa-Unbound',
			'Iron Bundle', 'Iron Hands', 'Iron Valiant', 'Koraidon', 'Kyogre', 'Magearna', 'Mewtwo', 'Miraidon', 'Noivern', 'Palkia', 'Palkia-Origin',
			'Rayquaza', 'Slaking', 'Sneasler', 'Spectrier', 'Ursaluna', 'Urshifu', 'Urshifu-Rapid-Strike', 'Walking Wake', 'Zacian', 'Zacian-Crowned',
			'Zamazenta-Base', 'Zoroark-Hisui', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power',
			'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse',
			'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Unburden', 'Water Bubble', 'Wonder Guard',
			'King\'s Rock', 'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710859/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712766/">BH Resources</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause',
			'Endless Battle Clause', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Terastal Clause',
		],
		banlist: [
			'Calyrex-Shadow', 'Gengar-Mega', 'Groudon-Primal', 'Mewtwo-Mega-Y', 'Rayquaza-Mega', 'Regigigas', 'Shedinja', 'Slaking', 'Arena Trap', 'Comatose', 'Contrary',
			'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse',
			'Parental Bond', 'Poison Heal', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Baton Pass', 'Belly Drum', 'Ceaseless Edge',
			'Dire Claw', 'Imprison', 'Last Respects', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Substitute', 'Shell Smash',
		],
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Primal orbs, Origin orbs, and Rusted items with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710921/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716385/">Mix and Mega Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Calyrex-Shadow', 'Eternatus', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Rusted Sword', 'Shadow Tag', 'Beedrillite',
			'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Baton Pass', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Basculegion-Base', 'Calyrex-Ice', 'Dialga', 'Dragapult', 'Flutter Mane', 'Gengar', 'Gholdengo', 'Giratina', 'Groudon',
			'Iron Bundle', 'Kilowattrel', 'Mewtwo', 'Palkia', 'Rayquaza', 'Slaking', 'Sneasler', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone && !item.onPrimal &&
					!item.forcedForme?.endsWith('Origin') && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if ((item.itemUser?.includes(species.name) && !item.megaStone && !item.onPrimal) ||
					(natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each mega stone/orb/rusted item/sinnoh item.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSecies.exists && pokemon.m.originalSpecies !== originalFormeSecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSecies.requiredItem || originalFormeSecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (AG/Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710734/">Godly Gift</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3718065/">Godly Gift Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Godly Gift Mod', 'Min Source Gen = 9'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Dragapult', 'Hoopa-Unbound', 'Iron Hands', 'Kingambit', 'Miraidon', 'Toxapex', 'Ursaluna',
			'Zamazenta-Base', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim', 'Booster Energy', 'Bright Powder',
			'Focus Band', 'King\'s Rock', 'Quick Claw', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710577/">STABmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714664/">STABmons Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Azumarill', 'Basculegion', 'Basculegion-F', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Dialga',
			'Dialga-Origin', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Eternatus', 'Flutter Mane', 'Garchomp', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Iron Bundle', 'Komala', 'Koraidon', 'Kyogre', 'Landorus-Base', 'Lilligant-Hisui', 'Magearna', 'Mewtwo', 'Miraidon',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Spectrier', 'Ursaluna', 'Urshifu-Base', 'Walking Wake', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Baton Pass',
			'Shed Tail',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Dire Claw', 'Extreme Speed', 'Fillet Away', 'Gigaton Hammer', 'Last Respects',
			'No Retreat', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Triple Arrows', 'V-create', 'Victory Dance', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 9] Partners in Crime",
		desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710997/">Partners in Crime</a>`,
		],

		mod: 'partnersincrime',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cresselia', 'Dialga', 'Dialga-Origin', 'Enamorus-Base', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Koraidon', 'Kyogre', 'Magearna', 'Mewtwo', 'Miraidon', 'Palkia', 'Palkia-Origin',
			'Rayquaza', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Dancer', 'Huge Power', 'Moody',
			'Pure Power', 'Shadow Tag', 'Bright Powder', 'King\'s Rock', 'Ally Switch', 'Last Respects', 'Revival Blessing', 'Swagger',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.trackPP = new Map<string, number>();
			}
		},
		onBeforeSwitchIn(pokemon) {
			pokemon.m.curMoves = this.dex.deepClone(pokemon.moves);
			let ngas = false;
			for (const poke of this.getAllActive()) {
				if (this.toID(poke.ability) === ('neutralizinggas' as ID)) {
					ngas = true;
					break;
				}
			}
			const BAD_ABILITIES = ['trace', 'imposter', 'neutralizinggas', 'illusion', 'wanderingspirit'];
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.ability !== pokemon.ability) {
				if (!pokemon.m.innate && !BAD_ABILITIES.includes(this.toID(ally.ability))) {
					pokemon.m.innate = 'ability:' + ally.ability;
					if (!ngas || ally.getAbility().isPermanent || pokemon.hasItem('Ability Shield')) {
						pokemon.volatiles[pokemon.m.innate] = {id: pokemon.m.innate, target: pokemon};
						pokemon.m.startVolatile = true;
					}
				}
				if (!ally.m.innate && !BAD_ABILITIES.includes(this.toID(pokemon.ability))) {
					ally.m.innate = 'ability:' + pokemon.ability;
					if (!ngas || pokemon.getAbility().isPermanent || ally.hasItem('Ability Shield')) {
						ally.volatiles[ally.m.innate] = {id: ally.m.innate, target: ally};
						ally.m.startVolatile = true;
					}
				}
			}
		},
		// Starting innate abilities in scripts#actions
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
		onFaint(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
	},
	{
		name: "[Gen 9] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712296/">Inheritance</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cresselia', 'Dialga', 'Dialga-Origin', 'Dondozo', 'Dragapult', 'Enamorus-Base', 'Espathra', 'Eternatus',
			'Flittle', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Magearna', 'Mewtwo',
			'Miraidon', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Samurott-Hisui', 'Slaking', 'Spectrier', 'Torkoal', 'Ursaluna', 'Urshifu-Base',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Arena Trap', 'Huge Power', 'Imposter', 'Magnet Pull', 'Moody', 'Poison Heal',
			'Pure Power', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Fillet Away', 'Last Respects', 'Rage Fist', 'Shed Tail', 'Shell Smash',
		],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				const prevoSpecies = Dex.species.get(species.prevo);
				if (prevoSpecies.evos.length > 1) break;
				species = prevoSpecies;
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if (pokemon.isNonstandard || (unreleased(pokemon) && !this.ruleTable.has('+unobtainable'))) continue;
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard || (unreleased(species) && !this.ruleTable.has('+unobtainable'))) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const problems = this.validateSet(set, teamHas) || [];
				if (!problems.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.ruleTable.has('abilityclause')) {
				const abilityTable = new Map<string, number>();
				const base: {[k: string]: string} = {
					airlock: 'cloudnine',
					armortail: 'queenlymajesty',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				const num = parseInt(this.ruleTable.valueRules.get('abilityclause')!);
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if ((abilityTable.get(ability) || 0) >= num) {
						return [
							`You are limited to ${num} of each ability by ${num} Ability Clause.`,
							`(You have more than ${num} ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.set(ability, (abilityTable.get(ability) || 0) + 1);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) {
					requiredFamilies[familyId] = 1;
				} else {
					requiredFamilies[familyId]++;
				}
				if (requiredFamilies[familyId] > 1) {
					return [
						`You are limited to up to one inheritance from each evolution family by the Donor Clause.`,
						`(You inherit more than once from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},

	// Challengeable OMs
	///////////////////////////////////////////////////////////////////

	{
		section: "Challengeable OMs",
		column: 2,
	},
	{
		name: "[Gen 9] Camomons",
		desc: `Pok&eacute;mon have their types set to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711340/">Camomons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Terastal Clause', 'Camomons Mod', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Dialga', 'Dialga-Origin', 'Dragonite', 'Drednaw', 'Enamorus-Base',
			'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Landorus-Base', 'Magearna',
			'Mewtwo', 'Miraidon', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Roaring Moon', 'Sneasler', 'Spectrier', 'Tornadus-Therian', 'Volcarona',
			'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'King\'s Rock', 'Baton Pass', 'Last Respects',
			'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Convergence",
		desc: `Allows all Pok&eacute;mon that have identical types to share moves and abilities.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714048/">Convergence</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Convergence Legality', '!Obtainable Abilities', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Dialga', 'Dialga-Origin', 'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Inteleon', 'Iron Bundle', 'Iron Hands', 'Koraidon', 'Kyogre', 'Landorus-Base', 'Magearna', 'Mewtwo', 'Miraidon', 'Palafin', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Slaking', 'Spectrier', 'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Arena Trap', 'Comatose', 'Imposter', 'Moody', 'Pure Power', 'Shadow Tag', 'Speed Boost', 'Damp Rock', 'King\'s Rock', 'Baton Pass', 'Extreme Speed',
			'Last Respects', 'Quiver Dance', 'Rage Fist', 'Shed Tail', 'Shell Smash', 'Spore', 'Transform',
		],
	},
	{
		name: "[Gen 9] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710953/">Cross Evolution</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Ability Clause = 2', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: [
			'Basculin-White-Striped', 'Girafarig', 'Miraidon', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring', 'Arena Trap', 'Huge Power', 'Ice Scales',
			'Pure Power', 'Shadow Tag', 'Speed Boost', 'Moody', 'King\'s Rock', 'Baton Pass', 'Revival Blessing',
		],
		restricted: ['Gallade', 'Gholdengo'],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Obtainable Misc').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 9] Fortemons",
		desc: `Put an attacking move in the item slot to have all of a Pok&eacute;mon's attacks inherit its properties.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713983/">Fortemons</a>`,
		],

		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Azumarill', 'Chi-Yu', 'Chien-Pao', 'Cloyster', 'Dragonite', 'Espathra', 'Flutter Mane', 'Great Tusk', 'Houndstone', 'Iron Bundle',
			'Koraidon', 'Miraidon', 'Palafin', 'Riolu', 'Arena Trap', 'Moody', 'Serene Grace', 'Shadow Tag', 'Covert Cloak', 'Beat Up', 'Baton Pass',
		],
		restricted: ['Dynamic Punch', 'Flail', 'Fury Cutter', 'Grass Knot', 'Heavy Slam', 'Inferno', 'Low Kick', 'Nuzzle', 'Power Trip', 'Reversal', 'Spit Up', 'Stored Power', 'Zap Cannon'],
		validateSet(set, teamHas) {
			const item = set.item;
			const species = this.dex.species.get(set.species);
			const move = this.dex.moves.get(item);
			if (!move.exists || move.id === 'metronome' || move.category === 'Status') {
				return this.validateSet(set, teamHas);
			}
			set.item = '';
			const problems = this.validateSet(set, teamHas) || [];
			set.item = item;
			if (this.checkCanLearn(move, species, this.allSources(species), set)) {
				problems.push(`${species.name} can't learn ${move.name}.`);
			}
			if (set.moves.map(this.toID).includes(move.id)) {
				problems.push(`Moves in the item slot can't be in the moveslots as well.`);
			}
			const accuracyLoweringMove =
				move.secondaries?.some(secondary => secondary.boosts?.accuracy && secondary.boosts?.accuracy < 0);
			const flinchMove = move.secondaries?.some(secondary => secondary.volatileStatus === 'flinch');
			const freezeMove = move.secondaries?.some(secondary => secondary.status === 'frz') || move.id === 'triattack';
			if (this.ruleTable.isRestricted(`move:${move.id}`) ||
				((accuracyLoweringMove || move.ohko || move.multihit || move.id === 'beatup' || move.flags['charge'] ||
					move.priority > 0 || move.damageCallback || flinchMove || freezeMove || move.selfSwitch) &&
				!this.ruleTable.has(`+move:${move.id}`))) {
				problems.push(`The move ${move.name} can't be used as an item.`);
			}
			return problems.length ? problems : null;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const move = this.dex.getActiveMove(pokemon.set.item);
				if (move.exists && move.category !== 'Status') {
					pokemon.m.forte = move;
					pokemon.item = 'mail' as ID;
				}
			}
		},
		onModifyMovePriority: 1,
		onModifyMove(move, pokemon, target) {
			const forte: ActiveMove = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				move.flags = {...move.flags, ...forte.flags};
				if (forte.self) {
					if (forte.self.onHit && move.self?.onHit) {
						for (const i in forte.self) {
							if (i.startsWith('onHit')) continue;
							(move.self as any)[i] = (forte.self as any)[i];
						}
					} else {
						move.self = {...(move.self || {}), ...forte.self};
					}
				}
				if (forte.selfBoost?.boosts) {
					if (!move.selfBoost?.boosts) move.selfBoost = {boosts: {}};
					let boostid: BoostID;
					for (boostid in forte.selfBoost.boosts) {
						if (!move.selfBoost.boosts![boostid]) move.selfBoost.boosts![boostid] = 0;
						move.selfBoost.boosts![boostid]! += forte.selfBoost.boosts[boostid]!;
					}
				}
				if (forte.secondaries) {
					move.secondaries = [...(move.secondaries || []), ...forte.secondaries];
				}
				move.critRatio = (move.critRatio || 1) + (forte.critRatio || 1) - 1;
				const VALID_PROPERTIES = [
					'alwaysHit', 'basePowerCallback', 'breaksProtect', 'drain', 'forceSTAB', 'forceSwitch', 'hasCrashDamage', 'hasSheerForce',
					'ignoreAbility', 'ignoreAccuracy', 'ignoreDefensive', 'ignoreEvasion', 'ignoreImmunity', 'mindBlownRecoil', 'noDamageVariance',
					'ohko', 'overrideDefensivePokemon', 'overrideDefensiveStat', 'overrideOffensivePokemon', 'overrideOffensiveStat', 'pseudoWeather',
					'recoil', 'selfdestruct', 'selfSwitch', 'sleepUsable', 'smartTarget', 'stealsBoosts', 'thawsTarget', 'volatileStatus', 'willCrit',
				] as const;
				for (const property of VALID_PROPERTIES) {
					if (forte[property]) {
						move[property] = forte[property] as any;
					}
				}
				// Added here because onEffectiveness doesn't have an easy way to reference the source
				if (forte.onEffectiveness) {
					move.onEffectiveness = function (typeMod, t, type, m) {
						return forte.onEffectiveness!.call(this, typeMod, t, type, m);
					};
				}
				forte.onModifyMove?.call(this, move, pokemon, target);
			}
		},
		onModifyPriority(priority, source, target, move) {
			const forte = source?.m.forte;
			if (move.category !== 'Status' && forte) {
				if (source.hasAbility('Triage') && forte.flags['heal']) {
					return priority + (move.flags['heal'] ? 0 : 3);
				}
				return priority + forte.priority;
			}
		},
		onModifyTypePriority: 1,
		onModifyType(move, pokemon, target) {
			const forte = pokemon.m.forte;
			if (move.category !== 'Status' && forte) {
				this.singleEvent('ModifyType', forte, null, pokemon, target, move, move);
			}
		},
		onHitPriority: 1,
		onHit(target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('Hit', forte, {}, target, source, move);
				if (forte.self) this.singleEvent('Hit', forte.self, {}, source, source, move);
				this.singleEvent('AfterHit', forte, {}, target, source, move);
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterSubDamage', forte, null, target, source, move);
			}
		},
		onModifySecondaries(secondaries, target, source, move) {
			if (secondaries.some(s => !!s.self)) move.selfDropped = false;
		},
		onAfterMoveSecondaryPriority: 1,
		onAfterMoveSecondarySelf(source, target, move) {
			const forte = source.m.forte;
			if (move?.category !== 'Status' && forte) {
				this.singleEvent('AfterMoveSecondarySelf', forte, null, source, target, move);
			}
		},
		onBasePowerPriority: 1,
		onBasePower(basePower, source, target, move) {
			const forte = source.m.forte;
			if (move.category !== 'Status' && forte?.onBasePower) {
				forte.onBasePower.call(this, basePower, source, target, move);
			}
		},
		pokemon: {
			getItem() {
				const move = this.battle.dex.moves.get(this.m.forte);
				if (!move.exists) return Object.getPrototypeOf(this).getItem.call(this);
				return {
					...this.battle.dex.items.get('mail'),
					name: move.name, id: move.id, ignoreKlutz: true, onTakeItem: false,
				};
			},
		},
	},
	{
		name: "[Gen 9] Full Potential",
		desc: `Pok&eacute;mon's moves hit off of their highest stat.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711127/">Full Potential</a>`,
		],

		mod: 'fullpotential',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cyclizar', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Mewtwo', 'Miraidon', 'Palkia', 'Palkia-Origin', 'Rayquaza',
			'Regieleki', 'Scream Tail', 'Spectrier', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Arena Trap', 'Chlorophyll', 'Drought',
			'Moody', 'Sand Rush', 'Shadow Tag', 'Slush Rush', 'Swift Swim', 'Unburden', 'Booster Energy', 'Choice Scarf', 'Heat Rock', 'King\'s Rock',
			'Baton Pass', 'Tailwind',
		],
	},
	{
		name: "[Gen 9] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712725/">Pok&eacute;bilities</a>`,
		],
		mod: 'pokebilities',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Clause Mod', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Landorus-Base', 'Miraidon', 'Mewtwo', 'Palafin', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Regieleki', 'Spectrier', 'Zacian', 'Zacian-Crowned', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock',
			'Baton Pass', 'Shed Tail', 'Last Respects',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			// Abilities that must be applied before both sides trigger onSwitchIn to correctly
			// handle switch-in ability-to-ability interactions, e.g. Intimidate counters
			const neededBeforeSwitchInIDs = [
				'clearbody', 'competitive', 'contrary', 'defiant', 'fullmetalbody', 'hypercutter', 'innerfocus',
				'mirrorarmor', 'oblivious', 'owntempo', 'rattled', 'scrappy', 'simple', 'whitesmoke',
			];
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (!neededBeforeSwitchInIDs.includes(innate)) continue;
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 9] Pure Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712086/">Pure Hackmons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711644/">Revelationmons</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Revelationmons Mod', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Barraskewda', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Dialga', 'Dialga-Origin', 'Dragonite', 'Espathra', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Landorus-Base', 'Mewtwo', 'Miraidon',
			'Noivern', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Spectrier', 'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned',
			'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Baton Pass', 'Last Respects',
		],
		restricted: ['U-turn', 'Volt Switch'],
	},
	{
		name: "[Gen 9] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711011/">Shared Power</a>`,
		],

		mod: 'sharedpower',
		searchShow: false,
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Calyrex-Shadow', 'Chien-Pao', 'Dragonite', 'Gholdengo', 'Koraidon', 'Komala', 'Miraidon', 'Raichu-Alola', 'Rayquaza', 'Zacian-Crowned',
			'Zamazenta-Crowned', 'Arena Trap', 'Armor Tail', 'Chlorophyll', 'Contrary', 'Dazzling', 'Fur Coat', 'Gale Wings', 'Guts', 'Huge Power', 'Illusion',
			'Imposter', 'Magic Bounce', 'Magnet Pull', 'Mold Breaker', 'Moody', 'Poison Heal', 'Prankster', 'Psychic Surge', 'Pure Power', 'Purifying Salt',
			'Queenly Majesty', 'Quick Draw', 'Quick Feet', 'Regenerator', 'Sand Rush', 'Shadow Tag', 'Simple', 'Slush Rush', 'Speed Boost', 'Stakeout', 'Stench',
			'Sturdy', 'Swift Swim', 'Tinted Lens', 'Unaware', 'Unburden', 'Starf Berry', 'King\'s Rock', 'Baton Pass',
		],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 9] Tera Donation",
		desc: `The first Pok&eacute;mon sent out immediately terastallizes. The other Pok&eacute;mon in the party inherit that Tera Type as an additional type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715801/">Tera Donation</a>`,
		],

		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves CLause', 'Tera Type Preview', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Chi-Yu', 'Chien-Pao', 'Cyclizar', 'Espathra', 'Flutter Mane', 'Houndstone', 'Iron Bundle', 'Koraidon',
			'Miraidon', 'Palafin', 'Arena Trap', 'Moody', 'Shadow Tag', 'Booster Energy', 'Heat Rock', 'King\'s Rock', 'Baton Pass',
		],
		onSwitchIn(pokemon) {
			if (this.turn === 0) {
				this.actions.terastallize(pokemon);
				const teraType = pokemon.teraType;
				for (const poke of pokemon.side.pokemon) {
					poke.m.thirdType = teraType;
				}
			}
			if (!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
		onModifyMove(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				if (teraType && pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) {
					move.category = 'Physical';
				}
			}
		},
		onModifyType(move, pokemon, target) {
			if (move.id === 'terablast') {
				const teraType = pokemon.m.thirdType;
				if (teraType) {
					move.type = teraType;
				}
			}
		},
		pokemon: {
			getTypes(excludeAdded, preterastallized) {
				if (!preterastallized && this.terastallized) return [this.terastallized];
				const types = this.battle.runEvent('Type', this, null, null, this.types);
				if (!excludeAdded && this.addedType) return types.concat(this.addedType);
				const addTeraType = this.m.thirdType;
				if (types.length) {
					if (addTeraType) return Array.from(new Set([...types, addTeraType]));
					return types;
				}
				return [this.battle.gen >= 5 ? 'Normal' : '???'];
			},
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710568/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710571/">AAA Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 9'],
		banlist: [
			'Annihilape', 'Baxcalibur', 'Dragapult', 'Flutter Mane', 'Great Tusk', 'Gholdengo', 'Iron Bundle', 'Iron Hands',
			'Iron Valiant', 'Koraidon', 'Miraidon', 'Noivern', 'Slaking', 'Walking Wake', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat',
			'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull',
			'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost',
			'Stakeout', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Baton Pass', 'Revival Blessing', 'Infernal Surge', 'Hadron Engine', 'Ampere Overdrive', 'Last Respects', 'Wonder Power'
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710859/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712766/">BH Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Zacian-Crowned', 'Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Belly Drum', 'Last Respects', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash',
		],
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Primal orbs, Origin orbs, and Rusted items with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710921/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716385/">Mix and Mega Resources</a>`,
		],

		mod: 'trademarked',
		searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Min Source Gen = 9'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Koraidon', 'Kyogre', 'Landorus-Base', 'Magearna', 'Mewtwo', 'Miraidon', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Slaking', 'Spectrier',
			'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Arena Trap', 'Magnet Pull', 'Moody', 'Shadow Tag', 'Baton Pass', 'Last Respects', 'Revival Blessing',
		],
		restricted: [
			'Baneful Bunker', 'Block', 'Chilly Reception', 'Copycat', 'Detect', 'Destiny Bond', 'Encore', 'Fairy Lock', 'Ingrain', 'Instruct',
			'Mean Look', 'move:Metronome', 'Nasty Plot', 'Parting Shot', 'Protect', 'Roar', 'Silk Trap', 'Spiky Shield', 'Sleep Talk', 'Shed Tail',
			'Shell Smash', 'Substitute', 'Swords Dance', 'Teleport', 'Thunder Wave', 'Trick Room', 'Will-O-Wisp', 'Whirlwind',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			for (const trademark in teamHas.trademarks) {
				if (teamHas.trademarks[trademark] > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks[trademark]} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.moves.get(set.ability);
			if (!ability.exists) { // Not even a real move
				return this.validateSet(set, teamHas);
			}
			// Absolute trademark bans
			if (ability.category !== 'Status') {
				return [`${ability.name} is not a status move and cannot be used as a trademark.`];
			}
			// Contingent trademark bans
			if (this.ruleTable.isRestricted(`move:${ability.id}`)) {
				return [`${ability.name} is restricted from being used as a trademark.`];
			}
			if (set.moves.map(this.toID).includes(ability.id)) {
				return [`${set.name} may not use ${ability.name} as both a trademark and one of its moves simultaneously.`];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');
			if (!customRules.includes('+noability')) customRules.push('+noability');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.formats.get(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = 'No Ability';
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = 'No Ability';
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = {};
			teamHas.trademarks[ability.name] = (teamHas.trademarks[ability.name] || 0) + 1;
			return problems.length ? problems : null;
		},
	},

	// Retro Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Retro Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9029427/">ORAS Pure Hackmons</a>`,
		],

		mod: 'gen6',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},

	// Randomized Format Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Format Spotlight",
		column: 3,
	},
	{
		name: "[Gen 7] Pokebilities Random Battle",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		mod: 'gen7pokebilities',
		team: 'random',
		ruleset: ['[Gen 7] Random Battle'],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSecies.exists && pokemon.m.originalSpecies !== originalFormeSecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSecies.requiredItem || originalFormeSecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},

	{
		name: "[Gen 8] Super Staff Bros 4",
		desc: "The fourth iteration of Super Staff Bros is here! Battle with a random team of pokemon created by the sim staff.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/super-staff-bros-4">Introduction &amp; Roster</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/super-staff-bros-4-discussion-thread.3675237/">Discussion Thread</a>`,
		],

		mod: 'ssb',
		team: 'randomStaffBros',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin() {
			if (!this.ruleTable.has('dynamaxclause')) {
				// Old joke format we're bringing back
				for (const side of this.sides) {
					side.dynamaxUsed = true;
				}
				this.add('message', 'Delphox only');
				this.add('message', 'No items');
				this.add('message', 'Final Destination');
				return;
			}
			// TODO look into making an event to put this right after turn|1
			// https://discordapp.com/channels/630837856075513856/630845310033330206/716126469528485909
			// Requires client change
			this.add(`raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-4" target="_blank">Super Staff Bros 4 Guide</a> or use /ssb to find out!</b></div>`);

			this.add('message', [
				'THE BATTLE FOR SURVIVAL BEGINS!', 'WHO WILL SURVIVE?', 'GET READY TO KEEP UP!', 'GET READY!', 'DARE TO BELIEVE YOU CAN SURVIVE!', 'THERE CAN BE ONLY ONE WINNER!', 'GET READY FOR THE FIGHT OF YOUR LIFE!', 'WHO WILL PREVAIL?', 'ONLY ONE TEAM WILL BE LEFT STANDING!', 'BATTLE WITHOUT LIMITS!',
			][this.random(10)]);
			this.add('message', 'FIGHT!');
		},
		onSwitchInPriority: 100,
		onSwitchIn(pokemon) {
			let name: string = this.toID(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			if (this.dex.species.get(name).exists || this.dex.moves.get(name).exists || this.dex.abilities.get(name).exists) {
				// Certain pokemon have volatiles named after their id
				// To prevent overwriting those, and to prevent accidentaly leaking
				// that a pokemon is on a team through the onStart even triggering
				// at the start of a match, users with pokemon names will need their
				// statuses to end in "user".
				name = name + 'user';
			}
			// Add the mon's status effect to it as a volatile.
			const status = this.dex.conditions.get(name);
			if (status?.exists) {
				pokemon.addVolatile(name, pokemon);
			}
			if (pokemon.m.hasBounty) this.add('-start', pokemon, 'bounty', '[silent]');
			const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
				(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
			if (pokemon.m.nowShiny) this.add('replace', pokemon, details);
		},
		onFaint(target, source, effect) {
			if (effect?.effectType !== 'Move') return;
			if (!target.m.hasBounty) return;
			if (source) {
				this.add('-message', `${source.name} received the bounty!`);
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, source, target, effect);
			}
		},
	},

	{
        name: "[Gen 1] OU",
        threads: [
            `&bullet; <a href="https://www.smogon.com/forums/threads/3689726/">RBY Sample Teams</a>,`,
            `&bullet; <a href="https://www.smogon.com/forums/threads/3685861/">RBY OU Viability Rankings</a>,`
        ],

        mod: 'gen1nat',
        ruleset: ['Standard'],
        banlist: ['Uber'],
    },
];