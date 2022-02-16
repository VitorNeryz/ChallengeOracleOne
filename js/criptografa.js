var inputPrincipal = document.querySelector("#input-principal");
var botaoCriptografar = document.querySelector("#btn-cripto");

botaoCriptografar.addEventListener("click" ,function(event){
	event.preventDefault();

	var string = inputPrincipal.value.toLowerCase() ;
	var elegivel = verificaSimbolos(string);

	if(elegivel){
		var letras = string.split("", string.length);
		var frase = codifica(letras);
		document.getElementById("msg-resultado").value = frase;
	}
		
});

function codifica(letra){
	var frase = "" ;
	letra.forEach(function(letra){
		if(letra == "a"){
			frase = frase + "ai";
			return
		}
		if(letra == "e"){
			frase = frase + "enter";
			return
		}
		if(letra == "i"){
			frase = frase + "imes";
			return
		}
		if(letra == "o"){
			frase = frase + "ober";
			return
		}
		if(letra == "u"){
			frase = frase + "ufat";
			return
		}else {
			frase = frase + letra;
		}
	})
	return frase ; 
}

function verificaSimbolos(string){
	var regex = /\W|_/;
	var textoErro = document.getElementById("msg-erro");
	if(regex.test(string) == true ) {
		textoErro.classList.remove("invisivel");
		return false
	}else {
		textoErro.classList.add("invisivel");
		return true
	}
}