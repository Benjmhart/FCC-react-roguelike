/*global expect*/
import makeView from "../../helpers/makeView";

/*
makeview takes in two numbers  and the hero's coordinates in an object as w, h, and herox, heroy 
it immediately pulls 20 percent off h.

these values should be now equivalent to the size of the map component when rendered.

next, it determines the size of the pixels,  with a goal of always getting at 
least 20 pixels on screen in both width and height it will use the smaller of the 
two numbers to determine pixel size

next it will divide the pixel size to get the ODD number of pixels for the page (which 
will keep the hero in exact center)

next it will declare variables for the centre coordinates,  and 

so on a 21 by 25 grid,   the center would be 11, 13,   

now the function will construct the array and array.fill it with garbage like 1's

now the function will iterate over the array, starting with 

so array.map
	row.map
		the coordinates for the first cell (0,0) in the first row are herox - 11, heroy-13
		so return x+(herox-11), y+(heroy-13) in this example
		which means the second cell in the row  (0,1) would get herox-ll, heroy-12 and so 
		on.
*/
describe("basic operation", () => {})