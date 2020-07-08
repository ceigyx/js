const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//part 1

const filterArr1 = arr1.filter((a) => a > 5);
const mapArr1 = arr1.map((a) => ({ value: a }));
const reduceArr1 = arr1.reduce((a, b) => (a *= b));

console.log(filterArr1, mapArr1, reduceArr1);

//part 2

const findMax = (...argList) => {
  let max = argList[0];
  arr1.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
};

console.log(findMax(...arr1));

//part 3

const findMinMax = (...argList) => {
  let minMax = [argList[0], argList[0]];
  arr1.forEach((num) => {
    if (num > minMax[1]) {
      minMax[1] = num;
    }
    if (num < minMax[0]) {
      minMax[0] = num;
    }
  });
  return minMax;
};

console.log(findMinMax(...arr1));

//part 4
const items = ["a", "b", "c"];

const list = (...argList) => {
  const newSet = new Set();
  argList.forEach((element) => {
    newSet.add(element);
  });
  return newSet;
};

const newList = list(...items);

console.log(newList);
console.log(newList.add("b"));
