//Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 30;


//1. Imprimir en consola el número mayor de los tres.
if (number1 > number2 && number1 > number3) {
  console.log('El número mayor es:', number1);
} else if (number2 > number1 && number2 > number3) {
  console.log('El número mayor es:', number2);
} else {
  console.log('El número mayor es:', number3);
}
//2. Imprimir en consola el número menor de los tres.
if (number1 < number2 && number1 < number3) {
  console.log('El número menor es:', number1);
} else if (number2 < number1 && number2 < number3) {
  console.log('El número menor es:', number2);
} else {
  console.log('El número menor es:', number3);
}
//3. Imprimir en consola si el numero1 es par o impar.
if (number1 % 2 === 0) {
  console.log('number1 es par');
} else {
  console.log('number1 es impar');
}

//4. Imprimir en consola si el numero2 es par o impar.
if (number2 % 2 === 0) {
  console.log('number2 es par');
} else {
  console.log('number2 es impar');
}

//5. Imprimir en consola si el numero3 es par o impar.
if (number3 % 2 === 0) {
  console.log('number3 es par');
} else {
  console.log('number3 es impar');
}
//6. Imprimir en consola si el numero1 es múltiplo de 5.
if (number1 % 5 === 0) {
  console.log('number1 es múltiplo de 5');
} else {
  console.log('number1 no es múltiplo de 5');
}
//7. Imprimir en consola si el numero2 es múltiplo de 5.
if (number2 % 5 === 0) {
  console.log('number2 es múltiplo de 5');
} else {
  console.log('number2 no es múltiplo de 5');
}
//8. Imprimir en consola si el numero3 es múltiplo de 5.
if (number3 % 5 === 0) {
  console.log('number3 es múltiplo de 5');
} else {
  console.log('number3 no es múltiplo de 5');
}