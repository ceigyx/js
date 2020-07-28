const array = [1, 2, 3];

function sumUp(numbers) {
    let sum = 0; // Constant time (1)

    for (let i = 0; i < numbers.length; i++) { // N times execution (awlays)
        sum += numbers[i];                      // Linear
    }

    return sum; // Constant time (1)
}

// Time = Linear = O(n)

console.log(sumUp(array)); // 6