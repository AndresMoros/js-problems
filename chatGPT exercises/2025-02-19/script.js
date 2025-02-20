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

// ---------------------------------------------------------------

// Encontrar la palabra más larga v1
// const findLongest = str => {
//   let longest;
//   let arr = str.split(' ')
//   arr.forEach((e, i) => {
//     if(arr[i + 1] && e.length > arr[i + 1].length){
//       longest = e;
//     }
//   })
//   return longest
// }

// Explicación:

// arr[i + 1] && e.length > arr[i + 1].length: Esta condición primero verifica si arr[i + 1] existe (es decir, no es undefined). Solo si existe, procede a comparar las longitudes de las palabras.

// Encontrar la palabra más larga v2
const findLongest = str => {
    return str.split(' ').reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    });
  };
  
  //Explicación:
  
  // reduce: Este método recorre el array y acumula un valor (en este caso, la palabra más larga encontrada hasta el momento). La función de reducción compara la longitud de la palabra actual (current) con la longitud de la palabra más larga encontrada hasta ahora (longest). Si la palabra actual es más larga, se convierte en la nueva palabra más larga.
  
  findLongest('El conocimiento es poder')

// ---------------------------------------------------------------

// Detectar palindrome

const isPalindrome = str => str == str.split('').reverse().join('');

isPalindrome('oso')
isPalindrome('reconocer')
isPalindrome('anilina')

// ---------------------------------------------------------------

// Contar Palabras en una frase

const wordCounter = str => str.replace(/[,-='"+]/ig, '').trim().split(' ').length;

wordCounter("Hola mundo, estoy aprendiendo JavaScript")