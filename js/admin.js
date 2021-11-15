import { campoRequerido, validarNumeros, validarURL, validarGeneral } from "./hellpers.js";




//traigo el elemento que necesito del html
 export let campoCodigo = document.querySelector("#codigo");
let inputProducto = document.querySelector("#producto");
let inputDescripcion = document.querySelector("#descripcion");
let inputCantidad = document.querySelector("#cantidad");
let inputURL = document.querySelector("#url");
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
  //crear un producto

  console.log('aqui tengo que crear un producto');
}