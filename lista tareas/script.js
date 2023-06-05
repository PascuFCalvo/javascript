const date = document.querySelector('.fecha');
const input = document.querySelector('input');
const botonadd = document.querySelector('.anadir');
const ul = document.querySelector('ul');
const vacio = document.querySelector('.vacio');
const cerrartodo = document.querySelector('.cerrartodo')

let fechan = new Date();
let day = fechan.getDate();
let month = fechan.getMonth() + 1;
let year = fechan.getFullYear();


date.innerHTML = `${day}/${month}/${year}`;



botonadd.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text = input.value;

        if (text !== ""){
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = `${day}/${month}/${year}` + " " + text ;
            li.appendChild(p);
            //esto va a añadir al p el boton que se crea al llamar a la funcion anadirbotoncerrar
            li.appendChild(anadirbotoncerrar());   
            ul.appendChild(li);
            input.value = "";
            vacio.style.display = "none";   
            //enseña el boton cerrar todo
            cerrartodo.style.display = "block";
    }
});

//voy a crear el boton de cerrar aqui para que no este todo acumulado
function anadirbotoncerrar(){
    const botoncerrar =document.createElement("button");
    botoncerrar.textContent = "Cerrar tarea";
    //y dentro del botton ya le añadimos el addeventlistener 
    botoncerrar.addEventListener('click', (e) => {
        //e.target hace referencia al botton, pero tu quieres eliminar su elemento padre, por eso llames a parentElement.
        const item = e.target.parentElement;
        //aqui cogemos el elemento padre, y vamos a eliminar el elemento item.
        ul.removeChild(item);

        //aqui vamos a comprobar si hay o no elementos pendientes para devolver el mensaje "no hay tareas pendientes"
        const itemlist = document.querySelectorAll('li');

        if (itemlist.length === 0){
            vacio.style.display = "block";
        }
        
    });
    return botoncerrar;

}


//aqui he hecho la truja porque no consigo borrarlas como con el boton cerrar (no se si es un lio de lu-li), asi que les meto display none y a chutar.
cerrartodo.addEventListener('click', (e) => {
    e.preventDefault();
    const itemlist = document.querySelectorAll('li');
    for (let i = 0; i<itemlist.length; i++){
        console.log (itemlist);
        itemlist[i].style.display = "none";
        vacio.style.display = "block";
        cerrartodo.style.display = "none"
    }

});





 



    






