let boton = document.querySelectorAll(".numero");
let botonop = document.querySelectorAll(".operacion");
let botonigual = document.querySelector("#igual");

let pantalla1 = document.querySelector(".pantalla1");
let pantallaoperacion = document.querySelector(".pantallaoperar");
let valor1;
let haypunto = 0;
let operacion;


let botonnumeroclick = function () {
    digitopulsado = this.innerText;
    anadirvalor();
}
boton.forEach(boton => {
    boton.addEventListener("click", botonnumeroclick);
});

let botonoperacionclick = function () {
    operacionpulsada = this.innerText;
    calcularoperacion();
}
botonop.forEach(botonop => { botonop.addEventListener("click", botonoperacionclick) })

let botonigualpulsado = botonigual.addEventListener("click", igual)



function calcularoperacion() {
    if (operacionpulsada == "/" || operacionpulsada == "+" || operacionpulsada == "-" ||
        operacionpulsada == "x") {
        pantallaoperacion.innerText = operacionpulsada;
        valor1 = Number(pantalla1.innerText);
        pantalla1.innerText = "";
        operacion = operacionpulsada;
        haypunto = 0;
        
    }

}

function igual() {
    let valor2 = Number(pantalla1.innerText);

    if (operacion == "+") {
        resultado = valor1 + valor2;
    } else if (operacion == "-") {
        resultado = valor1 - valor2;
    } else if (operacion == "x") {
        resultado = valor1 * valor2;
    }
    else if (operacion == "/") {
        resultado = valor1 / valor2;
    }

    presentaresultados()
}

function presentaresultados(){
   
    pantalla1.innerText = resultado;

    pantallaoperacion.innerText = "";

}


function anadirvalor() {

    if (digitopulsado == "0" || digitopulsado == "1" || digitopulsado == "2" ||
        digitopulsado == "3" || digitopulsado == "4" || digitopulsado == "5" ||
        digitopulsado == "6" || digitopulsado == "7" || digitopulsado == "8" ||
        digitopulsado == "9") {

        pantalla1.innerText += digitopulsado;

    } else if (digitopulsado == ".") {

        if (haypunto == 0) {
            pantalla2.innerText += digitopulsado;
            haypunto = 1;
        }

    } else if (digitopulsado == "c") {
        let newpantalla = pantalla1.innerText;
        newpantalla = newpantalla.substring(0, newpantalla.length - 1);
        pantalla1.innerText = newpantalla;
    } else if (digitopulsado == "del") {
        borrarpantalla1();
    }

}


function borrarpantalla1(){
    pantalla1.innerText = "";
}