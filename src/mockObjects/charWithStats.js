const charWithStats = { 
	isNew: false, 
	STR:5,
	AGI:5,
	WIS:5,
	PER:5,
	CHA:5,
	LUK:5,
	AVL:0,
	armor: {name:"khaki shirt", mod: {}, armor:1, rarity:0},
	weapon: {name:"shovel", attackMin:1, attackMax:4, mod:{}, ability:"dig", rarity:0},
	shoes: {name:"oxfords", mod:{}, armor:2, rarity:0},
	helmet: {name:"monocle", mod:{PER:1}, armor:-1, rarity:0},
	ring: {name:"iron ring", mod:{WIS:1}, rarity:0},
	trueSTR:5,
	trueAGI:5,
	trueWIS:6,
	truePER:6,
	trueCHA:5,
	trueLUK:5,
	LVL:1,
	totalArmor:2,
	HP:16,
	HPMAX:16,
	nextLVL:80,
	CLASS:"archaeologist"
};

export default charWithStats;