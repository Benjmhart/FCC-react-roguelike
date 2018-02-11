function shrinkArray(arr) {
	if(arr.length <= 10){return arr}
	const newArr = [...arr]
	newArr.shift()
	return shrinkArray(newArr)
}

export default shrinkArray;