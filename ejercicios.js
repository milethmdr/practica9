// Ejercicio 5: Scope y Closures 
// Crea una función crearContador que retorne un objeto con métodos para incrementar, 
// decrementar y obtener el valor actual de un contador. El valor del contador debe ser 
// privado (no accesible directamente desde fuera). Demuestra cómo múltiples contadores 
// pueden mantener sus propios valores independientes usando closures. 
// function crearContador(){
//     let valor = 0;
//     return{
//         incrementar: function() {
//             valor++;
//             return valor;
//         };
//         decrementar: function() {
//             valor--;
//             return valor;
//         };
//         obtenerValor: function() {
//             return valor;
//         }
//     };
// }

// const contadorA=crearContador();
// const contadorB=crearContador();

// console.log("Contador A:");
// console.log(contadorA.incrementar()); 
// console.log(contadorA.incrementar()); 
// console.log(contadorA.decrementar());
// console.log(contadorA.obtenerValor()); 

// console.log("Contador B:");
// console.log(contadorB.incrementar()); 
// console.log(contadorB.incrementar()); 
// console.log(contadorB.incrementar()); 
// console.log(contadorB.obtenerValor()); 

// Ejercicio 6: Funciones con parámetros por defecto 
// Crea una función crearPerfil que reciba los siguientes parámetros: nombre (obligatorio), 
// edad (por defecto 18), ciudad (por defecto "No especificada"), y profesión (por defecto 
// "Estudiante"). La función debe retornar un objeto con toda la información del perfil. 
// Demuestra diferentes formas de llamar la función omitiendo algunos parámetros.
// Función con parámetros por defecto

// function crearPerfil(nombre, edad=18, ciudad="No especificada", profesion = "Estudiante"){
//     return{
//         nombre,
//         edad,
//         ciudad,
//         profesion
//     };
// }

// console.log(crearPerfil("Benilda"));
// console.log(crearPerfil("Lester", 25));
// console.log(crearPerfil("Bessy", 30, "San Miguel"));
// console.log(crearPerfil("Jose", 39, "SS", "Ingeniero"));


// Ejercicio 7: Rest parameters y el objeto arguments 1. Implementa dos versiones de una función que calcule el promedio de una cantidad 
// variable de números: • Una versión usando rest parameters (...numeros) • Una versión usando el objeto arguments (función tradicional) 
// Compara ambos enfoques y demuestra su uso con diferentes cantidades de argumentos. Explica las ventajas y desventajas de cada método. 
// 2. Escribe una función mezclar que reciba cualquier cantidad de arrays y devuelva un solo array con todos los elementos juntos 
// (usa rest parameters). a. Ejemplo: mezclar([1][2], [3], [4][5]) debe devolver [1][2][3][4]. 
// 3. Escribe una función contarArgumentos que use el objeto arguments para contar cuántos argumentos se le pasaron.
// Versión usando Rest Parameters

function promedioRest(...numeros){
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((a, b) => a + b, 0);
    return suma/numeros.length;
}

function promedioArguments(){
    if (arguments.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma / arguments.length;
}

console.log("Promedio con Rest:", promedioRest(10, 20, 30));       
console.log("Promedio con Rest:", promedioRest(5, 15));            
console.log("Promedio con Arguments:", promedioArguments(10, 20)); 
console.log("Promedio con Arguments:", promedioArguments(2, 4, 6)); 

function mezclar(...arrays){
    return arrays.flat();
}

console.log(mezclar([1, 2], [3], [4, 5]));
function contarArgumentos(){
    return arguments.length;
}
console.log(contarArgumentos(1, 2, 3, 4)); 
console.log(contarArgumentos("a", "b"));   
