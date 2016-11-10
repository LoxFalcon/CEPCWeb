function miniatura(img,nombre,desc,boton){

	this.img=img;
	this.nombre=nombre;
	this.desc=desc;
	this.boton=boton;
	this.crearMiniatura=function (){

		var $miniatura=$("<div></div>");
		var $img=$("<img>")
		var $decCon=$("<div></div>");

		$miniatura.attr("class","thumbnail");
		$decCon.attr("class","caption");
		$img.attr("src",this.img);
		$decCon.append("<h3>"+this.nombre+"</h3>");
		$decCon.append("<p>"+this.desc+"</p>");
		$decCon.append("<button id='botonAbrir' type=\"button\" class=\"btn btn-primary btn-lg boton-open\" data-toggle=\"modal\" data-target=\"#myModal\">"+this.boton+"</button>");


		$miniatura.append($img);
		$miniatura.append($decCon);

		return $miniatura;
	}

}

function inicializarCuadros(){

	var $albumnes=$("#albumnes");
	var $artistas=$("#artistas");
	var $canciones=$("#canciones");

	var min= new miniatura("mus.jpg","Musica","Esta es la descripcion","Abrir");
	var $row=$("<div></div>");
	$row.attr("class","row");

	for(var i=0;i<6;i++){
		var $col=$("<div></div>");
		$col.attr("class","col-md-4 col-xs-12 col-sm-6 col-lg-2");
		$col.append(min.crearMiniatura());
		$row.append($col);
	}

	$albumnes.append($row.clone());
	$artistas.append($row.clone());
	$canciones.append($row.clone());
}

function personalizarModals(){
	$("body").on("click","#artistas #botonAbrir",function(){
		$("#breadCrumbs").empty();
		$("#breadCrumbs").append('<ol class="breadcrumb">\
									<li class="breadcrumb-item active">Artista</li>\
									</ol>');
	});
	$("body").on("click","#albumnes #botonAbrir",function(){
		$("#breadCrumbs").empty();
		$("#breadCrumbs").append('<ol class="breadcrumb">\
									<li class="breadcrumb-item"><a href="#">Artista</a></li>\
									<li class="breadcrumb-item active">Album</li>\
									</ol>');
	});
	$("body").on("click","#canciones #botonAbrir",function(){
		$("#breadCrumbs").empty();
		$("#breadCrumbs").append('<ol class="breadcrumb">\
									<li class="breadcrumb-item"><a href="#">Artista</a></li>\
									<li class="breadcrumb-item"><a href="#">Album</a></li>\
									<li class="breadcrumb-item active">Canción</li>\
									</ol>');
	});
}

