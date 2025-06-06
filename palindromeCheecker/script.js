let textInput = "";
const btn = document.getElementById("check-btn");
let result = document.getElementById("result");
const emptyInput = () => {
  let inputValue = document.getElementById("text-input").value;
  if (inputValue) {
    textInput = inputValue;
    formatText(inputValue);
  } else {
    alert("Please input a value");
  }
};
const formatText = (str) => {
  const formatedText = String(str.replace(/[^a-z0-9]/gi, "").toLowerCase(""));
  const reversedText = Array.from(formatedText).reverse().join("");
  if (reversedText == formatedText) {
    result.innerText = `${textInput} is a Palindrome`;
  } else {
    result.innerText = `${textInput} is not a Palindrome`;
  }
};
btn.addEventListener("click", emptyInput);
