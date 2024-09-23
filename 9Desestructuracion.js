//Desestructuración en JavaScript

// Objeto de usuario
const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
      calle: 'Villa los corales',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'diegosalazar@example.com',
      redesSociales: {
        instagram: '@diego',
      }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
  };
  
  // Desestructuración para extraer las propiedades requeridas
  const { nombre,apellido } = usuario;
  const { ciudad } = usuario.direccion;
  const [primerInteres] = usuario.intereses;
  const { email } = usuario.contactos;
  const { instagram } = usuario.contactos.redesSociales;
  const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;
  
  // Imprimir por consola todas las variables extraídas
  console.log(nombre);          // Diego
  console.log(apellido);       // Salazar
  console.log(ciudad);         // Concepción
  console.log(primerInteres);  // Programación
  console.log(email);          // diegosalazar@example.com
  console.log(instagram);      // @diego
  console.log(calleUsuario);   // Villa los corales
  console.log(numeroUsuario);   // 123  