$("#usuarios").click(function(){
    $("#contenido").empty();
    console.log("entro");
    $("#contenido").append(`
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Contraseña</th>
                    <th scope="col">Correo</th>
                </tr>
            </thead>
            <tbody id="cuerpo-tabla">
            
            </tbody>
        </table>
    
    
    `)

    $.ajax({ // Peticion para mostrar los post de manera dinamica.
        url:"../ajax/usuario.php?accion=mostrarUsuarios",
        dataType: "json",
        method:"POST",
        
        
        success: function(respuesta){
            
            console.log(respuesta);
            
            for(var i=0;i<=respuesta.length;i++){
                
                $("#cuerpo-tabla").append(`
                    <tr>
                        <th class="color-text" scope="row">${i}</th>
                        <td  class="color-text" >${respuesta[i].nombre}</td>
                        <td  class="color-text" >${respuesta[i].password}</td>
                        <td  class="color-text" >${respuesta[i].correo}</td>
                        
                    </tr>

                `)
            }
            
        },
        error:function(error){
            console.log("valio");
        }
    })
});


    


