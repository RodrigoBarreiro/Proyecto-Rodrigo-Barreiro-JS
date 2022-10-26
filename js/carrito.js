class Carrito{
    constructor(cervezasEnStock){
        this.cervezasEnStock = cervezasEnStock;
        /*
        * Si tengo un carrito ya guardado previamente lo asigno a this.carrito sino inicializo uno nuevo
        */
        if(this.obtenerCarrito()){
            this.carrito =  this.obtenerCarrito();
        }else {
            this.carrito = this.inicializar();
        } 
        console.log("[Carrito] Carrito inicializado con ", JSON.stringify(this.carrito));
    }

    /*
    * El resultado de esta funcion es:
    * carrito = [
    *    1 = [new Producto(), new Producto()],
    *    2 = [],
    *    3 = [new Producto(), new Producto(), new Producto()]
    *  ];
    * Esto es dado que el carrito precisa estar ordenado por el id de la cerveza para ir contabilizando por tipo de cerveza
    */
    inicializar(){
        
        this.cervezasEnStock.forEach (cerveza => { 
            this.carrito[cerveza.id] = [];
        });
    }

    /*
    * Dado un id de una cerveza, lo busca en el stock de cerveza, agrega al carrito y lo guarda
    */
    agregarACarrito(cervezaId){
        console.log("[Carrito] Agregando el id ", cervezaId, "en el carrito", JSON.stringify(this.carrito));
        const cervezaComprada = this.cervezasEnStock.find ( cerveza => {
            return cerveza.id === parseFloat(cervezaId);
        });
        const carritoGuardado = this.carrito;
        const carritoProdructoMismoId = carritoGuardado [cervezaId] ;
        carritoProdructoMismoId.push(cervezaComprada);
        this.guardarCarrito();
    }

    /*
    * Obtiene la catidad de todos los productos que se encuentran en el carrito
    */
    obtenerCervezasCompradas(){
        let cervezasCompradas = 0;
        for( let cervezasPorId of this.carrito) {
            if(Array.isArray(cervezasPorId)){
                cervezasCompradas = cervezasCompradas + cervezasPorId.length;
            }
        }    
        return cervezasCompradas;
    }

    /*
    * Obtiene el monto total de todos los productos que se encuentran en el carrito
    */
    obtenerMontoTotalCervezasCompradas(){
        let montoTotalCervezas = 0;
        for( let cervezasPorId of this.carrito) {
            if(Array.isArray(cervezasPorId)){
                for( let cerveza of cervezasPorId) {
                    montoTotalCervezas = montoTotalCervezas + cerveza.precio;
                }
            }
        }    
        return montoTotalCervezas;
    }

    /*
    * Obtiene el carrito del localstorage
    */
    obtenerCarrito(){
        return JSON.parse(localStorage.getItem ("carrito"));
    }

    /*
    * Guarda el carrito actual en el local storage
    */
    guardarCarrito(){
        localStorage.setItem ("carrito", JSON.stringify(this.carrito));
    }
}