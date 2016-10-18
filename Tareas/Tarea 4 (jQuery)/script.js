$(document).ready(function(){
	var names=["dragonBlanco.jpg", "dragonCienOjos.jpg","dragonNegro.jpg", "jinzo.png",
	"magaOscura.jpg","nelPerro.jpg","obelisco.jpg","ra.jpg","soldadoBrillo.jpg","tePasas.jpg"];
	var p = $('#galeria');
	for(var x in names){
		p.append("<div class=\"ficha\"><img src=\"img/"+names[x]+"\" class=\"imagen\"></div>");
	}
});