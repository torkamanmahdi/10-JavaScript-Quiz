function rps(p1, p2) {
	let status = {
		Paper: "Rock",
		Rock: "Scissors",
		Scissors: "Paper"
	}
	if (p1 === p2) return "It's a draw"
	return `The winner is ${status[p1] === p2 ? 'p1' : 'p2'}` 
}