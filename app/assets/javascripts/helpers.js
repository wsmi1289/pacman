function setAttributes(element, attrs) {
	for (var key in attrs) {
		element.setAttribute(key, attrs[key]);
	}
}


function KeyHandler(event, pacman){
	console.log(event);

	switch (event.keyCode)
	{
		case 38:	// UP Arrow Key pressed
		
			pacman.Up();
			break;
		case 87:	// W pressed
			event.preventDefault();

		case 40:	// DOWN Arrow Key pressed
			pacman.Down();
			break;
		case 83:	// S pressed 
			event.preventDefault();
		case 37:	// LEFT Arrow Key pressed
			pacman.Left();
			break;
		case 65:	// A pressed
			event.preventDefault();
		case 39:	// RIGHT Arrow Key pressed
			pacman.Right();
			break;
	}
}