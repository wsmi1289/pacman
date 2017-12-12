class Space {
	constructor(column, row) {
		this.column = column;
		this.row = row;
		this.size = 50;
	}

	drawSpace(ctx) {
		var x = this.column * 50,
			y = this.row * 50;
		ctx.lineWidth = 0.5;
		ctx.strokeStyle = "black";
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.rect(x, y, this.size, this.size);
		ctx.fill();
		ctx.stroke();
	}

	drawDots(ctx) {
		var x = this.column * 50,
		y = this.row * 50;
		ctx.beginPath();
		ctx.arc(x-25,y-25,3,0,2*Math.PI);
		ctx.stroke();
	}
}