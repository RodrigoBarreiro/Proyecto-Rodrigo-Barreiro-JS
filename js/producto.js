class Producto{
    constructor(id, nombre, precio,envase, marca, stock , descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.envase = envase;
        this.marca = marca;
        this.stock =  stock;
        this.descripcion = descripcion;
    }
    vender(cantidad){
        if ( this.stock - cantidad < 0){
            console.log ("No hay suficientes productos para la cantidad solicitada");
        }else{
            this.stock = this.stock - cantidad;
        }
    }
}