function reversibleInclusiveList(start, end) {
	let result = []
	for ( let i = Math.min(start, end) ; i <= Math.max(start, end) ; i++ ) {
		result.push(i)
	}
	return start > end ? result.reverse() : result
}