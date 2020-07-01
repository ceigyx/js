// Globals
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Logger
function writeToLog(
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult) {
    logEntries.push({
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult,
    });
    console.log(logEntries);
  }

// Renderer
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //vendor.js
}

//Math operations
function calculateResult(calculationType) {
  let operator = "";
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  if (calculationType === "add") {
    currentResult += +userInput.value;
    operator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= +userInput.value;
    operator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= +userInput.value;
    operator = "*";
  } else if (calculationType === "divide") {
    currentResult /= +userInput.value;
    operator = "/";
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("add");
}

function subtract() {
  calculateResult("subtract");
}

function multiply() {
  calculateResult("multiply");
}

function divide() {
  calculateResult("divide");
}

//getters
function getUserInput() {
  return parseInt(userInput.value);
}

//attach event listners to buttons
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
