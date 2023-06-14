let dia;
let mes;
let ano = new Date().getFullYear();
let anoarray;
let fecha = "";
let listadias = document.getElementById("dia");
let listames = document.getElementById("mes");
let listaanos = document.getElementById("ano");
let botonaceptar = document.getElementById("aceptar");
let contenedor = document.getElementById("container");
let menufecha = document.getElementById("menudesplegable");
let popupanadido = document.getElementById("popupanadido");
let fichas =  document.getElementById(".fichas");
let textocarrito = "añadido al carrito en casilla + " , casilla
let dropzone = document.getElementById("dropzone");
let popupon = 0;
let textoficha = "ficha añadida";

console.log(fichas)


function allowDrop(ev){
    ev.preventDefault
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    ev.currentTarget.style.border = "solid 1px"
    ev.currentTarget.style.alignSelf = "center"
    ev.currentTarget.style.justifySelf = "center"
}
function onDragOver(ev) {
    ev.preventDefault();
}

function onDrop(ev){
        
        let id =ev.dataTransfer.getData("text");
        let fichas =document.getElementById(id);
        let dropzone = ev.target;
        dropzone.appendChild(fichas);
        ev.dataTransfer.clearData();
        
        anadirtexto(textoficha);
    
}



botonaceptar.addEventListener('click', todos)


for (let i = 1; i <= 31; i++){
   let nuevodia = document.createElement("option");
   nuevodia.textContent = i;
   listadias.appendChild(nuevodia);}

for (let j = 1900; j <= ano; j++){
   let nuevoano = document.createElement("option");
   nuevoano.textContent = j;
   listaanos.appendChild(nuevoano);}


function validacion(){
   let fechaarray = fecha.split (" / ");
   anoarray = parseInt(fechaarray[2]);
   }


function todos(){
   guardarfecha();
   validacion()
   mostrarweb();  }


function mostrarweb(){if (new Date().getFullYear() - anoarray >= 18){
   contenedor.style.display = "block";
   menufecha.style.display = "none";
} else{ (alert("eres menor de edad!"))
}}


function anadirtexto(texto){
   if (popupon == 0){
   let nuevoh1 = document.createElement ("h1");
   let botoncerrartexto = document.createElement ("button");
   nuevoh1.textContent = (texto);
   popupanadido.style.display = "block";
   popupanadido.append(nuevoh1);
   nuevoh1.append(botoncerrartexto);
   botoncerrartexto.style.height = "auto"
   botoncerrartexto.style.width = "auto"
   botoncerrartexto.textContent = "Cerrar"
   botoncerrartexto.addEventListener('click', cerrartexto)
   popupon = 1;
      function cerrartexto(){
         popupanadido.style.display = "none";
         if(nuevoh1.parentNode){
            nuevoh1.parentNode.removeChild(nuevoh1);
            popupon = 0;
            }

        }
    }   
}

function guardarfecha(){
   let indicedia = document.getElementById("dia");
   let diaseleccionado = indicedia.value;

   let indicemes = document.getElementById("mes");
   let messeleccionado = indicemes.value;

   let indiceano = document.getElementById("ano");
   let anoseleccionado = indiceano.value;
   
   fecha = diaseleccionado + " / " + messeleccionado + " / " + anoseleccionado ;
   return(fecha)
}

function botoncerrar(){
   let botoncerrar = document.createElement ("button");
   menuemergente.append(botoncerrar);
   botoncerrar.style.height = "20px"
   botoncerrar.style.width = "20px"
   botoncerrar.style.position = "absolute"
   botoncerrar.style.marginLeft = "355px"
   botoncerrar.style.marginTop = "5px"
   botoncerrar.textContent = "x "
   botoncerrar.addEventListener('click', cerraremergente)
      function cerraremergente(){
         let menuemergente = document.getElementById("menuemergente");
         menuemergente.style.display = "none";
    }
    

}



