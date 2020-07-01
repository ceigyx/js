const defaultResult = 0;
let currentResult = defaultResult;

// Render 

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //vendor.js
}

//Math operations

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += +userInput.value;
  createAndWriteOutput("+", initialResult, enteredNumber)
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= +userInput.value;
  createAndWriteOutput("-", initialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= +userInput.value;
  createAndWriteOutput("*", initialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= +userInput.value;
  createAndWriteOutput("/", initialResult, enteredNumber)
}

//getters
function getUserInput() {
  return parseInt(userInput.value);
}

//attach event listners to buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
