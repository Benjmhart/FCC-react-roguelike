//mocked to test a character who has had a stat adjustment prior to being passed into truestats to calculate the next level exp requirement and and 

export const charGainingLevelBeforeTrueStats = { isNew: false,
        STR: 7,
        AGI: 5,
        WIS: 5,
        PER: 5,
        CHA: 5,
        LUK: 5,
        AVL: 0,
        armor: { name: 'khaki shirt', mod: {}, armor: 1, rarity: 0 },
        weapon: 
         { name: 'shovel',
           attackMin: 1,
           attackMax: 4,
           mod: {},
           ability: 'dig',
           rarity: 0 },
        shoes: { name: 'oxfords', mod: {}, armor: 2, rarity: 0 },
        helmet: { name: 'glasses', mod: { PER: 2 }, armor: -1, rarity: 1 },
        ring: { name: 'iron ring', mod: { WIS: 1 }, rarity: 0 },
        trueSTR: 5,
        trueAGI: 5,
        trueWIS: 6,
        truePER: 6,
        trueCHA: 5,
        trueLUK: 5,
        LVL: 1,
        totalArmor: 2,
        HP: 30,
        HPMAX: 16,
        EXP: 100,
        nextLVL: 80,
        CLASS: 'archaeologist'
}
        
export const charGainingLevelAfterTrueStats = { isNew: false,
        STR: 7,
        AGI: 5,
        WIS: 5,
        PER: 5,
        CHA: 5,
        LUK: 5,
        AVL: 0,
        armor: { name: 'khaki shirt', mod: {}, armor: 1, rarity: 0 },
        weapon: 
         { name: 'shovel',
           attackMin: 1,
           attackMax: 4,
           mod: {},
           ability: 'dig',
           rarity: 0 },
        shoes: { name: 'oxfords', mod: {}, armor: 2, rarity: 0 },
        helmet: { name: 'glasses', mod: { PER: 2 }, armor: -1, rarity: 1 },
        ring: { name: 'iron ring', mod: { WIS: 1 }, rarity: 0 },
        trueSTR: 7,
        trueAGI: 5,
        trueWIS: 6,
        truePER: 7,
        trueCHA: 5,
        trueLUK: 5,
        LVL: 2,
        totalArmor: 2,
        HP: 35,
        HPMAX: 35,
        EXP: 20,
        nextLVL: 160,
        CLASS: 'archaeologist'
}