/**
 *  Ejercicio 1
 * Dadas dos variables numéricas A y B,
 * se pide realizar un algoritmo que intercambie los valores de ambas
 * variables y retorne un string con las variables concatenadas.
 */

function swapVariables(a, b) {
  //Escribe tu codigo aqui
  let aux = a;
  a = b;
  b = aux;
  return a.toString() + b.toString();
}

module.exports = { swapVariables };
