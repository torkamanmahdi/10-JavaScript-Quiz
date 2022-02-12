function equal(a, b, c) {
	return [...arguments].filter((e, i, a) => { 
		return a.filter( (x, idx) => idx != i ).includes(e)
	}).length
}