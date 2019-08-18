$("#Middle").click(function(){
    
    $("#contenido").html(`
    <div class="container">
        <div class="row" >
            <div class="col.lg-6" id="administrar-producto-div">
                <div class="row">
                    <div  id="productos-div-configuracion" class="col.lg-3">
                        <a href=""><img src="img/precios-variables.png" alt=""></a>
                        <h6 class="h6-modal">Administre sus productos en descuento</h6>
                    </div>
                    <div id="productos-div-configuracion" class="col.lg-3">
                        <a href=""><img src="img/precios-variables.png" alt=""></a>
                        <h6 class="h6-modal" >Ingrese nuevo producto</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
});

$("#Left").click(function(){
    
    $("#contenido").html(`
        <table id="table-configuracion">
            <tr>
                <th class="th-general-espacios">Agregar nuevas sucursales</th>
                <th class="th-general-espacios" id="th-separador"><a data-toggle="modal" data-target="#exampleModal" href=""><img id="img-config" src="img/confi.jpg" alt=""></a></th>
                <th class="th-general-espacios">Modificar el nombre publico de la empresa</th>
                <th class="th-general-espacios"><a data-toggle="modal" data-target="#exampleModal2" href=""><img id="img-config" src="img/confi.jpg" alt=""></a></th>
            </tr>
            <tr>
                <th class="th-general-espacios">Modificar cordenadas Geograficas</th>
                <th class="th-general-espacios" id="th-separador"><a  href=""><img id="img-config" src="img/confi.jpg" alt=""></a></th>
                <th class="th-general-espacios">Cambiar los metodos de pago</th>
                <th class="th-general-espacios"><a href=""><img id="img-config" src="img/confi.jpg" alt=""></a></th>
            </tr>
        </table>
    `)
});

$("#Right").click(function(){
   
    $("#contenido").html("<h6>111111</h6>")
});