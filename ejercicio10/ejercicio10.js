/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */


//En el test el orden de los parametros es (salario, categoria), lo ponemos asi.

function nuevoSalario(salario, categoria) {
  let nuevosalario = 0;
  switch (categoria) {
    case 1:
      nuevosalario = salario * 1.15;
      break;
    case 2:
      nuevosalario = salario * 1.10;

      break;
    case 3:
      nuevosalario = salario * 1.06;

      break;
    case 4:
      nuevosalario = salario * 1.03;

      break;

    default:
      nuevosalario = salario;
      break;
  }

  return nuevosalario;
}

//Se podria hacer un return en cada case, no hace falta la variable.

module.exports = { nuevoSalario };
