// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(3, 5));

// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax;
//   }

//   return calculateTax;
// }

// const calculateVatAmount = createTaxCalculator(0.19);
// const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// console.log(calculateIncomeTaxAmount(100), calculateVatAmount(100));

// closures ::

// let userName = "max";

// function greetUser() {
//     // let name = "brandon";
//     console.log(`Hi ${name}`);
// }

// let name = "maxi";
// userName = "linBa";

// greetUser();

// recursion ::

// function powerOf(value, power) {
//     let result = 1;

//     for (let i = 0; i < power; i++) {
//         result *= value;
//     }

//     return result;
// }

function powerOf(value, power) {
  return power === 1 ? value : value * powerOf(value, power - 1);
}

console.log(powerOf(2, 3));


const myself = {
    name: "linba",
    friends: [
        {
            name: "brandon",
            friends: [
                {
                    name: "jimbo"
                },
                {
                    name: "memile"
                }
            ]
        }
    ]
}

function printFriendNames(person) {
    let collectedNames = [];
    console.log(person.name);
    
    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...printFriendNames(friend))
    }
    return collectedNames
}

console.log(printFriendNames(myself));