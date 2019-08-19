$(document).ready(function(){
    $("#producto").append(`
    <div class="col-md-4">
        <center>
            <img id="imagen-config" src="img/pickup.png" alt="">
        </center>    
        <div id="div-productos-config">
            <table class="table-config">
                <th><h6>Informacion del producto: </h6></th>
                <th> <a data-toggle="modal" data-target="#exampleModal" href="">ver mas</a></th>
            </table>
        </div> 
    </div>
    
    <div class="col-md-4">
        <center>
            <img id="imagen-config" src="img/ps4.jpg" alt="">
        </center>   
        <div id="div-productos-config">
            <table class="table-config">
                <th><h6>Informacion del producto: </h6></th>
                <th> <a data-toggle="modal" data-target="#exampleModal" href="">ver mas</a></th>
            </table>
        </div> 
       
    </div>
    <div class="col-md-4">
        <center>
            <img id="imagen-config" src="img/diablo.jpg" alt="">
        </center>   
        <div id="div-productos-config">
            <table class="table-config">
                <th><h6>Informacion del producto: </h6></th>
                <th> <a data-toggle="modal" data-target="#exampleModal" href="">ver mas</a></th>
            </table>
        </div> 
        
    </div>
        
              
    `); 


});