// --------- Generar una contraseña aleatoria
// Escribe una función generarPassword que genere una contraseña aleatoria de una longitud dada.
// La contraseña debe incluir letras mayúsculas, minúsculas, números y símbolos.
// Ejemplo:
// generarPassword(10); 
// ➞ "aD3$kf9!sP"

const passGenerator = (chars) => {
  // Genera un array con los códigos ASCII válidos
  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const codes = range(33, 126); // Caracteres imprimibles estándar

  let password = "";
  for (let i = 0; i < chars; i++) {
    const charCode = codes[Math.floor(Math.random() * codes.length)]; // Se genera un entero entre 0 y 94 se usa como indice para el array code
    password += String.fromCharCode(charCode); // Se pasa el carácter generado a la variable password
  }

  return password; // Se retorna la contraseña generada
};


passGenerator(12);