/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */


function sumaNPrimerosNumerosPares(n) {
  let suma = 0;
  let contador = 0;
  let i = n;
  while (contador < n) {
    if (i % 2 == 0) {
      suma += i;
      contador++;
    }
    i++;
    //return `contador es ${contador}, i es ${i} y suma es ${suma}`
  }
  return suma;
}

console.log(sumaNPrimerosNumerosPares(11))
module.exports = { sumaNPrimerosNumerosPares };
