function getMin(numbers) {
  if (!numbers.length) { //1 execution
    throw new Error('Should not be an empty array!');
  }

  for (let i = 0; i < numbers.length; i++) { // n executions
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) { //n - 1 executions
      let innerElement = numbers[j];

      if (outerElement > innerElement) { // 1 execution
        // swap
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0]; // 1 execution
}

// Time = 1 + n * (n - 1) + 1
// Time = 2n - n = O(n^2 - n) = O(n^2 = Quadratic)
// Best case = O(n^2) - a few constants
// Worst case = O(n^2) +  a few constants
// Average case = O(n^2)

const testNumbers = [5, 1, 5];

const min = getMin(testNumbers);

console.log(min);
