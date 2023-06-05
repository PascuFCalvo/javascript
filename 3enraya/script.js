let turno = 0;
const todosBotones = document.querySelectorAll('.boton');
const win = document.querySelector('.gana');
const casillas = Array.apply(null,todosBotones);

function ganador(){
    if (casillas[0] == casillas[1] && casillas[0] == casillas [2] && casillas[0] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
        
    } else if (casillas[0] == casillas[1] && casillas[0] == casillas [2] && casillas[0] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[3] == casillas[4] && casillas[3] == casillas [5] && casillas[3] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[3] == casillas[4] && casillas[3] == casillas [5] && casillas[3] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[6] == casillas[7] && casillas[6] == casillas [8] && casillas[6] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[6] == casillas[7] && casillas[6] == casillas [8] && casillas[6] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[0] == casillas[3] && casillas[0] == casillas [6] && casillas[0] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[0] == casillas[3] && casillas[0] == casillas [6] && casillas[0] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[1] == casillas[4] && casillas[1] == casillas [7] && casillas[1] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[1] == casillas[4] && casillas[1] == casillas [7] && casillas[1] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[2] == casillas[5] && casillas[2] == casillas [8] && casillas[2] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[2] == casillas[5] && casillas[2] == casillas [8] && casillas[2] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[0] == casillas[4] && casillas[0] == casillas [8] && casillas[0] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[0] == casillas[4] && casillas[0] == casillas [8] && casillas[0] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }

    if (casillas[2] == casillas[4] && casillas[2] == casillas [6] && casillas[2] == 'X'){
        win.innerHTML = ' GANA EL JUGADOR 1';
    } else if (casillas[2] == casillas[4] && casillas[2] == casillas [6] && casillas[2] == '0'){
        win.innerHTML = ' GANA EL JUGADOR 2';
    }
}

function turnoEnJuego(){

    todosBotones.forEach(function (clickBoton){

        
            clickBoton.addEventListener("click", () =>
        {     
        
            if (turno%2 == 0 && clickBoton.style.backgroundColor != "salmon" && clickBoton.style.backgroundColor != "lightyellow" && win.innerHTML == ''){
            clickBoton.style.backgroundColor = "salmon";
            casillas[clickBoton.innerHTML- 1] = 'X'; 
            turno++;
            
            }else if(turno%2 == 1 && clickBoton.style.backgroundColor != "salmon" && clickBoton.style.backgroundColor != "lightyellow" && win.innerHTML == ''){
            clickBoton.style.backgroundColor = "lightyellow";
            casillas[clickBoton.innerHTML- 1] = '0'; 
            turno++; 
            
            }
        
            ganador(casillas);        
    });

        });
   
    }

turnoEnJuego(todosBotones);







