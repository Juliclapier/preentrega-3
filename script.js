

let carrito = [];
if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  document.getElementById("contador").innerHTML = carrito.length;
}






/*CONSTRUCTOR*/
class Producto{
    constructor(nombre,precio,imagen,detalle,talle){
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.detalle=detalle;
        this.talle=talle;
        
    }
}
/*ARRAYS Y OBJETOS INICIALIZACION*/
let remeras=[];
let remeUno=new Producto("Reme ALF!",780,"img/remeAlf.png","Color Gris gastado", "M");
let remeDos=new Producto("Reme Bazooka",499,"img/remeBazooka.png","Color Blanca","S");
let remeTres=new Producto("Reme Britney",809,"img/remeBritney.png","Color Amarillo", "L");
let remeCuatro=new Producto("Reme Jorgito",690,"img/remeJorgito.png","Color Negro", "S");
let remeCinco=new Producto("Reme Capitan",820,"img/remeCapitan.png","Color Blanco","M");
let remeSeis=new Producto("Buzos",1959,"img/remeBuzos.png","Color Rojo","L");

remeras.push(remeUno,remeDos,remeTres,remeCuatro,remeCinco,remeSeis);


/*MOSTRAR CATEGORIAS DE  PORDUCTOS EN INDEX*/
  let options=`<div class="container">
  <div class="row home nav_selection ">
    <div class="col-4">
  </div>
    <div class="col-4 ">
    <span class="float-right">ordenar por</span>
    </div>
    <div class="col-4">
      <select class="form-control form-control-sm select_orden" id="option-menu" onchange="ordenar()">
      <option value="Fecha">Fecha de lanzamiento</option>
        <option value="Mayor">Mayor precio</option>
        <option value="Menor">Menor precio</option>
      </select>
    </div>
  </div>
  </div>`
  let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
            <p class="card-text">${remeras[i].detalle}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
        }
  
        document.getElementById("mostrarProductos").innerHTML = auxIndex;
        document.getElementById("mostrarOption").innerHTML = options;



/*AGREGAR PRODUCTOS AL CARRITO Y ACTUALIZAR EL CONTADOR*/
function agregarAlCarrito(nombreProducto) {
  carrito.push(nombreProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("contador").innerHTML = carrito.length; 
}

function detallesProducto(parametro){
  location.href = "detalle.html";
  localStorage.setItem("producto", JSON.stringify(parametro));
}
 
function ordenar() {
  var x = document.getElementById("option-menu").value;
  if(x=="Mayor"){
    remeras=remeras.sort((a,b)=>b.precio-a.precio);
    let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
            <p class="card-text">$${remeras[i].detalle}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
      }
    document.getElementById("mostrarProductos").innerHTML = auxIndex ;
  }else if(x=="Menor"){
    remeras=remeras.sort((a,b)=>a.precio-b.precio);
    let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
            <p class="card-text">$${remeras[i].detalle}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
      }
    document.getElementById("mostrarProductos").innerHTML = auxIndex ;
  }
  else if(x=="Fecha"){
    remeras=remeras.sort((a,b)=>b.fecha-a.fecha);
    let auxIndex=``;
    for (let i = 0; i <remeras.length; i++) {
          auxIndex+= `
          <div class="col-sm-3 card-margin"> 
          <div class="card">
          <img src=${remeras[i].imagen} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${remeras[i].nombre}</h5>
            <p class="card-text">$${remeras[i].precio}</p>
            <p class="card-text">$${remeras[i].detalle}</p>
          </div>
          <div class="card-footer">
          <div class="text-center">
        <button type="button" class="btn btn-success btn-sm" onclick='agregarAlCarrito(${JSON.stringify(remeras[i])})'>Agregar al carrito</button>      
        <a href="#"><button type="button" class="btn btn-primary btn-sm" style="margin-top:5px;" onclick='detallesProducto(${JSON.stringify(remeras[i])})'>Ver Detalle</button></a></div>
          </div>
        </div>
        </div>`
      }
    document.getElementById("mostrarProductos").innerHTML = auxIndex ;
  }
}

/*JQUERY ANUNCIANTES*/
$('#mostrar').click(function(){
	$("#carrusel").show();
});
$('#ocultar').click(function(){
	$('#carrusel').hide();
});
