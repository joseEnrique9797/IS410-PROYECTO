var localStorage = window.localStorage;
var informacion
$("#button-config").click(function(){
    console.log("entro-1")

    var datos={
        nombre: $('#nombre').val(),
        apellido:$('#apellidos').val(),
        correo:$('#correo').val(),
        contraseña:$('#contraseña').val()
    }
    console.log(datos);
    
    localStorage.setItem($('#nombre').val(), JSON.stringify(datos));
    informacion=datos;

});

/*
$(document).ready(function(){
    
        var d= JSON.parse(localStorage.getItem("qewrqwerqer"));
        
        $("#nombre-usuario").append(`
            HOLA
            ${d.apellido}
                  
        `); 
    
    
});

*/

function mostrarContrasena(){
    var tipo = document.getElementById("password");
        
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

