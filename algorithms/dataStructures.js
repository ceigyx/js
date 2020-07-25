const { loadavg } = require('os');

const age = [30, 29, 54];

age.push(60); // Time complexity: O(1) / constant

age.unshift(11); // Time complexity: O(n) / Linear

const myAge = age[1]; //Time complexity: O(1) / Constant

// -------

const namePopularity = [
  {
    userName: 'Max',
    usages: 5,
  },
  {
    userName: 'Manu',
    usages: 6,
  },
];


const manuUsages = namePopularity.find(pers => pers.userName === 'manu').usages;
// Best case? Find it first execution / Constant O(1)
// Worst case? Go through every item / Linear O(n)
// Average case? Linear O(n)

//why not use a better data structure: map

const nameMap = {
    'max': 5,
    'manu': 6
};

const manuUsages2 = nameMap['manu']; 
// Constant Time Complexity / O(1) since it is direct access

// const nameRealMap = new Map(); <-- could use this too
// or use 'new Set()' for unique keys