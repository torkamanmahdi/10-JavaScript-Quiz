function keysAndValues(obj) {
	let keys = Object.keys(obj)
	return [ keys, keys.map( key => obj[key] ) ]
}