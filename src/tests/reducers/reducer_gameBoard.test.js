/*
when the character is completed it generates the first floor
accepts the UPDATE_CHARACTER action if and only if the payload has isnew=false to trigger 
the initial level thereafter, accepts the CHAR_MOVE action add runs all enemy moves, 
adjusts the heros coordinates, and generates a level iff and only if the MOVE-TO part of 
the CHAR_MOVE payload is a STAIRDOWN(also changes current floor), if it is a STAIR-UP it .
only changes current floor.
*/


// map has a currentfloor and a 3D array [FLOORS],[ROWS],[COLUMNS]
//if move successful, moves the hero object to correspond with moving hero coordinates on the character object
//ongamestart injects the hero object into the array?
//a cell is always empty after the hero leaves...

// this reducer needs to take a generate floor seed random number function as a dependancy
//it also needs to take a floor seed and an empty array and pass it to a procedural generator
// this procedural generator will be a pure function that takes an array and a seed and uses the seed as an instruction to build a floor.

//2nd delivery
//when the current level increments to a new level, it generates a level
//allows the current level to ascend and descent
//causes enemies to move when a character move event occurs
//turns a visible property on and off depending on coordinates
//
