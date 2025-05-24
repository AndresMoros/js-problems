// Eliminar duplicados v1
// const deleteDuplicates = (arr) => {
//   for(let i = 0; i < arr.length; i++){
//     if(arr.sort((a, b) => a - b)[i] == arr.sort((a, b) => a - b)[i + 1]){
//       arr.splice(i, 1)
//     }
//   }
//   return arr
// };

// Eliminar duplicados v2
// const deleteDuplicates = (arr) => {
//   arr.sort((a, b) => a - b).forEach((el, i) => el === arr[i + 1] ? arr.splice(i, 1) : el);
//   return arr
// }

// Eliminar duplicados v3
const deleteDuplicates = (arr) => arr.sort((a, b) => a - b).filter((e, i) => e !== arr[i + 1]);

deleteDuplicates([1, 2, 3, 1, 2, 4, 5])
deleteDuplicates(["hola","hola", "jojo", "jojo"])

// chatGPT: const deleteDuplicates = arr => [...new Set(arr)];
// Explicación de la solución de chatGPT: El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.

// ----------------------------

// Encontrar factorial de un número

const fact = n => {
  let result = n;
  if (n === 0 || n === 1) 
    return 1; 
  while (n > 1) { 
    n--;
    result *= n;
  }
  return result;
}

// const fact = n => n ? n * fact(n - 1) : 1

fact(5) //120

// ----------------------------

// Encontrar la palabra más larga v1
// const findLongest = str => {
//   let words = str.split(' ');
//   let longest = '';
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// };

// Explicación:

// arr[i + 1] && e.length > arr[i + 1].length: Esta condición primero verifica si arr[i + 1] existe (es decir, no es undefined). Solo si existe, procede a comparar las longitudes de las palabras.

// Encontrar la palabra más larga v2
const findLongest = str =>
  str.split(' ').reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
  
  //Explicación:
  
  // reduce: Este método recorre el array y acumula un valor (en este caso, la palabra más larga encontrada hasta el momento). La función de reducción compara la longitud de la palabra actual (current) con la longitud de la palabra más larga encontrada hasta ahora (longest). 
  
  findLongest('El conocimiento es poder')

// ----------------------------

// Detectar palindrome

const isPalindrome = str => str == str.split('').reverse().join('');

isPalindrome('oso')
isPalindrome('reconocer')
isPalindrome('anilina')

// ----------------------------


// Contar Palabras en una frase

const wordCounter = str => str.replace(/[,-='"+]/ig, '').trim().split(' ').length;

wordCounter("Hola mundo, estoy aprendiendo JavaScript")

wordCounter("Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, beatae amet totam, ex provident minima aspernatur maxime accusantium est earum cum molestias voluptate debitis quae deserunt blanditiis et repellendus id!")

// Explicación: El método String.replace() toma como parámetro una cadena o expresión regular objetivo, la cual reemplazará, y la cadena con la cual será sustituida, en este caso todo carácter que no sea una letra. El método String.trim() elimina los espacios en blanco en ambos extremos de una cadena, sino estos se contarían como palabras, y el método String.split() toma como parámetro un separador en base al cual convetirá la cadena a un array. La propiedad Array.length es la cantidad de elementos que tiene un array.

// Convertir mayúsculas y minúsculas

const convertUpperLower = str => typeof str == 'string' ? {minusculas: str.toLowerCase(), mayusculas: str.toUpperCase()} : 'Not a String';


convertUpperLower('Hola');
convertUpperLower('JavaScript');
convertUpperLower('Desarrollo Web');