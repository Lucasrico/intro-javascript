/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

//let s = [];
function maxMinAverageUntilZero(s) {
  let average;
  let max = s[0];
  let min = s[0];
  i = 0;
  sum = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == 0) {
      break;
    }
    if (s[i] > max) {
      max = s[i];
    }
    if (s[i] < min) {
      min = s[i];
    }

    sum += s[i];
  }

  average = sum / i;

  return {
    average,
    max,
    min,
  };
}

module.exports = { maxMinAverageUntilZero };
