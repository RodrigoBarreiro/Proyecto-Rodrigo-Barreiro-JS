let fetchResult = null;
/*
* SE UTILIA COMANDOS npm install && npm run start-server
*/
fetch("http://localhost:3000/productos")
    .then((response) => response.json())
    .then((data) => {
        fetchResult = data;
        init();
    });

/*
*SE AGREGA SWEET ALERT CON SOLICITUD DE EDAD PARA INGRESAR EN LA PAGINA PARA VENTA DE ALCOHOL
*/
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
let carrito = null;
let cervezasCompradas = 0;

function init (){
    cervezas = fetchResult.map (cerveza => new Producto ( cerveza.id, cerveza.nombre, cerveza.precio, cerveza.envase, cerveza.marca, cerveza.stock, cerveza.descpricion ));
    carrito = new Carrito(cervezas);
    /*
    *SE INCORPORA DOM CON INFORMACION NECESARIA PARA PAGINA WEB SOBRE LOS PRODUCTOS y SE INTERACTUA CON HTML.
    */
    cervezas.forEach (cerveza => { 
        document.getElementById ("cervaza-titulo-" + cerveza.id).innerText = cerveza.nombre;
        document.getElementById ("cerveza-" + cerveza.id ).innerText = cerveza.descripcion;
        document.getElementById ("precio-" + cerveza.id ).innerText = " Precio: "+ cerveza.precio;
    })
    
    dibujarCarrito(); 
    /*
    *EVENTO A COMPRAR UN PRODUCTO.
    */
    document.getElementById ("cervezasCompradas").innerText= carrito.obtenerCervezasCompradas();
    const botones = document.querySelectorAll (".comprarBtn");
    botones.forEach (boton => {
        boton.addEventListener ( "click", (event) => {
            cervezasCompradas = cervezasCompradas + 1;
            const id = event.currentTarget.dataset.id;
            carrito.agregarACarrito(id);
            dibujarCarrito();
        })
    })
}

function dibujarCarrito () {
    document.getElementById ("cervezasCompradas").innerText= carrito.obtenerCervezasCompradas();;
    const menu = document.getElementById ("carrito");
    let liHtml = "";
    const carritoGuardado = carrito.obtenerCarrito();
    carritoGuardado.forEach ((carritoProducto, id) => { 
        if (carritoProducto && carritoProducto.length > 0) {
            liHtml = liHtml + "<li> <img src=\"./imagenes/"  + id + ".png\" width =\"50px\" ></img>" + carritoProducto.length + " X " + carritoProducto [0].nombre + " $" + carritoProducto[0].precio + "</li>";
        }
    })
    liHtml = liHtml + "<li> Total: $"+ carrito.obtenerMontoTotalCervezasCompradas() +" </li>";
    menu.innerHTML = liHtml;
}

document.getElementById ("borrarCarrito").addEventListener ( "click", (event) => {
    carrito.inicializar();
    carrito.guardarCarrito();
    dibujarCarrito();
})

document.getElementById ("confirmarCarrito").addEventListener ( "click", async (event) => {
    const {value: edad } = await Swal.fire ({
        title: 'Carrito comprado con éxito',
        backdrop: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#DEB887',
        footer: `<span> <b> Usted compró ${carrito.obtenerCervezasCompradas()} cervezas por $${carrito.obtenerMontoTotalCervezasCompradas()}  </b> </span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    });
    carrito.inicializar();
    carrito.guardarCarrito();
    dibujarCarrito();
});







