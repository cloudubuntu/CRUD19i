//tambien llamado validaciones
//-----------------------------
//validaciones traidas de admin.js


export function campoRequerido(input) {
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
 export function validarNumeros(input) {
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
  
 export function validarURL(input){
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
  
 export function validarGeneral(inputProducto, inputDescripcion, inputCantidad, inputURL){
      //prevenir el actualizar del submit, da tiempo a ejecutar mi codigo antes de borrar todo el formulario.
      //e.preventDefault(); solo funciona con el evento submit q esta en admin.js en guardarProducto()
      //console.log('desde la fucion validar general');
      let msja=document.getElementById('msj');
      if(campoRequerido(inputProducto)&&campoRequerido(inputDescripcion)&&validarNumeros(inputCantidad)&&validarURL(inputURL)){
          console.log('todo esta ok');
          msja.className="alert alert-danger my-5 d-none"; 
          return true; 
      }else{
          console.log('los datos estan mal');
         
  
          msja.className="alert alert-danger my-5";
          return false;
      }
  
  }