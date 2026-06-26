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


// Trabajo Práctico 4
/*Pide al usuario un número entero.  
Convierte la entrada a un número entero.  
Determina si el número es par o impar usando el operador módulo (%).  
Muestra el resultado en la consola.*/


let numero = parseInt(prompt("Ingrese un número entero:"));

if (numero % 2 === 0) {
    alert(numero + " es un número par.");
} else {
    alert(numero + " es un número impar.");
}


// Trabajo Practico 5
/* En un restaurtante los clientes pueden pedir menu de carne, pescado o verdura.Si pide carne se le ofrecera como bebida vino tinto, si pide pescado se le ofrecera vino blanco y si pide verdura se le ofrecera agua.
Si no elije el menu de la lista aparecera la frase elija carne, pescado o verdura.*/


alert("😋Bienvenid@, te voy a sugerir la bebida que acompañara tu menu.");

let opcion = prompt("🤓Que menu deseas hoy? 1.carne | 2.pescado | 3.verdura");
 
switch (opcion) {
    case "1":
        alert("Su menu viene acompañado con vino tinto");
        
        break;

        case "2":
            alert("Su menu viene acompañado con vino blanco" );

        break;
        case "3": 
     alert ("Su menu viene acompañado con agua");
        break;

      default:
        alert("Recorda qie debes elegir entre las siguientes opciones: 1.carne | 2.pescado | 3. verduras");
        break;
}
alert("gracias por usar nuestros servicios. nos vemos pronto");

// Trabajo Practico 5 a revisar.
//como se puede obsevar los codigos estan bien, los ejecuto en consola y funcion lo vuelvo a ejecutar y ya no muestra en consola a pesar de que grabo y actualizo


// Agrego ejercicio 
/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
-Si ha comprado menos de 100 dolares no hay descuento.
-Si la compra esta entre 100 y 300 dolares le descuenta un 5%
-Si la compra esta por encima de 300 hasta 500 dolares le descuenta un 10%
-Si la compra supera los 500 dolares le descuenta un 15%
*/
//Cambio switch(compra) por switch(true) para que me tome el valor ;seria como un truco.
alert("😋 Bienvenidos al sistema de descuentos")
let compra = Number(prompt("😋 Ingresa el valor de la compra...."));

if (!isNaN(compra)){

switch(true){
    case compra <100:
        console.log("no tiene descuento")
        break;

    case compra <=300:  
        console.log("El descuento es del 5%");
break;

        
case compra <=500:
    console.log("El descuento es del 10%");
    break;


default:
            console.log("Descuento del 15% ");
            break;
}

}else {
    alert("❌No ingreso un valor numerico");
}