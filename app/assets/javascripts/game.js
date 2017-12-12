var $ = function (id) {
			return document.getElementById(id)
		}
var pacman;
window.addEventListener("load", function() {
	drawMaze();
	initializePieces();
}, false);
document.addEventListener("keydown", function() {
	KeyHandler(event, pacman)
}, false);
// window.onload = function () {
	
// 	//$('btnCalculate').onclick = calculateChange;

// }
	
function drawMaze() {
	setAttributes($("game"),{'height': '700', 'width': '1000'});
	var ctx = $("game").getContext('2d');
	
	for (var i = 0; i <= 20; i++) {
		for (var j = 0; j <= 14; j++) {
			var tile = new Space(i, j);
			tile.drawSpace(ctx);
			tile.drawDots(ctx);
		}
	}
	ctx.drawImage($("grid"), 0, 0);
}

function initializePieces() {
	pacman = new Pacman(11, 8, null, "right");
	pacman.drawPacman();
	var blue = new Ghost(7, 6, null, "up");
	blue.drawGhost("blue");
	var pink = new Ghost(9, 6, null, "up");
	pink.drawGhost("pink");
	var red = new Ghost(7, 8, null, "up");
	red.drawGhost("red");
	var yellow = new Ghost(9, 8, null, "up");
	yellow.drawGhost("yellow");
	
}
