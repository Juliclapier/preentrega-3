let carrito;
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  document.getElementById("contador").innerHTML = carrito.length;
  }
  function agregarAlCarrito(nombreProducto) {
    carrito.push(nombreProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("contador").innerHTML = carrito.length; 
  }
let producto=JSON.parse(localStorage.getItem("producto"));
let aux =`<div class="container home-detalle">
<div class="row">
<div class="col-sm ">
<img src=${producto.imagen}>
</div>
<div class="col-sm">
<p> ${producto.nombre}</p>
<p>$${producto.precio}</p>
<p>$${producto.detalle}</p>
<hr>
<button type="button" class="btn btn-danger btn-lg btn-block btn-sm" onclick='agregarAlCarrito(${JSON.stringify(producto)})'>Agregar al carrito</button>
</div>
</div>
<div>
`
document.getElementById("asd").innerHTML = aux;

