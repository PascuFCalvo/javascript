//esto es para meter los scripts en el head y no al final del documento

window.addEventListener("load", cargarDOM);
function cargarDOM() {
    console.log("DOM cargado!")

    let formulario = document.querySelector("#formulario");
    let formulariodashed = document.querySelector(".dashed");
    formulario.addEventListener("submit", enviar)

    function enviar() {
        console.log("evento submit funciona");
        //.value saca el valor del formulario en ese momento
        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellidos").value;
        let edad = document.querySelector("#edad").value;


        //validacion formulario validacion formulario

        //.trim pela quitando los espacios de delante y de detras
        //esto comprueba que hayas metido algo
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("introduce un nombre valido")
            return false;
        }
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("introduce un(os) apellido(s) valido(s)")
            return false;
        }

        //isNaN devuelve true si no es un numero
        if (parseInt(edad) == null || parseInt(edad) <= 0) {
            alert("la edad no es valida")
            return false;
        }

        //validacion formulario validacion formulario


        formulariodashed.style.display = "block";

        let datosusuario = [nombre, apellido, edad]

        for (indice in datosusuario) {
            let parrafoinfo = document.createElement("p");
            parrafoinfo.append(datosusuario[indice])
            formulariodashed.append(parrafoinfo)
        }

    }
}