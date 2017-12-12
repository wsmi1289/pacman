var pOne = document.createElement('p', {id: 'new'});
pOne.innerHTML = "New Game";
pOne.onclick = function() {
	window.location.pathname = '/play';
}
var menu = document.getElementById('menu');
menu.appendChild(pOne);