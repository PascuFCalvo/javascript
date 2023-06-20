let precios = document.querySelectorAll(".precio");
let carrodelacompra = document.getElementById("carrito");
let totalproductos = document.querySelector(".totalproductos");
let totalcompra = document.querySelector(".totalcompra");
let contadordeproductos = 0;
let preciomov;
let idmov;
let descripcionmov;
let productos = document.getElementsByClassName("producto");
let descron = 0;
let componentes = document.querySelector(".componentes");
let listacomponentes = document.querySelector(".listacomponentes");
let botonterminar = document.querySelector(".botonterminar");
let arraycarro = [];

totalproductos.innerHTML = "Carro vacio";
totalcompra.innerHTML = 0 + "€";

let despmenu = componentes.addEventListener("mouseover", desplegable)
let cerrmenu = componentes.addEventListener("mouseleave", cerrardesplegable)
let termin = botonterminar.addEventListener("click", finalizarcompra)


//simular finalizar compra
function finalizarcompra(){
    let popupfin = document.querySelector('.popupcompra')
    let borrarlist = document.querySelector('.carrito ');
    let itemborrar = document.querySelector('.carrito li');
    if(borrarlist.textContent !== ""){
    borrarlist.remove(itemborrar);
    totalproductos.innerHTML = "Carro vacio";
    totalcompra.innerHTML = 0 + "€"
    popupfin.style.display = "block";
    setTimeout(cerrarpopupcompra,2000);
    }else {alert("El carro esta vacio")}
}

function cerrarpopupcompra(){
    let popupcompra = document.querySelector('.popupcompra');
    popupcompra.style.display = "none";
    location.reload();
}


//simular elementos desplegables
function desplegable(){
    let j = 0
    let cantidadelementos =  parseInt(Math.random() * 10 + 3);
    let menudesplegable = document.createElement ("ul")
    menudesplegable.className = "desplegable";
    for (let i = 0; i <  cantidadelementos; i++){
        j ++
        let elementolista = document.createElement("li");
        elementolista.className = "elementodesplegable";
        elementolista.textContent = "Elemento" +" "+ j;
        menudesplegable.appendChild(elementolista);
        
    }
    componentes.appendChild(menudesplegable);

}
function cerrardesplegable(){
    let menu = document.querySelector (".desplegable");
    let itemsmenu = document.querySelector (".desplegable li");
    menu.remove(itemsmenu);
    console.log("hola");
}
//consigo el precio caja del producto (un poco ortodoxo)
function leerprecio(producto) {
    let precioproducto = {
        precio: producto.querySelector("div p").textContent,
    }
    let stringprecio = (JSON.stringify(Object.values(precioproducto)));
    let newstringprecio = stringprecio.slice(2, -2);
    let intprecio = parseInt(newstringprecio);
    return intprecio;

}
//consigo la descripcion caja del producto
function leerdescripcion(producto) {
    let descripcionproducto = {
        descripcion: producto.querySelector("div .descripcion").textContent,
    }
    let stringdescripcion = (JSON.stringify(Object.values(descripcionproducto)));
    let newstringdescripcion = stringdescripcion.slice(2, -2);
    return newstringdescripcion;
}

//estas 4 funciones son magia de internet (entre youtube/stackoverflow/documentacion)
function allowDrop(ev) {
    ev.preventDefault
}
//en el drag guardo el precio y la descripcion
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    let selectproducto = ev.target;
    preciomov = leerprecio(selectproducto);
    descripcionmov = leerdescripcion(selectproducto);

}

function onDragOver(ev) {
    ev.preventDefault();
}

//en el drop es donde se activan casi todas las funciones
function onDrop(ev) {
    let id = ev.dataTransfer.getData("text");
    let productos = document.getElementById(id);
    let carrito = ev.target;
    carrito.appendChild(productos);
    productos.style.display = "none";
    //ev.dataTransfer.clearData();
    contadordeproductos++;
    contadorproductos();
    sumarprecio();
    anadirdescripcioncarrito()
    mostrarpopup()
    setTimeout(cerrarpopup,1000);

}

//cambia la cantidad de productos del carrito
function contadorproductos() {
    if (contadordeproductos == 1) {
        totalproductos.innerHTML = contadordeproductos + " producto"
    } else if (contadordeproductos > 1) {
        totalproductos.innerHTML = contadordeproductos + " productos"
    }
}

//cambia el precio total del carrito
function sumarprecio() {
    totalcompra.innerHTML = preciomov + parseInt(totalcompra.innerHTML) + "€"

}

//añade el resumen del producto al carrito
function anadirdescripcioncarrito() {
    let parrafo = document.createElement("div");
    parrafo.setAttribute("id", descripcionmov )
    let botoncerrar = crearbotoncerrar();
    parrafo.style.height = "auto";
    parrafo.style.marginBottom = "8px";
    parrafo.innerHTML = descripcionmov + " - " + preciomov + "€";
    parrafo.append(botoncerrar);
    carrodelacompra.append(parrafo);
    return parrafo
}
//creo el boton para poder ir eliminando el producto añadido
function crearbotoncerrar() {

    //agrego la constante para crear la variable local dentro de la funcion
    const idcarro = descripcionmov;
    //creo el bton
    let botoncerrar = document.createElement("button");
    //cada botoncerrar tendra un listener que se activa en el click referente a su id
    botoncerrar.addEventListener("click", function(){
        quitardelcarrito(idcarro)
    });

    //seteo el atributo id =  al de idcarro
    botoncerrar.setAttribute ("id", idcarro)
    botoncerrar.style.height = "18px"
    botoncerrar.style.width = "18px"
    botoncerrar.style.backgroundColor = "orangered"
    botoncerrar.style.borderRadius = "50%"
    botoncerrar.style.color = "white"
    botoncerrar.style.marginLeft = "8px"
    return botoncerrar;
}
//le paso el paramtro id para que apunte a ese elemento concreto
function quitardelcarrito(id) {

    eliminarproductoresumen(id)
    devolver(id)
    reducircontador()

}

function mostrarpopup(){
    let arrastraqui = document.querySelector('.zonaarrastre p')
    let popup = document.querySelector('.popup');
    popup.style.display = "block";
    arrastraqui.style.display = "none";
}
function cerrarpopup(){
    let arrastraqui = document.querySelector('.zonaarrastre p')
    let popup = document.querySelector('.popup');
    popup.style.display = "none";
    arrastraqui.style.display = "block";
}


function eliminarproductoresumen(id) {
    //seleccionar elemento lista y elemento a borrar
    let borrarlist = document.querySelector('.carrito ');
    //ahora ya puedo pasarle la id del elemento a borrar
    let itemborrar = document.getElementById(id);
    console.log(itemborrar)
    
   
    //seleccionar elemento para obtener el preio
    let precioborrar = itemborrar.textContent;
    let arrayprecioborrar = precioborrar.split(" - ");
    let intborrar = parseInt(arrayprecioborrar[1]);


    borrarlist.removeChild(itemborrar);
    totalcompra.innerHTML = parseInt(totalcompra.innerHTML) - intborrar + "€"
    
}
function reducircontador() {
    contadordeproductos--;
    if (contadordeproductos == 1) {
        totalproductos.innerHTML = contadordeproductos + " producto"
    } else if (contadordeproductos > 1) {
        totalproductos.innerHTML = contadordeproductos + " productos"
    } else if (contadordeproductos == 0) {
        totalproductos.innerHTML = "Carro vacio"
    }

}

function devolver() { 
    let volvermostrador = document.querySelector('.mostrador')
    let volverproducto = document.querySelector('.zonaarrastre .producto')
    let volverimagen = document.querySelector('.zonaarrastre .producto img')
    let volverdesc = document.querySelector('.zonaarrastre .producto .descripcion')
    volvermostrador.prepend(volverproducto);
    volverimagen.style.marginLeft = "8px";
    volverdesc.style.marginLeft = "8px";
    volverproducto.style.display = "block";
}

