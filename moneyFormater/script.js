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