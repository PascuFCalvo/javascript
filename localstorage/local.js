//local storage

//comprobar si tenemos localstorage disponible
if (typeof (Storage) !== "undefined"){
    console.log ("localstorage disponible")
}

//guardar datos en el local storage

//metodo              key         valor de la key
localStorage.setItem("titulo", "Curso de VRobles.")


//recuperar elemento del localstorage y meterlo en una web

localStorage.getItem("titulo");

document.querySelector(".div1").innerHTML = localStorage.getItem("titulo");

//guardar objetos json 

let usuario = {
    nombre: "Pascual",
    email: "Pascual@mail.com",
    web: "www.Pascual.com"
}

//si los guardas asi no se guardan bien

localStorage.setItem("usuario", usuario);

//suele ser necesario convertiros a un string

localStorage.setItem("usuarioString", JSON.stringify(usuario));


//recuperar objeto del local
//si lo llamas tal cual devuelve un string
localStorage.getItem("usuarioString")


//Hay que usar un metodo de JSON
let UsuarioJSON = JSON.parse(localStorage.getItem("usuarioString"));

document.querySelector(".div2").append(" "+ UsuarioJSON.nombre + " - " + UsuarioJSON.email + " - " + UsuarioJSON.web);


//borrar elementos del local

localStorage.removeItem("usuario");
localStorage.removeItem("usuarioString")


//eliminar todo el local
localStorage.clear



