const equipment = {
	archaeologist: {
		armor: [
			{name:"khaki shirt", mod: {}, armor:1, rarity:0},
			{name:"sweater vest", mod: {WIS:1}, armor:2, rarity:1},
			{name:"tweed coat", mod: {PER:1}, armor:3, rarity:2},
			{name:"work shirt", mod: {STR:2}, armor:3, rarity:3},
			{name:"excavation suit", mod: {STR:4}, armor:5, rarity:4},
			{name:"tweed coat with leather patches", mod: {INT:5}, armor:7, rarity:5}
			],
		weapon: [
			{name:"shovel", attackMin:1, attackMax:4, mod:{}, ability:"dig", rarity:0},
			{name:"bronze pickaxe", attackMin:1, attackMax:6, mod:{STR:1}, ability:"dig", rarity:1},
			{name:"iron pickaxe", attackMin:2, attackMax:10, mod:{STR:1}, ability:"dig", rarity:2},
			{name:"steel pickaxe", attackMin:5, attackMax:12, mod:{STR:2}, ability:"dig", rarity:3},
			{name:"gold pickaxe", attackMin:8, attackMax:16, mod:{STR: 4}, ability:"dig", rarity:4},
			{name:"diamond pickaxe", attackMin:12, attackMax:24, mod:{STR:6}, ability:"dig", rarity:5}
			],
		shoes: [
			{name:"oxfords", mod:{}, armor:2, rarity:0},
			{name:"steeltoe oxfords", mod:{STR:1}, armor:4, rarity:1},
			{name:"work boots", mod:{STR:3}, armor:5, rarity:2},
			{name:"excavation boots", mod:{STR:3, AGI:4}, armor:6, rarity:3}
			],
		helmet: [
			{name:"monocle", mod:{PER:1}, armor:-1, rarity:0},
			{name:"glasses", mod:{PER:2}, armor:-1, rarity:1},
			{name:"bifocals", mod:{PER:3}, armor:-1, rarity:2},
			{name:"contact lenses", mod:{PER:4}, armor:0, rarity:3}
			],
		ring: [
			{name:"iron ring", mod:{WIS:1}, rarity:0},
			{name:"silver ring", mod:{WIS:2}, rarity:1},
			{name:"tenure ring", mod:{WIS:3, PER:1, LUK: 1}, rarity:2}
			]
	},
	barbarian:{
		armor: [
			{name:"fur sash", mod: {}, armor:1, rarity:0},
			{name:"animal skin", mod: {STR:1}, armor:2, rarity:1},
			{name:"pauldron", mod: {STR:2, AGI:1}, armor:3, rarity:2},
			{name:"war skin", mod: {STR:3, AGI:3}, armor:5, rarity:3},
			{name:"victorious war skin", mod: {STR:5, AGI:5}, armor:10, rarity:4}
			],
		weapon: [
			{name:"hatchet", attackMin:3, attackMax:7, mod:{}, rarity:0},
			{name:"large axe", attackMin:5, attackMax:10, mod:{STR:1}, rarity:1},
			{name:"battle axe", attackMin:6, attackMax:14, mod:{STR:4}, rarity:2},
			{name:"war axe", attackMin:12, attackMax:24, mod:{STR:8}, rarity:3},
			{name:"bloody war axe", attackMin:14, attackMax:28, mod:{STR:10}, rarity:4}
			],
		shoes: [
			{name:"worn leather sandals", mod:{}, armor:1, rarity:0},
			{name:"leather sandals", mod:{STR:1}, armor:2, rarity:1},
			{name:"tribe leader sandals", mod:{STR:2, AGI:2}, armor:3, rarity:2},
			{name:"war sandals", mod:{STR:2, AGI:5}, armor:5, rarity:3}
			],
		helmet: [
			{name:"leather band", mod:{}, armor:1, rarity:0},
			{name:"leather cap", mod:{}, armor:2, rarity:1},
			{name:"stone helmet", mod:{STR:3, AGI:-1}, armor:6, rarity:2},
			{name:"war helmet", mod:{STR:5, AGI:2}, armor:10, rarity:3}
			],
		ring: [
				{name:"leather loop", mod:{STR:1}, rarity:0},
				{name:"stone ring", mod:{STR:2}, rarity:1},
				{name:"ring of thorns", mod:{STR:3}, rarity:2},
				{name:"victorious war band", mod:{STR:10}, rarity:3}
			]
	},
	knight:{
		armor: [
			{name:"bronze armor", mod: {}, armor:5, rarity:0},
			{name:"iron armor", mod: {}, armor:7, rarity:1},
			{name:"steel armor", mod: {}, armor:10, rarity:2},
			{name:"polished steel armor", mod: {}, armor:12, rarity:3},
			{name:"diamond plate mail", mod: {}, armor:18, rarity:4}
			],
		weapon: [
			{name:"dull wood sword", attackMin:3, attackMax:7, mod:{}, rarity:0},
			{name:"bronze sword", attackMin:4, attackMax:9, mod:{}, rarity:1},
			{name:"iron sword", attackMin:6, attackMax:12, mod:{STR:2}, rarity:2},
			{name:"steel sword", attackMin:9, attackMax:29, mod:{STR:3}, rarity:3},
			{name:"diamond sword", attackMin:12, attackMax:40, mod:{STR:5}, rarity:4}
			],
		shoes: [
			{name:"bronze greaves", mod:{}, armor:3, rarity:0},
			{name:"iron greaves", mod:{}, armor:6, rarity:1},
			{name:"steel greaves", mod:{}, armor:10, rarity:2},
			{name:"diamond greaves", mod:{}, armor:14, rarity:3}
			],
		helmet: [
			{name:"bronze helmet", mod:{}, armor:3, rarity:0},
			{name:"iron helmet", mod:{}, armor:6, rarity:1},
			{name:"steel helmet", mod:{}, armor:10, rarity:2},
			{name:"diamond helmet", mod:{}, armor:14, rarity:3}
			],
		ring: [
				{name:"wooden ring", mod:{}, armor:3, rarity:0},
				{name:"bronze ring", mod:{}, armor:5, rarity:0},
				{name:"iron ring", mod:{}, armor:6, rarity:0},
				{name:"steel ring", mod:{}, armor:10, rarity:0},
				{name:"diamond ring", mod:{}, armor:15, rarity:0}
			]
	},
	tourist:{
		armor: [
			{name:"nike t-shirt", mod: {AGI:3}, armor:1, rarity:0},
			{name:"heavy metal t-shirt", mod: {AGI:4, CHA:1}, armor:2, rarity:1},
			{name:"Hawaiian shirt", mod: {AGI:7, CHA:3}, armor:3, rarity:2},
			{name:"I♥NY shirt", mod: {AGI:10, CHA:5}, armor:4, rarity:3}
			],
		weapon: [
			{name:"point-and-shoot", attackMin:1, attackMax:3, mod:{CHA:1}, rarity:0},
			{name:"generic DSLR", attackMin:3, attackMax:5, mod:{CHA:3, AGI:2}, rarity:1},
			{name:"Canon EOS", attackMin:5, attackMax:7, mod:{CHA:6, AGI:5}, rarity:2},
			{name:"Nikon D750", attackMin:7, attackMax:10, mod:{CHA:10, AGI:10}, rarity:3}
			],
		shoes: [
			{name:"Adidas Consortium", mod:{AGI:2, LUK: 3}, armor:1, rarity:0},
			{name:"Converse All-Stars", mod:{AGI:4, LUK: 4}, armor:2, rarity:1},
			{name:"Air Jordans", mod:{AGI:7, LUK:7}, armor:3, rarity:2}
			], 
		helmet: [
			{name:"tweed fedora", mod:{CHA:1, LUK:5}, armor:1, rarity:0},
			{name:"fur fedora", mod:{CHA:3, LUK: 7}, armor:2, rarity:1},
			{name:"blue-jays cap", mod:{CHA:4, AGI:2,  LUK: 10}, armor:3, rarity:2},
			{name:"facial tattoo", mod:{CHA:10, LUK:12}, armor:0, rarity:3}
			],
		ring: [
			{name:"wedding band", mod:{CHA:2}, armor:1, rarity:0},
			{name:"wedding band tanline", mod:{CHA:5, AGI:2}, armor:0, rarity:1},
			{name:"wedding band tattoo", mod:{CHA:8, AGI:5}, armor:2, rarity:2}
			]
	},
	god:{
		armor: [
			{name:"mythril plate mail", mod: {STR:2, AGI:2, WIS:2, PER:5, CHA: 2, LUK:2}, armor:18, rarity:0},
			{name:"enchanted unobtainium mail", mod: {STR:4, AGI:4, WIS:4, PER:7, CHA: 4, LUK:4}, armor:24, rarity:1},
			{name:"strong adamantium mail", mod: {STR:10, AGI:10, WIS:10, PER:10, CHA: 10, LUK:10}, armor:40, rarity:2}
			],
		weapon: [
			{name:"golden trident", attackMin:10, attackMax:14, mod:{STR:4, AGI:4}, rarity:0},
			{name:"enchanted warhammer", attackMin:15, attackMax:30, mod:{STR:8, AGI:8}, rarity:1},
			{name:"throw lightning", attackMin:25, attackMax:45, mod:{STR:12, AGI:12}, rarity:2}
			],
		shoes: [
			{name:"winged sandals", mod:{AGI:5, LUK: 5}, armor:10, rarity:0},
			{name:"unobtanium warshoes", mod:{AGI:10, LUK: 10}, armor:20, rarity:1},
			{name:"levitation shoes", mod:{AGI:15, LUK: 15}, armor:30, rarity:2}
			],
		helmet: [
			{name:"winged helmet", mod:{CHA:12, WIS:5}, armor:10, rarity:0},
			{name:"unobtainium helmet", mod:{CHA:20, WIS:10}, armor:20, rarity:1},
			{name:"elemental helmet", mod:{STR:20, CHA:25, WIS:20}, armor:30, rarity:2}
			],
		ring: [
			{name:"blessed band", mod:{AGI:4}, armor:5, rarity:0},
			{name:"mythril ring", mod:{AGI:7}, armor:10, rarity:1},
			{name:"unobtanium ring", mod:{AGI:10}, armor:15, rarity:2}
			]
	}
	
}

export default equipment