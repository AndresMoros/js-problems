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