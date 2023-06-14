
let boton = document.getElementById("btn");
let boton2 = document.getElementById("btn2");
let nombre = document.getElementById("campoNombre");
let lista = document.getElementsByClassName("listanombres");
let arraynombres = [];
let nuevonombre = "";

boton.addEventListener("click", guardar);
boton2.addEventListener("click", mostrar);


function guardar (){
   nuevonombre = nombre.value;
   if(nuevonombre != "fin"){
   alert ("has añadido a " + nuevonombre);
   arraynombres.push(nuevonombre);
   document.write (nuevonombre);
   nombre.value = "";
   
   }else{
      alert("Has terminado de introducir nombres");
      console.log(arraynombres);
   }
   return arraynombres
}
   
function mostrar(){
   alert (arraynombres);
}   

function imprimir(){}

let indice;
for(indice in arraynombres){
   // if (typeof todosDivs[indice].textcontent == "string")
   //if (todosDivs[indice].textContent.length >= 1) si usas esta funciona pero da un error en el .length

   if (typeof arraynombres[indice].textcontent == "string"){
      var parrafo = document.createElement("p");
      var texto = document.createTextNode(arraynombres[indice].textContent);
      parrafo.appen(texto);
      lista.append(parrafo);
      
   } 
   sec.append(hr);
}

imprimir()

  




