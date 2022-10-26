var zoomer = document.getElementById('zoomer');
var hubblepic = document.getElementById('hubblepic');

function deepdive(){ 
	zoomlevel = zoomer.valueAsNumber;
  hubblepic.style.webkitTransform = "scale("+zoomlevel+")";
	hubblepic.style.transform = "scale("+zoomlevel+")";
}