const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkInputVal = () => {
  const numberInput = document.getElementById("number").value;
  if (numberInput === "") {
    output.textContent = "Please enter a valid number";
    return;
  } else if (numberInput < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (numberInput >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }
  return convertToRoman(parseInt(numberInput));
};

const convertToRoman = (num) => {
  let res = "";
  const romanNumbers = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const arabNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  arabNumbers.forEach((arabNum, i) => {
    while (num >= arabNum) {
      res += romanNumbers[i];
      num -= arabNum;
    }
  });
  output.textContent = res;
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputVal();
});