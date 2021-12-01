import { campoRequerido, validarNumeros, validarURL, validarGeneral } from "./hellpers.js";

import{Producto} from "./productoClass.js";

import { aleatorio } from "./generadorAlet.js";

//traigo el elemento que necesito del html
 export let campoCodigo = document.querySelector("#codigo");
let inputProducto = document.querySelector("#producto");
let inputDescripcion = document.querySelector("#descripcion");
let inputCantidad = document.querySelector("#cantidad");
let inputURL = document.querySelector("#url");

let btnNuevo=document.querySelector("#btnNuevo");

//lista para guardar los objetos
//si hay algo en localStorage, lo guardo en el arreglo, sino es un arreglo vacio

let listaProductos=JSON.parse(localStorage.getItem('arregloProductosKey')) || [];

let productoExistente=false;//si es false se crea un prod nuevo, si es true se modifica.

//asociar un evento a un elemento del html, el addevent recibe una funcion sin parametros, para incorporar los parametros, recibe una funcion anonima
campoCodigo.addEventListener("blur", () => {
  campoRequerido(campoCodigo);
});//con fuoncion anonima tipo flecha

inputProducto.addEventListener("blur", () => {
  campoRequerido(inputProducto);
});

inputDescripcion.addEventListener("blur", () => {
  campoRequerido(inputDescripcion);
});

inputCantidad.addEventListener("blur", () => {
  validarNumeros(inputCantidad);
});

inputURL.addEventListener("blur", () => {
  validarURL(inputURL);
});
//con funcion sin parametros
btnNuevo.addEventListener('click', limpiarFormulario);

let form=document.getElementById('idForm');



//llamo a carga inicial

cargaInicial();

console.log(form);

form.addEventListener('submit', guardaProducto);


function guardaProducto(e){
  e.preventDefault();
  //verificar validaciones
  if(validarGeneral(campoCodigo, inputProducto, inputDescripcion, inputCantidad, inputURL)){
      if(productoExistente){
          //modificar un producto
          modificarProducto();
          productoExistente=false;
      }else{
          //crear un producto
        crearProducto();
      }
    
    
  }
  

}

function crearProducto(){
  //crear un  objeto producto
  //console.log('aqui tengo que crear un producto');
  let productoNuevo=new Producto(campoCodigo.value, inputProducto.value, inputDescripcion.value, inputCantidad.value, inputURL.value );

  //console.log(productoNuevo);
  //guardar el objeto dentro del array de producto
  listaProductos.push(productoNuevo);
  console.log(listaProductos);
  //limpiar el formulario
  limpiarFormulario();
  //muestro un cartel de confirmacion de guardado
  Swal.fire(
    'Producto creado',
    'Su producto fue correctamente cargado',
    'success'
  )

  //cargar el producto en una nueva fila

  crearFila(productoNuevo);

}


function limpiarFormulario(){
  form.reset(); //el metodo reset limpia los value de los input
  campoCodigo.className='form-control';
  inputProducto.className='form-control';
  inputDescripcion.className='form-control';
  inputCantidad.className='form-control';
  inputURL.className='form-control';
  //guardar el arreglo de productos dentro del local storage
  guardarlocalStorage();
  productoExistente=false;
}

function guardarlocalStorage(){
  localStorage.setItem('arregloProductosKey',JSON.stringify(listaProductos));
}
// let prod1=new Producto(aleatorio(), 'macbookPro', 'MacbookPro A1278', 2, 'https://www.example.com');

// console.log('codigo del producto generado '+prod1.getCodigo);


function crearFila(productoNuevo){
  
  let tablaProductos=document.getElementById('tablaProductos');
  tablaProductos.innerHTML+=`<tr>
  <th scope="row">${productoNuevo.codigo}</th>
  <td>${productoNuevo.producto}</td>
  <td>${productoNuevo.descripcion}</td>
  <td>${productoNuevo.cantidad}</td>
  <td>${productoNuevo.url}</td>
  <td class="text-center"><button class="btn btn-warning" type="submit" onclick='prepararEdicionProducto("${productoNuevo.codigo}")'>Editar</button>
    <button class="btn btn-danger" type="submit">Borrar</button></td>
</tr>`
}


function cargaInicial(){
  if(listaProductos.length>0){
  listaProductos.forEach((producto) => {
        crearFila(producto);
    });
  }else{
    
  }
}
//forma de crear una funcion global para poder tomarla desde el html
window.prepararEdicionProducto= function(codigo){
  console.log('desde editar');
  console.log(codigo); 
  //buscar el producto en el arreglo
  let productoBuscado= listaProductos.find( (producto)=>{return (producto.codigo===codigo)}); 

    console.log(productoBuscado);
    
  //mostrar el producto en el formulario
    campoCodigo.value=productoBuscado.codigo;
    inputProducto.value=productoBuscado.producto;
    inputDescripcion.value=productoBuscado.descripcion;
    inputCantidad.value=productoBuscado.cantidad;
    inputURL.value=productoBuscado.url;
    //cambio el estado de productoExistente
    productoExistente=true;
}

function modificarProducto(){
    console.log('desde modificar producto');
    //encontrar la posicion del elemento que quiero modificar
    let indexObj=listaProductos.findIndex((producto)=>{
        return (producto.codigo==campoCodigo.value);
    });//si indexObj es igual a -1 es que no encontro el objeto

    console.log(indexObj);

    //modificar los valores del objeto
    listaProductos[indexObj].producto=inputProducto.value;
    listaProductos[indexObj].descripcion=inputDescripcion.value;
    listaProductos[indexObj].cantidad=inputCantidad.value;
    listaProductos[indexObj].url=inputURL.value,

    //actualizar el localStorage
    guardarlocalStorage();
    //actualizar la tabla
   borrarTabla();
    cargaInicial();
    //mostrar un cartel al usuario

    Swal.fire(
      'Producto modificado',
      'Su producto fue correctamente cargado',
      'success'
    )

    limpiarFormulario();

}


function borrarTabla(){
    let tablaProductos=document.querySelector('#tablaProductos');
    tablaProductos.innerHTML='';
}