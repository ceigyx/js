function isEvenOrOdd(number) { // code only runs once, no loop
    return number % 2 ? "EVEN" : "ODD";
}

// Time = constant = O(1)

console.log(isEvenOrOdd(10)); //EVEN
console.log(isEvenOrOdd(11)); //ODD