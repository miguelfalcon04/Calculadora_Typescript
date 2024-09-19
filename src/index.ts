// src/index.ts

import * as readline from 'readline-sync';

function main() {
  console.log('=== Calculadora Básica en TypeScript ===');

  // Solicitar al usuario que ingrese dos números
  const num1 = readline.questionFloat('Ingrese el primer número: ');
  const num2 = readline.questionFloat('Ingrese el segundo número: ');

  // Mostrar menú de operaciones
  const operaciones = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];
  const indice = readline.keyInSelect(operaciones, 'Seleccione una operación: ');

  if (indice === -1) {
    console.log('Operación cancelada.');
    return;
  }

  // Realizar la operación seleccionada
  let resultado: number;
  switch (indice) {
    case 0: // Sumar
      resultado = num1 + num2;
      break;
    case 1: // Restar
      resultado = num1 - num2;
      break;
    case 2: // Multiplicar
      resultado = num1 * num2;
      break;
    case 3: // Dividir
      if (num2 === 0) {
        console.log('Error: División por cero.');
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      console.log('Operación no válida.');
      return;
  }

  console.log(`El resultado es: ${resultado}`);

  // Preguntar si desea realizar otra operación
  const continuar = readline.keyInYN('¿Desea realizar otra operación? ');
  if (continuar) {
    main(); // Llamada recursiva para reiniciar el proceso
  } else {
    console.log('Gracias por usar la calculadora.');
  }
}

// Ejecutar la función principal
main();