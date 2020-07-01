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
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += +userInput.value;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("add", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= +userInput.value;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("subtract", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= +userInput.value;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("multiply", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= +userInput.value;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("divide", initialResult, enteredNumber, currentResult);
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
