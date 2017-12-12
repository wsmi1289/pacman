var ctx;
class Pacman extends Man{
	constructor(row, column, lives){
		super(row, column);
		this.lives = 3;
	}

	drawPacman(){
		ctx = $("game").getContext('2d');
		ctx.drawImage($("open"), this.column*50-50, this.row*50-50 );
	}

	erasePacman(){
		var empty = new Space(this.column-1, this.row-1);
		empty.drawSpace(ctx);
		return true;
	}

	Up(){
		var colCoords = (parseInt(this.column-1)*50)+25,
			rowCoords = (parseInt(this.row-1)*50)-25,
			pixelData = ctx.getImageData(colCoords, rowCoords, 1, 1).data;
		if (pixelData[0] !== 0 & pixelData[1] !== 0 & pixelData[2] !== 0) {
			if (this.erasePacman(ctx)) {
				this.row -= 1;
				this.drawPacman();
			}
		}
	}

	Down(){
		var colCoords = (parseInt(this.column)-1)*50,
			rowCoords = (parseInt(this.row)-1)*50,
			pixelData = ctx.getImageData(this.column*50-50, this.row*50+25, 1, 1).data;
		if (pixelData[0] !== 0 & pixelData[1] !== 0 & pixelData[2] !== 0) {
			if (this.erasePacman(ctx)) {
				this.row += 1
				this.drawPacman();
			}
		}
	}

	Left(){
		var colCoords = (parseInt(this.column-1)*50)-25,
			rowCoords = (parseInt(this.row-1)*50)+25,
			pixelData = ctx.getImageData(colCoords, rowCoords, 1, 1).data;
		if (pixelData[0] !== 0 & pixelData[1] !== 0 & pixelData[2] !== 0) {
			if (this.erasePacman(ctx)) {
				this.column -= 1
				this.drawPacman();
			}
		}
	}

	Right(){
		var colCoords = (parseInt(this.column-1)*50)+75,
			rowCoords = (parseInt(this.row-1)*50)+25,
			pixelData = ctx.getImageData(colCoords, rowCoords, 1, 1).data;
		if (pixelData[0] !== 0 & pixelData[1] !== 0 & pixelData[2] !== 0) {
			if (this.erasePacman(ctx)) {
				this.column += 1
				this.drawPacman();
			}
		}
	}
}