# Problema de la Suma de Múltiplos

Este tipo de problema es bastante común en programación y matemáticas, y consiste en encontrar la suma de todos los múltiplos de un número **X** que sean menores o iguales a un número **N**.

---

## Nombre Formal

En términos más formales, este problema puede ser referido como:

- **Suma de Múltiplos de X hasta N**

- **Suma de una Serie de Múltiplos**

- **Suma de una Progresión Aritmética** (ya que los múltiplos forman una progresión aritmética donde la diferencia común es **X**).

---

### Descripción del Problema

Dados dos números **X** y **N**, el objetivo es encontrar la suma de todos los múltiplos de **X** que sean menores o iguales a **N**.

**Ejemplo:**

- Si **X = 3** y **N = 10**, los múltiplos de 3 menores o iguales a 10 son: **3, 6, 9**.

- La suma de estos múltiplos es: **3 + 6 + 9 = 18**.

---

## Enfoques para Resolver el Problema

### 1. **Enfoque Iterativo**

- Usar un bucle para iterar desde **X** hasta **N**.

- Sumar los números que sean múltiplos de **X**.

**Código en JavaScript:**

```js
function sumaMultiplos(X, N) {
  let suma = 0;
  for (let i = X; i <= N; i += X) {
    suma += i;
  }
  return suma;
}

console.log(sumaMultiplos(3, 10)); // Output: 18
```

### 2. **Enfoque Matemático (Fórmula de Progresión Aritmética)**

- Los múltiplos de **X** forman una progresión aritmética: **X, 2X, 3X, ..., kX**, donde **kX ≤ N**.

- El número de términos (**k**) es: **k = Math.floor(N / X)**.

- La suma de una progresión aritmética se calcula con la fórmula:

  S=k⋅(X+kX)2S=2k⋅(X+kX)​

**Código en JavaScript:**

```js
function sumaMultiplos(X, N) {
  const k = Math.floor(N / X);
  return (k * (X + k * X)) / 2;
  console.log(sumaMultiplos(3, 10)); // Output: 18
}
```

---

## Aplicaciones del Problema

Este tipo de problema es útil en:

1.  **Matemáticas Discretas**: Para calcular sumas de series.

2.  **Programación Competitiva**: Es un problema común en competencias de programación.

3.  **Optimización de Algoritmos**: Ayuda a entender cómo mejorar la eficiencia de un algoritmo (por ejemplo, usar una fórmula matemática en lugar de un bucle).

---

## Variantes del Problema

1. **Suma de Múltiplos de Varios Números**:
    - Por ejemplo, sumar los múltiplos de 3 **o** 5 menores que 1000 (un problema famoso del Proyecto Euler).

2. **Suma de Múltiplos en un Rango**:
    - Sumar los múltiplos de **X** entre dos números **A** y **B** (en lugar de desde **X** hasta **N**).

3.  **Suma de Múltiplos Excluyendo Ciertos Números**:
    - Sumar los múltiplos de **X** pero excluir los que también son múltiplos de otro número **Y**.

---

## Conclusión

El problema de la **Suma de Múltiplos** es un ejercicio clásico que combina conceptos de programación y matemáticas. Puedes resolverlo de manera iterativa (con bucles) o de manera eficiente usando fórmulas matemáticas. ¡Es un excelente problema para practicar!
