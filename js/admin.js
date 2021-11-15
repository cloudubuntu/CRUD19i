function campoRequerido(input) {
  //console.log('Desde la funcion campo requerido')
  if (input.value.trim().length > 0) {
    //la funcion trim elimina un espacio vacio solanente al inicio
    //console.log('aqui esta todo bien');
    input.className = "form-control is-valid";
    return true;
  } else {
    //console.log('aqui muestro un error');
    input.className = "form-control is-invalid";
    return false;
  }
}

//expresiones regulares
function validarNumeros(input) {
  //primero se crea una expresion regular
  let regExp = /^[0-9]{1,3}$/; //de 0 a 9 y minimo 1 digito y como maximo 3
  //usar el metodo test() de javascript para usar las expresiones regulares y retorna true o false
  if (regExp.test(input.value)) {
    //cumple con la expresion regular
    input.className = "form-control is-valid";
    return true;
  } else {
    //no cumple con la expresion regular
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarURL(input){
    let regExpEmail=/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(regExpEmail.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}
//validacion general en el form

function validarGeneral(e){
    //prevenir el actualizar del submit, da tiempo a ejecutar mi codigo antes de borrar todo el formulario.
    e.preventDefault();
    console.log('desde la fucion validar general');
    let msja=document.getElementById('msj');
    if(campoRequerido(campoCodigo)&&campoRequerido(inputProducto)&&campoRequerido(inputDescripcion)&&validarNumeros(inputCantidad)&&validarURL(inputURL)){
        console.log('todo esta ok');
        msja.className="alert alert-danger my-5 d-none";  
    }else{
        console.log('los datos estan mal');
       

        msja.className="alert alert-secondary my-5";
    }

}

//traigo el elemento que necesito del html
let campoCodigo = document.querySelector("#codigo");
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

form.addEventListener('submit', validarGeneral);
