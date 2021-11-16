class Producto{

    constructor(codigo, producto, descripcion,cantidad, url ){
        this.codigo=codigo;
        this.producto=producto;
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.url=url;
    }
    

    set setCodigo(codigo){
        this.codigo=codigo;
    }

    set setProducto(producto){
        this.producto=producto;
    }

    set setDescripcion(descripcion){
        this.descripcion=descripcion;
    }

    set setCantidad(cantidad){
        this.cantidad=cantidad;
    }

    set setUrl(url){
        this.url=url;
    }

    get getCodigo(){
        return this.codigo;
    }    
    
    get getProducto(){
        return this.producto;
    }

    get getDescripcion(){
        return this.descripcion;
    }

    get getCantidad(){
        return this.cantidad;
    }

    get getUrl(){
        return this.url;
    }

}