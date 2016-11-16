function miniatura(img,nombre,desc){

	this.img=img;
	this.nombre=nombre;
	this.desc=desc;
	this.crearMiniatura=function (){

		var $miniatura=$("<div></div>");
		var $img=$("<img>")
		var $decCon=$("<div></div>");
		var $boton=$("<button>Abrir</button>");
		$boton.attr("name",this.id);
		$miniatura.attr("class","thumbnail");
		$decCon.attr("class","caption text-center");
		$img.attr("src",this.img);
		$decCon.append("<h3>"+this.nombre+"</h3>");
		$decCon.append("<p>"+this.desc+"</p>");
		$boton.attr({
			"class":"btn btn-lg btn-block btn-primary center-block",
			"type":"button",
			"data-toggle":"modal",
			"data-target":"#myModal"
		});
		$miniatura.append($img);
		$miniatura.append($decCon);
		$miniatura.append($boton);
		
		return $miniatura;
	}

}

function inicializarCuadros(data){
		var $albumnes=$("#albumnes");
		var $artistas=$("#artistas");
		var $canciones=$("#canciones");
		$albumnes.empty();
		$artistas.empty();
		$canciones.empty();
		var $row=$("<div></div>");
		$row.attr("class","row");
		

	 $.each(data.albums.items, function(index, element) {
    	var min= new miniatura(element.images[0].url,element.name,"Esta es la descripcion");
    	var $col=$("<div></div>");
		$col.attr("class","col-md-4 col-xs-12 col-sm-6 col-lg-2");
		$col.append(min.crearMiniatura());
		$row.append($col);
		
	});
	
		$albumnes.append($row.clone());
		$artistas.append($row.clone());
		$canciones.append($row.clone());
}



