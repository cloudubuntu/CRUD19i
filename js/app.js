

let listaProductos=JSON.parse(localStorage.getItem('arregloProductosKey')) || [];

listaProductos.forEach((producto) => {
    crearColumnas(producto);
});

function crearColumnas(producto){
    let row=document.querySelector('#row');
    row.innerHTML+=`<div
    class="card col-lg-3 col-md-4 col-sm-12 py-2 m-3"
    style="width: 18rem"
  >
    <img
      src="${producto.url}"
      class="card-img-top"
      alt="${producto.producto}"
      width=100%
    />
    <div class="card-body">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text">
        ${producto.descripcion}
      </p>
      <p class="card-text">COD. (${producto.codigo
    })</p>
      
    </div>
  </div>`
}