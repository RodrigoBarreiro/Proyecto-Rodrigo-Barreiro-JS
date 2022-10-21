let fetchResult = null;
// SE UTILIA COMANDOS npm install -g json-server Y json-server --watch ./js/data.json PARA LEVANTAR SERVIDOR DE JSON
fetch("http://localhost:3000/productos")
    .then((response) => response.json())
    .then((data) => {
    fetchResult = data;
    init();
    });


//SE AGREGA SWEET ALERT CON SOLICITUD DE EDAD PARA INGRESAR EN LA PAGINA PARA VENTA DE ALCOHOL
(async function pedirEdad (){
    const {value: edad } = await Swal.fire ({
        title: 'Bienvenidos al Tarro Frío',
        backdrop: true,
        text:'Que edad tíenes?',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#DEB887',
        footer: '<span> <b> Esta inforamcion es importante </b> </span>',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        input:'range',
        inputAttributes: {
        min: 8,
        max: 120,
        step: 1
        },
        inputValue: 25,
    });

    if (edad < 18) {
        await Swal.fire ({
            icon:'error',
            title: 'Prohibido ingresar, el consumo de bebidas alcoholicas es para mayores de 18 años.',
            confirmButtonText: 'Aceptar',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        })
        pedirEdad();
    }else {
        Swal.fire ({
            icon:'success',
            title: 'Puede ingresar.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#DEB887',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        })
    }
})()

let cervezas = [];
let carrito = [];
let cervezasCompradas = 0;

function init (){
    cervezas = fetchResult.map (cerveza => new Producto ( cerveza.id, cerveza.nombre, cerveza.precio, cerveza.envase, cerveza.marca, cerveza.stock, cerveza.descpricion ));
    console.log (cervezas);
    //SE INCORPORA DOM CON INFORMACION NECESARIA PARA PAGINA WEB SOBRE LOS PRODUCTOS y SE INTERACTUA CON HTML.
    cervezas.forEach (cerveza => { 
        document.getElementById ("cervaza-titulo-" + cerveza.id).innerText = cerveza.nombre;
        document.getElementById ("cerveza-" + cerveza.id ).innerText = cerveza.descripcion;
        document.getElementById ("precio-" + cerveza.id ).innerText = " Precio: "+ cerveza.precio;
    })
    
    // SE INICIALIZA CARRITO.  
    inicializarCarrito ();

    localStorage.setItem  ("carrito", localStorage.getItem ("carrito") || JSON.stringify(carrito));
    dibujarCarrito(); 
    
    // EVENTO A COMPRAR UN PRODUCTO.
    document.getElementById ("cervezasCompradas").innerText= cervezasCompradas;
    const botones = document.querySelectorAll (".comprarBtn");
    botones.forEach (boton => {
        boton.addEventListener ( "click", (event) => {
            cervezasCompradas = cervezasCompradas + 1;
            const id = event.currentTarget.dataset.id;
            const productoComprado = cervezas.find ( cerveza => {
                return cerveza.id === parseFloat(id);
            })
            const carritoGuardado = JSON.parse(localStorage.getItem ("carrito"));
            const carritoProdructoMismoId = carritoGuardado [id] ;
            carritoProdructoMismoId.push(productoComprado);
            localStorage.setItem ("carrito", JSON.stringify(carritoGuardado));
            dibujarCarrito();
        })
    })
}

function dibujarCarrito () {
    document.getElementById ("cervezasCompradas").innerText= cervezasCompradas;
    const menu = document.getElementById ("carrito");
    let liHtml = "";
    const carritoGuardado = JSON.parse(localStorage.getItem ("carrito"));
    console.log(carritoGuardado);
    carritoGuardado.forEach ((carritoProducto, id) => { 
        if (carritoProducto && carritoProducto.length > 0) {
            liHtml = liHtml + "<li> <img src=\"./imagenes/"  + id + ".png\" width =\"50px\" ></img>" + carritoProducto.length + " X " + carritoProducto [0].nombre + " " + carritoProducto[0].precio + "</li>";
        }
    }) 
    menu.innerHTML = liHtml;
}

function inicializarCarrito (){
    cervezas.forEach (cerveza => { 
        carrito[cerveza.id] = [];
    })
    cervezasCompradas = 0;
}

// BOTON DE CANCELAR COMPRA
document.getElementById ("borrarCarrito").addEventListener ( "click", (event) => {
    inicializarCarrito ();
    localStorage.setItem ("carrito", JSON.stringify(carrito));
    dibujarCarrito();
})




// BOTON COMPRAR PARA FINALIZAR COMPRA 
// SUMA TOTAL DE LA COMPRA 




