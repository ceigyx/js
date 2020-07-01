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
  let operator;
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  if (!enteredNumber) {
    console.log("error: cannot divide by zero")
    return
  } else if (calculationType === "add") {
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
  } else {
    console.log("error: operation not supported")
    return
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

//getters
function getUserInput() {
  return parseInt(userInput.value);
}

//attach event listners to buttons
addBtn.addEventListener("click", function(){
  calculateResult("add");
});
subtractBtn.addEventListener("click", function(){
  calculateResult("subtract");
});
multiplyBtn.addEventListener("click", function(){
  calculateResult("multiply");
});
divideBtn.addEventListener("click", function(){
  calculateResult("divide");
});
