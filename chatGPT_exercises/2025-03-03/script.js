// --------- Encontrar el número que más se repite en un array
// Escribe una función numeroMasFrecuente que reciba un array de números y devuelva el número que más veces aparece.
// Si hay empate, devuelve cualquiera de los más frecuentes.

// numeroMasFrecuente([1, 3, 2, 3, 4, 1, 3, 2, 1, 1]);
// // ➞ 1

// --------- Contar la cantidad de veces que aparece cada palabra en un texto
// contarPalabras("Hola mundo hola programación mundo hola");
// // ➞ { hola: 3, mundo: 2, programación: 1 }
// ```

let str = "Hola mundo hola programación mundo hola";

const wordCounter = (str) => {
  const strArr = str
    .toLowerCase()
    .replace(/[-,._]/g, "")
    .split(" ")
    .sort();
  let words = {};

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if (words[word]) {
      words[word]++;
    } else {
      words[word] = 1;
    }
  }

  return words;
};

wordCounter("Hola mundo hola programación mundo hola");

// --------- Convertir un número a formato de moneda

// Escribe una función formatoMoneda que reciba un número y devuelva una cadena con enúmero formateado como moneda. Usa el formato de dólares $1,234.56.

// Ejemplo:

// formatoMoneda(1234.56);
// // ➞ "$1,234.56"

const moneyFormat = (amount) => {
  const options = { style: "currency", currency: "EUR" };
  const numFormat = new Intl.NumberFormat("es-ES", options);
  return numFormat.format(amount);
};

// --------- Sumar los dígitos de un número
// Crea una función sumarDigitos que reciba un número entero y devuelva la suma de sus dígitos.
// No importa si el número es negativo.
// Ejemplo:
// sumarDigitos(1234);
// // ➞ 10  (1 + 2 + 3 + 4)

const sumDigits = (digits) => {
  if (!Number.isInteger(digits)) {
    return "Error, only integer numbers";
  }
  digits = Math.abs(digits);

  let strArr = digits.toString().split("");
  let numArr = [];
  strArr.forEach((el) => numArr.push(parseInt(el)));
  return numArr.reduce((acc, el) => acc + el);
};

sumDigits(452432);


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


passGenerator(12)