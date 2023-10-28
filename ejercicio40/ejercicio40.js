/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */
function encontrarEn(valor, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == valor) {
      return true;
    }
  } return false;
}

function generarArrayNoRepetidos(tam) {
  let array = [];
  iter = 0;
  let valor;
  for (let i = 0; i < tam; i++) {
    do {
      valor = (100 * Math.random()).toFixed();
      iter++;
    } while (encontrarEn(valor, array));
    array[i] = valor;
  } return array;
}
console.log(generarArrayNoRepetidos());
console.log(iter - 20)
module.exports = { generarArrayNoRepetidos };
