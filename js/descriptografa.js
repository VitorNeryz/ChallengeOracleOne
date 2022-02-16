var botaoDescriptografar = document.getElementById("btn-descripto")
var inputPrincipal = document.querySelector("#input-principal");

botaoDescriptografar.addEventListener("click", function(){
	event.preventDefault();
	var string = inputPrincipal.value.toLowerCase() ;
	var elegivel = verificaSimbolos(string);

	if(elegivel){
		var frase = descriptografa(string);
		document.getElementById("msg-resultado").value = frase;
	}

})
function descriptografa(string){
	var regex = [/ai/ig,/enter/ig,/imes/ig,/ober/ig,/ufat/ig] ;
	var letras = ["a","e","i","o","u"];
	var frase = string;

	for(var i = 0 ; i < regex.length ;i++){
		var ocorrencias = frase.replace(regex[i], letras[i]);
		frase = ocorrencias;
	}
	return frase
}