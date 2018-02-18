export default function(arr) {
	console.log(`applyOddsWithinArray running with`)
	console.log(arr)
	const index = Math.floor(Math.random() * arr.length);
	console.log(index)
	const result = arr[index]
	console.log('result')
	console.log(result)
	return result
}
