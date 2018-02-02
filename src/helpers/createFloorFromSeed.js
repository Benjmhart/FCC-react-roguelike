// receives a string as a seed

//starts at floor center and uses the contents of the seed string to construct a 2d array
//uses string to add monsters and items to the array in empty places
//pure function

/* 

STEPS

1. gets a seed string (40 char SHA15)
2. creates an empty 2D array of 100x100
3. all coordinates with an x or y index of 0 or 99 = wall
4. breaks seed string into an array, iterates with (tocharcode) to give 40 numbers
5. starts at index of array[50][50], iterates seed and uses it to lay down tunnels
6. for every 3 values in seed array, build a room at coordinates (may need to modulus 99 for values higher than 99), val1=X val2=y, val3=used to determine area, 
7. iterates the map, looks for empty spaces and puts monsters down 


8. NO DOORS/WALLS for rooms.  KEEP IT SIMPLE

*/

//return 2d array
