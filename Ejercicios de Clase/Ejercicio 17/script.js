$(document).ready(function(){
	var cartasAgregadas = 0;
	var cartas = ["dragonBlanco.jpg",
				  "dragonCienOjos.jpg",
				  "dragonNegro.jpg",
				  "jinzo.png",
				  "magaOscura.jpg",
				  "nelPerro.jpg",
				  "obelisco.jpg",
				  "ra.jpg",
				  "soldadoBrillo.jpg",
				  "tePasas.jpg"];

	var p = $('#lista');
	for(var x in cartas){
		p.append("<div class=\"ficha\"><img src=\"img/"+cartas[x]+"\" class=\"imagenLista\"></div>");
	}
	function eliminarCartas(){
		$('#cartas').empty();
		$('#eliminacion').empty();
		cartasAgregadas=0;
	}
	$('.imagenLista').click(function(){
		var id = $('.imagenLista').index(this);
		var img = $('.imagenDescripcion');
		if($(img).length==0){//si hay
			$('#boton').before("<img src=\"\" class=\"imagenDescripcion\"/>");
		}
		img = $('.imagenDescripcion');
		$(img).attr("src","img/"+cartas[id]);
	});
	$('#eliminacion').on("click",'#botonEliminar',function(){
		console.log("Aceptar");
		$( '#dialog-confirm' ).dialog({
			autoOpen: true,
			resizable: false,
			height: 500,
			width: 400,
			modal: true,
			buttons: {
			"Eliminar todos los elementos": function() {
				eliminarCartas();
				$( this ).dialog("close");
			},
			Cancel: function() {
			$( this ).dialog( "close" );
		   		}
			}
    	});
	});
	$('#botonAgregar').click(function(){
		var name = $('input').val();
		var desc = $('textarea').val();
		var imgSrc = $('.imagenDescripcion').attr('src');
		/*if(name==null||name.length==0) {
			alert("Por favor, introduzca un nombre para la carta"); 
			return;
		}*/	
		if(imgSrc==null){
			alert("Por favor, seleccione una imagen para la carta");
			return;
		}
		var fichaNueva =  	"<div class=\"fichaCarta\">\
							 	<div class=\"imagenCarta\">\
							 		<img src="+imgSrc+" alt=\"Imagen\" />\
							 	</div>\
							 	<div class=\"datosCarta\"><br>\
							 		<p><strong>Nombre: </strong>"+name+"</p>\
							 		<p><strong>Descripción: </strong>"+desc+"</p>\
							 	</div>\
								<div id=\"limpiar\"></div>\
							</div>"
		if(cartasAgregadas>0) fichaNueva = "<hr>"+fichaNueva;
		else{
			$('#eliminacion').append('<form action="#" name="formEliminar"><button id="botonEliminar" name="nose" type="button" value="eliminar">Eliminar Todas</button></form>');
		}
		cartasAgregadas++;
		$('#cartas').append(fichaNueva);
		$('.imagenDescripcion').remove();
		$('input').val('');
		$('textarea').val('');
	});
	
});