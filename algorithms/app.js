function getMin(numbers) {
  if (!numbers.length) { // 1 execution
    throw new Error('should not be an empty array!');
  }

  let currentMinimum = numbers[0]; // 1 execution (unless throw error)

  for (let i = 1; i < numbers.length; i++) {// loop = 1 execution
    if (numbers[i] < currentMinimum) {      // 2 executions
      currentMinimum = numbers[i];          // 0 - 2 executions
    }
  }

  return currentMinimum; // 1 execution
}

// Time = 1(constant) + 2(variable: n - 1) + 1(constant)
// Time = / + (variable: n - 1) + /
// Time = n = linear time complexity = O(n)

const testNumbers1 = [2, 1, 3, 0, 4, 4, 1, 3, 5];
const testNumbers2 = [];
const testNumbers3 = [5];
const testNumbers4 = [-5, 4000, 2, 0, 4];


console.log(getMin(testNumbers1));
// console.log(getMin(testNumbers2));
console.log(getMin(testNumbers3));
console.log(getMin(testNumbers4));
