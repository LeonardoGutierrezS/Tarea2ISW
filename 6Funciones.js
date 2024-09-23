//Funciones

//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
  }
  console.log(convertirMayusculas("hola mundo"));
  //2. Crea una función que reciba un string y retorne el string en minúsculas.
  function convertirMinusculas(cadena) {
    return cadena.toLowerCase();
  }
  console.log(convertirMinusculas("HOLA MUNDO"));
  //3. Crear una función que reciba como parámetro 2 números y los reste.
  function restaa(num1, num2) {
    return num1 - num2;
  }
  console.log(restaa(20, 10));
  //4. Crear una función que reciba como parámetro 2 números y los divida.
  function dividir(num1, num2) {
    return num1 / num2;
  }
  
  console.log(dividir(20, 5));
  //5. Crear una función que reciba como parámetro 2 números y los multiplique.
  function multiplica(num1, num2) {
    return num1 * num2;
  }
  console.log(multiplica(4, 5));
  //6. Crear una función que reciba un string y devuelva la longitud del string.
  function longitudCadena(cadena) {
    return cadena.length;
  }
  
  console.log(longitudCadena("Hola Mundo")); 
  