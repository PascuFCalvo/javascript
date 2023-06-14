// 1. crea un programa que pida dos numeros y diga cual es mayor cual es menor y si son iguales

/*

let num1;
let num2;
let nums = [];

num1 = prompt('Dame un numero');
num2 = prompt('Dame otro numero');

if(num1>num2){
alert("es mayor" + " "+(num1))
}else if (num2>num1){
 alert("es mayor" + " "+(num2))  
}else if (num2 == num1){
   alert("son iguales")
}

*/
   
   
 //2. al programa anteriro, si los numeros no son un numero o son menores o iguales a 0 que vuelva a pedir el numero

/*

 let num1;
 let num2;
 let nums = [];
 
do{
   num1 = prompt('Dame un numero');
}while (isNaN(num1));

do{
   num2 = prompt('Dame otro numero');
}while (isNaN(num2));

do{
   num1++;
   nums.push(num1);   
}while (num2-1 > num1);   

console.log(nums)
alert(nums)
 
*/

//3. utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado.

/*

let suma = 0;
let totalnums = 0;
let numintroducido = 0;

do{
   numintroducido = prompt("introduce un numero")
   if(numintroducido>=0){
      suma = Number(numintroducido) + Number(suma);
      totalnums++;}
}while (numintroducido >= 0 )

alert("suma = " + suma)
alert(" media = " + suma / totalnums)

*/
   

//4. hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario.

/*

let num1;
let num2;
let nums = [];

num1 = prompt('Dame un numero');
num2 = prompt('Dame otro numero');

do{
   num1++;
   nums.push(num1);

}while (num2-1 > num1)

console.log (nums)
alert(nums)

*/

// 5. mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.

/*

let num1;
let num2;
let nums = [];

num1 = prompt('Dame un numero');
num2 = prompt('Dame otro numero');

do{

if(num1 % 2 == 1)
   nums.push(num1);
   num1++;

}while (num2 > num1)
console.log(nums);

*/

// 6. programa que muestre todos los numeros divisores de un numero que introducimos desde un prompt.

/*

let num1;
let divisor = 1;
let divisores = [];

num1 = prompt('Dame un numero');

do{
   if (num1 % divisor == 0){
      divisores.push(divisor);
   }divisor++;
   
   
}while (divisor <= num1);

console.log(divisores);

*/

// 7. programa que nos diga si un numero es par o impar.
//	   7.1 ventana prompt.
//	   7.2 si no es valido que nos pida otra vez el numero.


/*
let num1;

do{
num1 = prompt('Dame un numero');
}while (isNaN(num1) || Number(num1) % 1 !== 0)

if (Number(num1) % 2 == 0){
   alert('PAR');

}else {
   alert('IMPAR');   
}

*/

// 8. programa que muestre la tabla de multiplicar de un numero introducido por pantalla.

/*

let num1;
let contador = 1;
let resultado = 0;
let tabla = [];

num1 = prompt('Dame un numero');

for(let i = contador; contador <= 10; contador ++){
   resultado = contador * num1;
   tabla.push(num1 + " x " + contador + " = " + resultado + " \n");
   
}
alert(tabla); 

*/


//9. calculadora:
//	-pida 2 numeros por pantalla
//	-si metes mal un numero te lo vuelve a pedir
//	- en el cuerpo de la pagina, en una alerta y por consola el resultado de sumar restar multiplicar y dividir esas dos cifras
//	-refactorizar el codigo para encapsularlo en funciones.

/*

let num1;
let num2;

do{
num1 = prompt('Dame un numero');
}while (isNaN(num1))
do{
   num2 = prompt('Dame otro numero');
   }while (isNaN(num2))


num1 = Number(num1);
num2 = Number(num2);

function suma(num1, num2){
   return num1 + num2;
}
function resta(num1, num2){
   return num1 - num2;
}
function mult(num1, num2){
   return num1 * num2;
}
function div(num1, num2){
   return num1 / num2;
}
console.log(suma(num1,num2), resta(num1,num2), mult(num1, num2), div(num1, num2))
alert("SUMA = "  + suma(num1,num2) + " \n" + "RESTA = " + resta(num1,num2) + " \n" + "MULTIPLICAION = " + mult(num1, num2)+ " \n" + "DIVISION = " + div(num1, num2))

*/


//10. programa que pida 6 numeros por pantalla y los meta en un array.


/*
let num;
let arraynums = [];

for (let i = 0; i < 6; i++){
   num = prompt('Dame un numero')
   arraynums.push(num);

}
console.log(arraynums);

*/

//11. mostrar el array anterior enter ( todos sus elementos) en el cuerpo de la pagina y en la consola (usando funciones)

/*

//hay que añadir estas lineas

function ensenararray(array){
   alert(arraynums);
}

ensenararray(arraynums);

*/

// el de los arrays otra vez (solucion internet) usa el sort vaya parguela

/*
let numeros = [];

for (let i = 0; i <= 5; i ++){
   numeros.push(parseInt(prompt("Dame un numero")));
}
console.log(numeros);
*/



/*  por resolver aun

let num;
let mayor;
let arraynums = [];


for (let i = 0; i < 4; i++){
   num = prompt('Dame un numero')
   arraynums.push(num);

}

for (let i = 0; i < arraynums.length -1; i++){
   for(let j = i-1; j <arraynums.length -1 ; i++){
         if(arraynums[i]>arraynums[j]){
            let mayor = arraynums[i];
            arraynums[i] = arraynums[j];
            arraynums[j] = mayor;
            console.log(arraynums);
         }
   }      
}  
*/       
         


// ejerciciosbasicos.jpg 1 presentacion

/*

let nombre = prompt ("como te llamas");
let edad = prompt("cuantos años tienes");

alert("Hola " + nombre + " tienes " + edad + " años ")

*/

// ejerciciosbasicos.jpg 2 area 

/*

let figura = prompt ("que quieres calcular, TRI, REC, CIR");

switch(figura){
   case 'TRI':
      let base = prompt ("dime la base");
      let altura = prompt ("dime la altura");
      let area = (Number(base) * Number(altura)/2)
      console.log(area);
      alert("El area es: " + area)
      break;

   case 'REC':
      let base2 = prompt ("dime la base");
      let altura2 = prompt ("dime la altura");
      let area2 = (Number(base2) * Number(altura2))
      console.log(area2);
      alert("El area es: " + area2)
      break;    
      
   case 'CIR':
      let radio = prompt ("dime el radio");
      let area3 = (radio * radio) * Math.PI;
      console.log(area3);
      alert("El area es: " + area3)
      break;     
      

}^

*/

// ejerciciosbasicos.jpg 3 parimpar

/*

let numero = prompt ("Dame un numero");

for (let i = 0; i <= numero ; i++){
   if (i%2 == 0){
      console.log (i + " es par");
   }else{
      console.log (i + " es impar");
   }

   
}
   
*/

// ejerciciosbasicos.jpg 4 primo

/*

let primo = 0;
contador = 0;

do{
primo = prompt ("Dame un numero");
}while (primo < 1);


for (let i = 0; i<= numero; i++){
   if(Number(primo) % i  == 0){
      contador++;
   }
   }
if(contador > 2){
   console.log( "El numero " + primo + " no es primo")
   }else {
      console.log( "El numero " + primo + " es primo")
   }


*/ 

// ejerciciosbasicos.jpg 5 factorial

/*
let factorial = 0;

do{
   factorial = prompt("Dame un numero mayor que 1");
   }while (factorial < 1);

   factorial = Number(factorial);
   
for (let i = factorial - 1; i>= 1; i--){
   factorial = factorial * i;
}
console.log(factorial)

*/

//ejerciciosbasicos.jpg 6 suma50 y cantidad

/*

let suma = 0;
let contador = 0;
let sumaN;

do{
   sumaN = Number(prompt("Dame un numero"));
   suma =  suma + sumaN
   contador++;

}while (suma <= 50)

console.log ("suma = " + suma)
console.log("numeros introducidos = " + contador)

*/

//ejerciciosbasicos.jpg 7 3 arrays

/*

let array = [1,2,3,4,5];
let pares = [];
let impares = [];

for(let i = 0; i < array.length; i++){
   let random = (array[i] * parseInt(Math.random()*10));
   let par = random%2 == 0;
   if(par){
      pares.push(array[i] * random);
   }else{
      impares.push(array[i] * random);
   }
}
   console.log(pares)
   console.log(impares)


*/

//ejerciciosbasicos.jpg 8 dni

/*

   let dni = "";
   let arraydni = [];
   const letras = ['t','r','w','a','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','t'];

   do {
      dni = (prompt("dime un numero de DNI"));
   }while ( dni.length != 8 || Number(dni) < 0 );

   let posicion = Number(dni) % 23;
   dni = dni + letras[posicion];
   console.log(dni)

*/

//ejerciciosbasicos.jpg 9 contador de vocales consonantes

/*

let palabra = prompt("dame una palabra");
let vocales = 0;
let consonantes = 0;

for (i=0; i< palabra.length ; i++){
   if (palabra[i] == "a" || palabra[i] == "e" || palabra[i] == "i" || palabra[i] == "o" || palabra[i] == "u"){

      vocales++;
   }
   else {
      consonantes++;
   }
}console.log("vocales " + vocales)
 console.log("consonantes " + consonantes)
 console.log(palabra.length)

 */

  









