//Objetos
//1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
// Definir
const persona = {
    nombre: "Juan",
    edad: 25,
    genero: "Masculino"
  };
  
  // Mostrar
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Género:", persona.genero);
  
  //2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
  
  // Definición del objeto
  const caja = {
    cuadernos: 10,
    lapices: 20,
    papel: "blanco",
    fotografias: 5,
    buenEstado: true
  };
  
  // Imprimir el objeto entero
  console.log(caja); 
  // {cuadernos: 10, lapices: 20, papel: 'blanco', fotografias: 5, buenEstado: true}
  
  // Imprimir cada propiedad del objeto
  console.log(caja.cuadernos);     // 10
  console.log(caja.lapices);       // 20
  console.log(caja.papel);         // blanco
  console.log(caja.fotografias);   // 5
  console.log(caja.buenEstado);    // true
  
  // Imprimir el tipo de dato de cada propiedad
  console.log(typeof caja);             // object
  console.log(typeof caja.cuadernos);   // number
  console.log(typeof caja.lapices);     // number
  console.log(typeof caja.papel);       // string
  console.log(typeof caja.fotografias); // number
  console.log(typeof caja.buenEstado);  // boolean