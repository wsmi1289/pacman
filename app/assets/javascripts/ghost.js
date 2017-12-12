class Ghost extends Man {

	constructor(row, column, color){
		super(row, column)
		this.color = color
	}

	drawGhost(color){
		var ctx = $("game").getContext('2d');
		ctx.drawImage($(color), this.column*50-50, this.row*50-50);
		ctx.drawImage($(color), this.column*50-50, this.row*50-50);
		ctx.drawImage($(color), this.column*50-50, this.row*50-50);
		ctx.drawImage($(color), this.column*50-50, this.row*50-50);
	}
}