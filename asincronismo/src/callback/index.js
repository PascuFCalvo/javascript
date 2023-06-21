//funcion que pasa como argumento otra funcion +
//ejemplo sencillo

function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

//creamos funcion de callback que llama a suma
//recibe los 2 valores y una funcion como 3er argumento (la llamo callback)

function calc(num1, num2, operacion_callback){
    return operacion_callback(num1, num2);
};


//como invocarla, solo con cambiar el ultimo parametro ya llamamos a cualquiera 
//de las 4 operaciones.
console.log(calc(2,2,rest));


//setTimeout , recibe una funcion como primer argumento (es un callback)
//tiempo de ejecucion como segundo, y luego el resto de argumentos
setTimeout(function(){
    console.log("Hola JS");
},2000)

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}


setTimeout(saludo,2000,"Paco")




