const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const otherRandomNumber = Math.random()

if (randomNumber > 0.7) {
    alert(`random number '${randomNumber}' is greater than 0.7`);
}

const arr = [1,2,3,4,5,6,7,8,9,10];

for (let i = arr.length; i-1 >= 0; i--) {
    console.log(arr[i]);
}

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

console.log(randomNumber, otherRandomNumber);
if ((randomNumber > 0.7 && otherRandomNumber > 0.7) || 
    (randomNumber < 0.2 || otherRandomNumber < 0.2)) {
    alert("assignment condition 4 has been met")
}