/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

// Probamos con un operador ternario:

function incrementarSueldo(sueldo) {
    return sueldo < 1000 ? sueldo * 1.15 : sueldo;
}

// El operador ternario COMPLETO, es decir, todo lo que hay detras del return,
//valdrá sueldo*1.15 si sueldo > 1000, y valdrá sueldo si sueldo no es > 1000.
//Las dos opciones de valor van detras del signo de interrogacion, separadas por ":".

//Alternativa if else:

// function incrementarSueldo(sueldo) {
//     if (sueldo < 1000) {
//         return sueldo * 1.15;
//     } else return sueldo;
// }

module.exports = { incrementarSueldo };
