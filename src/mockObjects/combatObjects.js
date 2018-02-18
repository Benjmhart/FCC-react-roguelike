import enemies from "../assets/enemies"

export const getItemDrop = { 
	received: 
       [ 
       		{ 
       			origin:	{
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
       		},
        	{ 
         		origin: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
         	
        	} 
         ],
    	dealt: 
       [ 
       		{ 
       			target: {
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 200,
        		kill: true,
        		expGain: 20,
        		willDrop: true,
        		getEquipment: true,
        		equipDropType: "helmet",
        		equipmentDrop: {name:"glasses", mod:{PER:2}, armor:-1, rarity:1}
        	} 
        ],
    	death: false,
    	win: false 
	
}

export const getHealthItem = { 
	received: 
       [ 
       		{ 
       			origin:	{
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
       		},
        	{ 
         		origin: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
         	
        	} 
         ],
    	dealt: 
       [ 
       		{ 
       			target: {
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 200,
        		kill: true,
        		expGain: 20,
        		willDrop: true,
        		getEquipment: false,
        		healthDrop: {name: "mega sandwich", mod: {HP: 20}}
        	} 
        ],
    	death: false,
    	win: false 
	
}

export const getDead = { 
	received: 
       [ 
       		{ 
       			origin:	{
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
       		},
        	{ 
         		origin: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 1000 
         	
        	} 
         ],
    	dealt: 
       [ 
       		{ 
       			target: {
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 0,
        	} 
        ],
    	death: true,
    	win: false 
	
}
      
      
export const getWin = { 
	received: 
       [ 
       		{ 
       			origin:	{
       				coords: [1,2],
       				enemyCellObject:{...enemies[1], boss:true}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
       		},
        	{ 
         		origin: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
         	
        	} 
         ],
    	dealt: 
       [ 
       		{ 
       			target: {
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 200,
        		kill: true,
        		expGain: 20,
        		willDrop: true,
        		getEquipment: false,
        		healthDrop: {name: "mega sandwich", mod: {HP: 20}}
        	} 
        ],
    	death: false,
    	win: true 
	
}

export const getLVLup = { 
       			origin:	{
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
       		},
        	{ 
         		origin: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: false,
        		dodge: true,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 0 
         	
        	} 
         ],
    	dealt: 
       [ 
       		{ 
       			target: {
       				coords: [1,2],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 200,
        		kill: true,
        		expGain: 20,
        		willDrop: true,
        		getEquipment: true,
        		equipDropType: "helmet",
        		equipmentDrop: {name:"glasses", mod:{PER:2}, armor:-1, rarity:1}
        	} 
        ],
    	death: false,
    	win: false, 
    	totalEXP:100,
    	LVLup:true;
    	LVLmod: {STR:2}
	
}