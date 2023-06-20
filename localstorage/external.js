

//fetch (ajax) y peticiones a servicios /apis rest
let usuarios = [];
let divusuarios = document.querySelector("#usuarios");
let contador = 1;
//esto es una promesa que se queda a la espera de la recogda de datos
fetch("https://reqres.in/api/users?page=1")
    //con .then recogemos datos
    .then(datos => datos.json())
    //esto seria lo mismo 
    //.then(function(datos){return datos.json()})


    //y este then, cuando la informacion ya esta formateada en un json, capturamos la info
    .then(user => {
        usuarios = user.data;
        console.log(usuarios);

        usuarios.forEach(user => {
            
            let nombre = document.createElement("h3");

            nombre.innerHTML =contador + ": " + user.first_name + " " + user.last_name;
            contador++;
            divusuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = "none";
            
        });

    });

