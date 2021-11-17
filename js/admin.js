import { campoRequerido, validarNumeros, validarURL, validarGeneral } from "./hellpers.js";

import{Producto} from "./productoClass.js";

import { aleatorio } from "./generadorAlet.js";

//traigo el elemento que necesito del html
 export let campoCodigo = document.querySelector("#codigo");
let inputProducto = document.querySelector("#producto");
let inputDescripcion = document.querySelector("#descripcion");
let inputCantidad = document.querySelector("#cantidad");
let inputURL = document.querySelector("#url");

//lista para guardar los objetos

let listaProductos=[];

//asociar un evento a un elemento del html
campoCodigo.addEventListener("blur", () => {
  campoRequerido(campoCodigo);
});

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

let form=document.getElementById('idForm');


console.log(form);

form.addEventListener('submit', guardaProducto);


function guardaProducto(e){
  e.preventDefault();
  //verificar validaciones
  if(validarGeneral(campoCodigo, inputProducto, inputDescripcion, inputCantidad, inputURL)){
    //crear un producto
    crearProducto();
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
  
}


function limpiarFormulario(){
  form.reset(); //el metodo reset limpia los value de los input
  campoCodigo.className='form-control';
  inputProducto.className='form-control';
  inputDescripcion.className='form-control';
  inputCantidad.className='form-control';
  inputURL.className='form-control';
}

// let prod1=new Producto(aleatorio(), 'macbookPro', 'MacbookPro A1278', 2, 'https://www.example.com');

// console.log('codigo del producto generado '+prod1.getCodigo);