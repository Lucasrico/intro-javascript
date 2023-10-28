/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

//A MEDIAS SIN TERMINAR PROBANDO COSAS
function sumaPares(n) {
  suma = 0;
  for (let i = 2; i < n + 2; i++) {
    if (i % 2 == 0) {
      suma += i;
    }
  } return suma;
}
console.log(sumaPares(4))

function sumaNPrimerosNumerosPares(n) {
  return sumaPares(n) - n
}
//module.exports = { sumaNPrimerosNumerosPares };
