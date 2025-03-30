// CONTADOR DE PALABRAS
// contarPalabras("Hola mundo hola programación mundo hola"); 
// // ➞ { hola: 3, mundo: 2, programación: 1 }
// ```

let str = "Hola mundo hola programación mundo hola"

const wordCounter = (str) => {
  const strArr = str.toLowerCase().replace(/[-,._]/g, '').split(' ').sort();
  let words = {};
  
  for(let i = 0; i < strArr.length; i++) {
    const word = strArr[i]
    if(words[word]){
      words[word]++
    } else {
      words[word] = 1
    }
  }
  
  return words
}
 wordCounter(str)

