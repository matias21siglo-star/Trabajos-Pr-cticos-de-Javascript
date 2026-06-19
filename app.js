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









