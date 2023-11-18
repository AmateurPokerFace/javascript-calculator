let multiplyButton = document.querySelector(".btn-multiply");
let divisionButton = document.querySelector(".btn-divide");
let additionButton = document.querySelector(".btn-add");
let subtractionButton = document.querySelector(".btn-subtract");
let calculateButton = document.querySelector(".btn-equals");
let eraseOneCharButton = document.querySelector(".btn-arrow");

let calculatorDisplayValue = document.querySelector(
  "#calculator-display-value"
);
let clearButton = document.querySelector(".btn-erase");

let numericButtons = document.querySelectorAll(".btn-numeric");
let mathSymbols = document.querySelectorAll(".btn-math-symbol");
let equalsButton = document.querySelector(".btn-equals");

let displayValue = 0;
let valuesArray = [];

for (let i = 0; i < numericButtons.length; i++) {
  numericButtons[i].addEventListener("click", function () {
    calculatorDisplayValue.textContent += numericButtons[i].textContent;
  });
}

multiplyButton.addEventListener("click", function () {
  calculatorDisplayValue.textContent += "*";
});

divisionButton.addEventListener("click", function () {
  calculatorDisplayValue.textContent += "/";
});

additionButton.addEventListener("click", function () {
  calculatorDisplayValue.textContent += "+";
});

subtractionButton.addEventListener("click", function () {
  calculatorDisplayValue.textContent += "-";
});

clearButton.addEventListener("click", function () {
  calculatorDisplayValue.textContent = "";
});

eraseOneCharButton.addEventListener("click", function () {
  if (calculatorDisplayValue.innerText.length > 0) {
    console.log("true");
    calculatorDisplayValue.textContent =
      calculatorDisplayValue.textContent.slice(0, -1);
  } else {
    console.log(false);
  }
});

calculateButton.addEventListener("click", function () {
  try {
    let val = eval(calculatorDisplayValue.textContent);
    console.log(val);
    calculatorDisplayValue.textContent = val;
  } catch {
    calculatorDisplayValue.textContent = "";
    alert("NaN");
  }
});
