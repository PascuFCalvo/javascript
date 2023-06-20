let formulario = document.querySelector(".formpeliculas");

formulario.addEventListener("submit", anadirlocal)

function anadirlocal(){
    let titulo = document.querySelector("#addpelicula").value;
    if(titulo.length >= 1){
    localStorage.setItem(titulo, titulo);
    }
}
let listpelis = document.getElementById("listapeliculas");

for(let elemento in localStorage){

    if(typeof localStorage[elemento] === "string"){
        let li = document.createElement ("li");
        li.append(localStorage[elemento]);
        console.log(li);
        listpelis.append(li);
    }

}

let formularioborrar = document.querySelector(".formborrapeliculas");

formularioborrar.addEventListener("submit", borrarlocal)

function borrarlocal(){
    let titulo = document.querySelector("#borrarpelicula").value;
    if(titulo.length >= 1){
    localStorage.removeItem(titulo, titulo);
    }
}