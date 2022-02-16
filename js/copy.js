var botaoCopiar = document.getElementById("btn-copy");
var inputFinal = document.getElementById("msg-resultado");

botaoCopiar.addEventListener("click", function(){
	inputFinal.select();
	document.execCommand('copy');
	alert("Copiado para área de transferência");
	inputPrincipal.focus();
})