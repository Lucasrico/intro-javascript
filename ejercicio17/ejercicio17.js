/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  return suma;
}

module.exports = { calcularSumaNumerosNaturales };
