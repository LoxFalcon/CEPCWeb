$(document).ready(function(){
	$('#Phone').keydown(function(){
		var str = $('#Phone').val();
		console.log("fd: "+str);
		var newStr = ""; var cont = 0;
		for(var i = 0;i<str.lengt && cont<10;i++){
			console.log(str[i]+" : "+isNaN(str[i]));
			if(!isNaN(str[i])){
				cont++;
				if(cont===4 || cont===7){
					newStr+='-';
				}
				newStr += str[i];
			}
		}
		$('#Phone').val(newStr);
		console.log(newStr);
	});

});