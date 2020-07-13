// build random generator between x and y

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
  console.log(productPrice, productName, strings);
  let priceCategory = "cheap"
  if (productPrice > 20) {
      priceCategory = "fair";
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = "js course";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

// RegEx
//verify email example
const userInput = "testtest.com";
//standard string methods
userInput.includes("@");
//or
const regex = /^\S+@\S+\.\S+$/

console.log(regex.test(userInput)); //incorrect
console.log(regex.test("test@test.com")); //correct

