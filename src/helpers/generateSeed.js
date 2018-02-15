
export default function(seedLength) {
	const seedArr = new Array(seedLength);
	seedArr.fill(0);
	const seed = seedArr.map(()=>{return Math.floor(Math.random() * 100)})
	return seed
}