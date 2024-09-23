//Arrays

//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumarArray(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  const arrayNumeros1 = [1, 2, 3, 4, 5];
  console.log(sumarArray(arrayNumeros1)); 
  //2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
  function promedioArray(numeros) {
    const suma = sumarArray(numeros);
    return suma / numeros.length;
  }
  
  const arrayNumeros2 = [10, 20, 30, 40];
  console.log(promedioArray(arrayNumeros2)); 
  
  //3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
  function convertirArrayMayusculas(strings) {
    const arrayMayusculas = [];
    for (let i = 0; i < strings.length; i++) {
      arrayMayusculas.push(strings[i].toUpperCase());
    }
    return arrayMayusculas;
  }
  
  const arrayStrings = ["hola", "mundo", "javascript"];
  console.log(convertirArrayMayusculas(arrayStrings));
  
  //4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
  function filtrarNumerosPares(numeros) {
    const numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
      }
    }
    return numerosPares;
  }
  
  const arrayNumeros3 = [1, 2, 3, 4, 5, 6];
  console.log(filtrarNumerosPares(arrayNumeros3));