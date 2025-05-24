1. Encontrar el número que más se repite en un array

Escribe una función numeroMasFrecuente que reciba un array de números y devuelva el número que más veces aparece.

Si hay empate, devuelve cualquiera de los más frecuentes.

```js
numeroMasFrecuente([1, 3, 2, 3, 4, 1, 3, 2, 1, 1]); 
// ➞ 1
```
---

2. Contar la cantidad de veces que aparece cada palabra en un texto

Crea una función contarPalabras que reciba una cadena de texto y devuelva un objeto donde las claves sean las palabras y los valores la cantidad de veces que aparecen.

No debe distinguir entre mayúsculas y minúsculas.

Ejemplo:

```js
contarPalabras("Hola mundo hola programación mundo hola"); 
// ➞ { hola: 3, mundo: 2, programación: 1 }
```
---

3. Convertir un número a formato de moneda

    Escribe una función formatoMoneda que reciba un número y devuelva una cadena con el número formateado como moneda.
    Usa el formato de dólares $1,234.56.

Ejemplo:

```js
formatoMoneda(1234.56); 
// ➞ "$1,234.56"
```
---

4. Sumar los dígitos de un número

Crea una función sumarDigitos que reciba un número entero y devuelva la suma de sus dígitos.

No importa si el número es negativo.

Ejemplo:

```js
sumarDigitos(1234); 
// ➞ 10  (1 + 2 + 3 + 4)
```
---

5. Generar una contraseña aleatoria

Escribe una función generarPassword que genere una contraseña aleatoria de una longitud dada.

La contraseña debe incluir letras mayúsculas, minúsculas, números y símbolos.

Ejemplo:

```js
generarPassword(10); 
// ➞ "aD3$kf9!sP"
```