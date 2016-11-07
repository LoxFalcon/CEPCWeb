$(document).ready(function(){
	var showJSON = function(prefix,json,obj){
		var sel = $(obj);
		var cont = 0;
		for(var i in json){
			if(cont>0) sel.append(",<br>");
			if(Array.isArray(json[i])){
				sel.append(prefix+i+":[<br>");
				showJSON(prefix+"\t",json[i],obj);
				sel.append(prefix+"]<br>");

			}else if((typeof json[i])==="object"){
				sel.append(prefix+i+":{<br>");
				showJSON(prefix+"\t",json[i],obj);
				sel.append(prefix+"}");
			}else{
				sel.append(prefix+i+" : "+json[i]);
			}
			cont++;
		}
		sel.append("<br>");
	};
	$.ajax({
	  dataType: "json",
	  url: "unidimensional.json",
	  data: {},
	  success: function(result){
	  	showJSON("",result,"#unidimensional .contenido");
	  }
	});
	$.ajax({
	  dataType: "json",
	  url: "multidimensional.json",
	  data: {},
	  success: function(result){
	  	showJSON("",result,"#multidimensional .contenido");
	  }
	});

	$.getJSON("unidimensional.json", {},function(result){
		showJSON("",result,"#unidimensional .contenido");
	});
	$.getJSON("multidimensional.json",{},function(result){
		showJSON("",result,"#multidimensional .contenido");
	});
});