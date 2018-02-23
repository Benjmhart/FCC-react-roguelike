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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
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
        		equipmentDrop: {helmet: {name:"glasses", mod:{PER:2}, armor:-1, rarity:1}}
        	} 
        ],
    	death: false,
    	win: false ,
          totalDamage:20,
          totalEXPGain: 20, 
	
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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
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
        		healthDrop: {name: "mega sandwich", mod: {HP: 7}}
        	} 
        ],
    	death: false,
    	win: false,
     totalDamage:20,
     totalEXPGain: 20, 
	
}

export const getDead = { 
	received: 
       [ 
       		{ 
       			origin:	{
       				coords: [1,2],
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
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
    	win: false,
     totalDamage:200,
	
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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
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
        		healthDrop: {name: "mega sandwich", mod: {HP: 7}}
        	} 
        ],
    	death: false,
    	win: true,
     totalDamage:20,
     totalEXPGain: 20,
	
}

export const getLVLup = { 
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
        	origin:	{
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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 200,
        		kill: true,
        		expGain: 20,
        		willDrop: false,
        	} 
        ],
    	death: false,
    	win: false, 
     totalDamage:20,
     totalEXPGain: 100,
    	LVLup:true,
    	LVLmod: {STR:2}
	
}

export const getNothing = {
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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
    			},
        		hit: true,
        		dodge: false,
        		crit: true,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 200,
        		kill: true,
        		expGain: 20,
        		willDrop: false
        	} 
        ],
     totalDamage:20,
     totalEXPGain: 20,
    	death: false,
    	win: false
	
}

export const getNoKill = { 
	received: 
       [ 
       		
        	{ 
         		origin: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1]}
    			},
        		hit: true,
        		dodge: false,
        		crit: false,
        		minDamage: 0,
        		maxDamage: 0,
        		damage: 5 
         	
        	} 
         ],
    	dealt: 
       [ 
       		{ 
       			target: {
       				coords: [2,1],
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
    			},
        		hit: true,
        		dodge: false,
        		crit: false,
        		minDamage: 7,
        		maxDamage: 10,
        		damage: 8,
        		kill: false
        	}
        ],
        
        totalDamage:20
	
}

export const getStatItem = { 
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
       				enemyCellObject:{...enemies[1], contains:"enemy", visible:true, explored:true}
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
        		healthDrop: {name: "potion of might", mod: {STR: 2}}
        	} 
        ],
    	death: false,
    	win: false,
     totalDamage:20,
     totalEXPGain: 20, 
	
}