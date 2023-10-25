/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(a, b, c) {
    if (a == b && b == c) {
        return "iguales"
    } else if (a >= b) {
        if (a > c) {
            return a;
        } else return b;
    } else if (b >= c) {
        return b;
    } else return c;

}

module.exports = { compareThreeNumbers };
