//jQuery time
var paises=[
	{nombrePais:'Honduras'},
	{nombrePais:'Panama'},
	{nombrePais:'Guatemala'},
	{nombrePais:'El salvador'},
	{nombrePais:'Mexico'},
	{nombrePais:'Estados Unidos'},
	{nombrePais:'Costa Rica'}
];

$(document).ready(function(){
	console.log("entro");
	for (var i = 0; i < paises.length; i++) {
		console.log("entro2");
		$("#contenido-opciones").append(`
		<option value="Value1">${paises[i].nombrePais}</option>
		`);	
	}
});
