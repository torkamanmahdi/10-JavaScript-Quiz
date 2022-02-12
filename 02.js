function chessBoard(pole) {
	return [ "black", "white" ][ ( pole.charCodeAt(0) + + pole[1] ) % 2 ]
}