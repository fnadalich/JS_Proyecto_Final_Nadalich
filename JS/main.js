//Se crean todos los productos como array deobjetos
//El nombre y id de las categorías son para poder usarlos en los botones de categorías

const productos = [
    //Catergoría reeles
    {
        id: "reel-01",
        titulo: "REEL FRONTAL SE 200 JUNIOR",
        imagen: "./images/Reeles/reel 1.webp",
        categoria: {
            nombre: "Reeles",
            id: "reeles"
        },
        precio: 7209
    },
    {
        id: "reel-02",
        titulo: "REEL RED FISH CB640 6 BB",
        imagen: "./images/Reeles/reel 2.webp",
        categoria: {
            nombre: "Reeles",
            id: "reeles"
        },
        precio: 9650
    },
    {
        id: "reel-03",
        titulo: "REEL FRONTAL CUSTOM SL500",
        imagen: "./images/Reeles/reel 3.webp",
        categoria: {
            nombre: "Reeles",
            id: "reeles"
        },
        precio: 9920
    },
    {
        id: "reel-04",
        titulo: "REEL FRONTAL X-FISH WHITE SERPENT",
        imagen: "./images/Reeles/reel 4.webp",
        categoria: {
            nombre: "Reeles",
            id: "reeles"
        },
        precio: 9920
    },
    {
        id: "reel-05",
        titulo: "REEL FRONTAL CASTER FURY 1003",
        imagen: "./images/Reeles/reel 5.webp",
        categoria: {
            nombre: "Reeles",
            id: "reeles"
        },
        precio: 14320
    },
    //Catergoría cañas
    {
        id: "caña-01",
        titulo: "CAÑA VENTURA 1,80 MTS 2 TR X-FISH",
        imagen: "./images/Cañas/caña 1.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 20440
    },
    {
        id: "caña-02",
        titulo: "CAÑA X-FISH BRISA 1.98 MTS 1 TR",
        imagen: "./images/Cañas/caña 2.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 37880
    },
    {
        id: "caña-03",
        titulo: "COMBO SHIMANO FX PEJERREY +FX C3000FC",
        imagen: "./images/Cañas/caña 3.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 92140
    },
    {
        id: "caña-04",
        titulo: "CAÑA FLOUNDER KAY 195 M/CORCHO",
        imagen: "./images/Cañas/caña 4.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 33200
    },
    {
        id: "caña-05",
        titulo: "CAÑA FISHING L. LAGUNA 20-40 LBS",
        imagen: "./images/Cañas/caña 5.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 25560
    },
    {
        id: "caña-06",
        titulo: "CAÑA FISHINGLINE EVOLUTION 1.83",
        imagen: "./images/Cañas/caña 6.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 47460
    },
    {
        id: "caña-07",
        titulo: "CAÑA TELESCOPICA FLOUNDER LIMAY 360",
        imagen: "./images/Cañas/caña 7.webp",
        categoria: {
            nombre: "Cañas",
            id: "cañas"
        },
        precio: 45530
    },
    //Catergoría señuelos
    {
        id: "señuelo-01",
        titulo: "COMBO X 5 SEÑUELOS CUCU",
        imagen: "./images/Señuelos/señuelo 1.webp",
        categoria: {
            nombre: "Señuelos",
            id: "señuelos"
        },
        precio: 27850
    },
    {
        id: "señuelo-02",
        titulo: "SEÑUELO CUCU BANANA",
        imagen: "./images/Señuelos/señuelo 2.webp",
        categoria: {
            nombre: "Señuelos",
            id: "señuelos"
        },
        precio: 5570
    },
    {
        id: "señuelo-03",
        titulo: "SEÑUELO DON KB BAD JUNIOR",
        imagen: "./images/Señuelos/señuelo 3.webp",
        categoria: {
            nombre: "Señuelos",
            id: "señuelos"
        },
        precio: 3350
    },
    {
        id: "señuelo-04",
        titulo: "COMBO x 5 Señuelos SKULL PROFUNDIDAD",
        imagen: "./images/Señuelos/señuelo 4.webp",
        categoria: {
            nombre: "Señuelos",
            id: "señuelos"
        },
        precio: 28880
    },
    {
        id: "señuelo-05",
        titulo: "SEÑUELO CUCU BANANA MEDIA AGUA",
        imagen: "./images/Señuelos/señuelo 5.webp",
        categoria: {
            nombre: "Señuelos",
            id: "señuelos"
        },
        precio: 5570
    }
];

// let productos = [];

// Coloco todas las cosas que iré llamando del DOM

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


// botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
//     aside.classList.remove("aside-visible");
// }))


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = ""; //Es para que limpie la carga de productos antes de mostras los específicos por categoría

//Recorro mi array, voy creando mis div's e insertando en mi HTML
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

//Valida si hay items en el LS o arranca de un carrito vavío
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito ();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}