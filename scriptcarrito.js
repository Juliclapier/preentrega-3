let carrito;

if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  document.getElementById("contador").innerHTML = carrito.length;

  /* MOSTRAR PRODUCTOS DEL CARRITO*/
  let mostrarCarrito=``;
  for(let i=0;i<carrito.length;i++){
    mostrarCarrito+=`<div class="caja-detalle-producto">
    <div class="row caja-detalle-producto-interior">
    <div class="col-2 ">
    <img src=${carrito[i].imagen} width="60px">
    </div>
    <div class="col-8">
    <p>${carrito[i].nombre}</p>
    <a href="#" onclick='borrarUnProducto(${JSON.stringify(carrito[i])})'>Eliminar</a>
    </div>
    <div class="col-2">
    <p>PRECIO $${carrito[i].precio}</p>
    <p> DETALLE PRODUCTO ${carrito[i].detalle}</p>
    <p> TALLE ${carrito[i].talle}</p>
    </div>
    </div>
    </div>`
  }
  
  
  document.getElementById("productos-contador").innerHTML = carrito.length;
  document.getElementById("productos-carrito").innerHTML = mostrarCarrito;
  
let subtotalCarrito=0;
let carritoTotal=0;
for(let i=0;i<carrito.length;i++){
subtotalCarrito+=carrito[i].precio;
}
let subtotalCarritoDetalle=`<div class="row carrito">
<div class="col-9">
<p>Subtotal</p>
</div>
<div class="col-3">
<p>$${subtotalCarrito}</p>
</div>
</div>
`

let carritoTotalDetalle=`<div class="row">
<div class="col-9">
<p>Total</p>
</div>
<div class="col-3">
<p id="total-actualizado">$${carritoTotal+=subtotalCarrito}</p>
</div>
</div>`

document.getElementById("carrito-total").innerHTML = subtotalCarritoDetalle;
document.getElementById("carrito-final").innerHTML = carritoTotalDetalle;




/*FUNCION PARA BORRAR PRODUCTOS DEL CARRITO*/
function borrarUnProducto(parametro){
  let nuevoCarrito = [];
  let aux=0;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre==parametro.nombre && aux==0) {
      carrito.splice(i,1);
      aux++;
    }
  }
 nuevoCarrito=carrito;
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  let mostrarCarrito=``;
for(let i=0;i<carrito.length;i++){
  mostrarCarrito+=`<div class="caja-detalle-producto">
  <div class="row caja-detalle-producto-interior">
  <div class="col-2 ">
  <img src=${carrito[i].imagen} width="60px">
  </div>
  <div class="col-8">
  <p>${carrito[i].nombre}</p>
  <div class="col-8">
  <p>${carrito[i].detalle}</p>
  <a href="#" onclick='borrarUnProducto(${JSON.stringify(carrito[i])})'>Eliminar</a>
  </div>
  <div class="col-2">
  <p>$${carrito[i].precio}</p>
  </div>
  </div>
  </div>`
}

document.getElementById("productos-carrito").innerHTML = mostrarCarrito;

document.getElementById("productos-contador").innerHTML = carrito.length;
document.getElementById("contador").innerHTML = carrito.length;
if(carrito.length==0){
  $('#div-compra').hide();
  let aux2=`<p class="text-center" style="font-size:50px"><strong>TU CARRITO ESTA VACIO</strong></p>
  <a href="index.html" ><p class="text-center">Volver a tienda</p></a>
  `
  $('#mensaje-final-compra').html(aux2);
}
}


/*VACIAR  CARRITO Y NOTIFICACION DE  ENVIO DE  DATOS AL EMAIL */
$('#compra').click(function(){
  let x = document.getElementById("input-email").value;
  if(x.includes('@')){
    
	$('#div-compra').hide();
  let x = document.getElementById("input-email").value;
  localStorage.setItem("email",x);
  let aux=localStorage.getItem("email");
  let aux2=`<p class="text-center" style="font-size:50px">Gracias por tu compra, hemos enviado un detalle a tu casilla de correo. <strong>${aux}</strong></p>
  <div>
  
  
  </div>
  `
    $('#mensaje-final-compra').html(aux2);
  localStorage.removeItem("carrito");
  }else{
    let m=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>El mail ingresado es incorrecto.</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
    document.getElementById("notificacion-email-input").innerHTML =m;
  }

});


/*MERCADOPAGO*/


/*FUNCION PARA MENSAJE VACIO CARRITO*/

if (carrito.length==0){
  $('#div-compra').hide();
  let aux2=`<p class="text-center" style="font-size:50px"><strong>TU CARRITO ESTA VACIO</strong></p>
  <a href="index.html" ><p class="text-center">Volver a tienda</p></a>`
    $('#mensaje-final-compra').html(aux2);
}
  }
  if (localStorage.getItem("carrito") == null) {
    $('#div-compra').hide();
    let aux2=`<p class="text-center" style="font-size:50px"><strong>TU CARRITO ESTA VACIO</strong></p>
    <a href="index.html" ><p class="text-center">Volver a tienda</p></a>
    `
    $('#mensaje-final-compra').html(aux2);
  }

