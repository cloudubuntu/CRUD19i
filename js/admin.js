function campoRequerido(){
    console.log('Desde la funcion campo requerido')
    if(campoCodigo.value.length > 0){
        console.log('aqui esta todo bien');
    }else{
        console.log('aqui muestro un error');
    }
}

//traigo el elemento que necesito del html
let campoCodigo = document.querySelector('#codigo');

//asociar un evento a un elemento del html
campoCodigo.addEventListener('blur', campoRequerido);
