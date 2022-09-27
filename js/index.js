// VERIFICACION DE EDAD PARA HTML 
/* let edad = parseInt (prompt ("Ingrese su edad"));

while ( edad < 18) {
    alert ("Prohibido ingresar, el consumo de bebidas alcholicas es para mayores de 18 años");
    edad = parseInt (prompt ("Ingrese su edad"));
}
    alert ("Puede ingresar.");
 */

//INFO PRODUCTOS CREADOS EN BASE A LA FUNCION CONSTRUCTORA QUE SE ENCUENTRA EN PRODUCTO. JS.
const cerveza1 = new Producto (1 ,"Witbier", "$300", "1 lts", "Oceanica", 10 , "Dulzor placentero (a menudo con notas a miel y/o vainilla), con un frutado cítrico a naranjas. Refrescante con acabado seco y a veces ácido. Puede tener un leve sabor a trigo. Opcionalmente puede tener una muy ligera acidez láctica. Los sabores a hierbas y especias, los cuales pueden incluir coriandro y otros, son comunes y deben ser sutiles y balanceados y no deben superponerse con los otros sabores. Sabor terroso/especiado a lúpulo de nulo a bajo, y si se percibe, no se interpone con las especias. Amargor de bajo a medio bajo (como en una Hefeweizen), y no interfiere con los refrescantes sabores frutados/especiados ni persiste en el acabado. No debe estar presente amargor de la cáscara de naranja. Sabores a vegetal, apio, jamón o jabón son inapropiados. Sin diacetilo." );
const cerveza2 = new Producto (2, "Pale Ale", "$450","1 lts",  "Oceanica", 20,"Sabor a lúpulo usualmente de moderado a alto, comunmente presentando un carácter cítrico (aunque se pueden utilizar algunas otras variedades de lúpulo). Un límpido sabor a malta (de bajo a moderadamente alto) balancea al lúpulo, pudiendo opcionalmente presentar carácteres secundarios de la malta (a pan, a tostado o a bizcocho). El balance es habitualmente hacia el lúpulo y el amargor, aunque la presencia de la malta puede ser sustancial. Los sabores a caramelo están generalmente restringidos o ausentes. Esteres frutados de nulo a moderado. Amargor de moderado a alto, con un acabado moderadamente seco. El sabor a lúpulo y el amargor generalmente perduran en el acabado. Sin diacetilo. El dry hopping (si se utiliza) puede aportar notas a hierbas, aunque no debe ser excesivo." );
const cerveza3 = new Producto (3, "Wite IPA", "$400", "1 lts", "Oceanica", 40, "Sabor ligero a malta, quizá con reminiscencias a pan. Los Ésteres afrutados son entre moderados y altos, con sabores cítricos que recuerdan a la naranja o al pomelo, o a frutas como el albaricoque. A veces tambiÉn están presentes los sabores a banana. El sabor a lúpulo es entre medio-bajo y medio-alto, destacando notas cítricas y afrutadas. El carácter especiado y a clavo originado por la levadura belga tambiÉn podría hacer acto de presencia. El sabor a cilantro y a piel de naranja son frecuentes. El amargor es alto, por lo que el final es refrescante y seco. Ésteres moderadamente afrutados (banana, cítricos, quizá a albaricoque). Puede tener un aroma entre ligero y moderado a especias, con reminiscencias a cilantro o pimienta, originadas por la adición de especias o la levadura belga." );
const cerveza4 = new Producto (4 ,"Dry Stout", "$300","1 lts", "Oceanica", 12, "Sabor moderadamente torrado, opcionalmente con una leve a moderada acidez, y un amargor de medio a alto. Acabado seco, con sabor a café, debido a los granos torrados. Puede tener un carácter a chocolate amargo en el paladar, perdurando en el acabado. Entre los factores que balancean la cerveza pueden incluirse la cremosidad, el carácter frutal de nulo a medio-bajo, y el sabor a lúpulo de nulo a medio. Sin diacetilo. Son prominentes los aromas a café y a torrado; aunque puede tener ligeras notas a chocolate, cacao y/o otros aromas secundarios de los granos. Esteres frutados de nulo a medio-bajo. Sin diacetilo. Aroma a lúpulo de nulo a bajo. De cuerpo medio-liviano a medio-pleno, con un carácter cremoso. Carbonatación de baja a moderada. ");
const cerveza5 = new Producto (5, "K7 Doble IPA","350", "1 lts", "Barbarian", 30, " Es una versión más lupulizada, más alcoholizada y más contundente que sus familiares English y American. De esta forma tenemos que el aroma y el sabor son claramente a lúpulo con su amplia variedad de toques resinosos, frutales, herbales, etc. La mayoría de versiones tienen Dry Hopping y en cuanto al amargor son muy amargas, muchísimo, llegando a ser absurdamente amargas en algunos casos, además de persistente en la boca. Aunque como canon, el grado de amargor está establecido entre 60 y 100 IBUs pero hay ejemplos en el que se llega a las unidades de millar. ¡Atrévete a probarlas!" );
const cerveza6 = new Producto (6, "174 IPA", "$380", "1 lts", "Barbarian", 20, "Sabor a lúpulo de medio a alto, y debería reflejar el carácter de los lúpulos americanos (cítrico, floral, resinoso, frutado o a pino). Amargor de medio-alto a muy alto, aunque la malta debe balancear el fuerte carácter del lúpulo. Sabor a malta de bajo a medio, límpido, aunque son aceptables bajos niveles de caramelo o de tostado. Sin diacetilo. Es aceptable un bajo carácter frutal, aunque no es requerido. El amargor puede perdurar en el retrogusto pero no debe ser áspero. Acabado de medio seco a seco. En las versiones más fuertes puede percibirse algún límpido sabor a alcohol. Sabores a roble son inapropiados en este estilo." );
const cerveza7 = new Producto (7, "Garaje Brown Ale", "$380", "1 lts", "Barbarian", 12, "Sabor a malta de medio a alto (a menudo con sabores a caramelo, tostado y/o chocolate), con un amargor de medio a medio-alto. El acabado medianamente seco provee un retrogusto con presencia tanto de la malta como del lúpulo. Sabor a lúpulo de suave a moderado, y puede tener opcionalmente un carácter cítrico. Esteres futados de muy bajo a moderado. Diacetilo de nulo a moderadamente bajo.De cuerpo medio a medio-pleno. Las versiones más amargas pueden tener una impresión seca y resinosa. Carbonatación de moderada a moderadamente alta. Las versiones más fuertes pueden tener una ligera tibieza por alcohol en el acabado. " );
const cerveza8 = new Producto (8, "Lima Pale Ale", "$450", "1 lts", "Barbarian", 15, "Cerveza de color dorado, con intenso sabor y aroma cítrico-frutado, como a maracuyá y mango debido a la adición de lúpulos especiales durante la maduración. El acabado medianamente seco provee un retrogusto con presencia tanto de la malta como del lúpulo. Sabor a lúpulo de suave a moderado, y puede tener opcionalmente un carácter cítrico. Esteres futados de muy bajo a moderado, las cervezas citricas son provenientes de Blegica donde fueron los incursores de esta tan especial combinacion, El balance es habitualmente hacia el lúpulo y el amargor, aunque la presencia de la malta puede ser sustancial. Los sabores a caramelo están generalmente restringidos o ausentes" );

// SE INCORPORA ARREGLO CON LOS PRODUCTOS QUE SE ENCUENTRAN A LA VENTA EN LA PAGINA WEB.
const cervezas = [];
cervezas.push (cerveza1);
cervezas.push (cerveza2);
cervezas.push (cerveza3);
cervezas.push (cerveza4);
cervezas.push (cerveza5);
cervezas.push (cerveza6);
cervezas.push (cerveza7);
cervezas.push (cerveza8);

console.log(cervezas);

//SE INCORPORA DOM CON INFORMACION NECESARIA PARA PAGINA WEB SOBRE LOS PRODUCTOS y SE INTERACTUA CON HTML.
cervezas.forEach (cerveza => { 
    document.getElementById ("cervaza-titulo-" + cerveza.id).innerText = cerveza.nombre;
    document.getElementById ("cerveza-" + cerveza.id ).innerText = cerveza.descripcion;
    document.getElementById ("precio-" + cerveza.id ).innerText = " Precio: "+ cerveza.precio;
})


// SE INICIALIZA CARRITO.  
let cervezasCompradas = 0;
const carrito = [];
cervezas.forEach (cerveza => { 
    carrito[cerveza.id] = [];
})
localStorage.setItem  ("carrito", localStorage.getItem ("carrito") || JSON.stringify(carrito));
dibujarCarrito(); 
// EVENTO A COMPRAR UN PRODUCTO.
document.getElementById ("cervezasCompradas").innerText= cervezasCompradas;
const botones = document.querySelectorAll (".comprarBtn");
botones.forEach (boton => {
    boton.addEventListener ( "click", (event) => {
        cervezasCompradas = cervezasCompradas + 1;
        document.getElementById ("cervezasCompradas").innerText= cervezasCompradas;
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

function dibujarCarrito () {
    const menu = document.getElementById ("carrito");
    let liHtml = "";
    const carritoGuardado = JSON.parse(localStorage.getItem ("carrito"));
    console.log(carritoGuardado);
    carritoGuardado.forEach (carritoProducto => { 
        if (carritoProducto && carritoProducto.length > 0) {
            liHtml = liHtml + "<li>" + carritoProducto.length + " X " + carritoProducto [0].nombre + " " + carritoProducto[0].precio + "</li>";
        }
    })
    // QUEDA PENDIENTE RECORRER DE NUEVO CARRITO GUARDADO E IR SUMANDO TODOS LOS TOTALES Y SUMAR CANTIDAD DE CERVEZA. 
    menu.innerHTML = liHtml;
}

