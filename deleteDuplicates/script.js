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