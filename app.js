/*comerciante hace descuentos a sus clientes dependiendo del monto de la compra. 
*/

let compra = Number(prompt("Ingrese el monto de la compra que realizó el cliente:"));
if (compra < 100) {
    alert("No hay descuento para su compra.");
} else if (compra >= 100 && compra <= 300) {
    let descuento = compra * 0.05;
    let total = compra - descuento;
    alert("Se le aplicó un descuento del 5%. Total a pagar: $" + total.toFixed(2));
} else if (compra > 300 && compra <= 500) {
    let descuento = compra * 0.10;
    let total = compra - descuento;
    alert("Se le aplicó un descuento del 10%. Total a pagar: $" + total.toFixed(2));
} else if (compra > 500) {
    let descuento = compra * 0.15;
    let total = compra - descuento;
    alert("Se le aplicó un descuento del 15%. Total a pagar: $" + total.toFixed(2));
}
 


// Trabajo Práctico 2 
/*Comparar números enteros
Solicita al usuario dos números enteros.  
Convierte las entradas a números enteros.  
Determina cuál de los dos números es mayor, o si son iguales.  
Muestra el resultado en la consola.*/

let num1 = parseInt(prompt("Ingrese el primer número entero:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero:"));

if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    alert(num2 + " es mayor que" + num1);
} else {
    alert("Ambos números son iguales.");
}

// Trabajo Práctico 3
/*Pide al usuario tres notas con decimales.  
Convierte las entradas a números decimales.
Calcula el promedio de las tres notas usando operadores aritméticos.  
Muestra el promedio en la consola.  
Usa un condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6).
*/
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;     
alert("El promedio de las notas es: " + promedio.toFixed(2));

if (promedio === 10) {
   alert.log("🌟¡Felicidades! Destacado.");
} else if (promedio >= 8) {
    alert("🥳 Muy bien.");
} else if (promedio >= 6) {
    alert("🙂 Aprobado.");
} else if (promedio >= 4) {
    alert("😕 Aún puedes mejorar.");
} else {
    alert("😞 Necesitas esforzarte más.");
}

// Trabajo Practico 3 Solucionado