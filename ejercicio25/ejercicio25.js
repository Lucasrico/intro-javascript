/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */
function crearCuadrado(ancho) {
  const salto = "\n";

  // funcion que modifique el valor de la figura para ir pintando sobre ella
  //parametros: (figura sobre la que queremos pintar, caracter a introducir, veces que lo introducimos)

  function pintar(figura, ch, times) {
    for (i = 0; i < times; i++) {
      figura = figura + ch;
    }
    return figura;
  }

  //Pintamos la linea superior de ancho a;
  //Pintamos a-2 lineas de: "*"" + (a-2)" " + "*";
  //Pintamos la linea inferior igual que la superior;

  //Le estamos pasando la misma figura como aprametro a la funcion pintar para que al asignarle ese valor
  //a la antigua figura, construya sobre ella.

  let cuadrado = "";
  cuadrado = pintar(cuadrado, "*", ancho);
  cuadrado = pintar(cuadrado, salto, 1);
  for (let i = 0; i < ancho - 2; i++) {
    cuadrado = pintar(cuadrado, "*", 1);
    cuadrado = pintar(cuadrado, " ", ancho - 2);
    cuadrado = pintar(cuadrado, "*", 1);
    cuadrado = pintar(cuadrado, salto, 1);
  }
  cuadrado = pintar(cuadrado, "*", ancho);
  cuadrado = pintar(cuadrado, salto, 1);

  return cuadrado;
}

console.log(crearCuadrado(6));

module.exports = { crearCuadrado };
