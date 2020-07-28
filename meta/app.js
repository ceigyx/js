//Library land
const uid = Symbol();

console.log(uid);

const person = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User',
};

//App land => using Library
person.id = 'p2'; // should not be possible!
console.log(person.toString());

const company = {
//   curEmployee: 0,
  employees: ['max', 'manu', 'anna'],
//   next() {
//     if (this.curEmployee >= this.employees.length) {
//       return { value: this.curEmployee, done: true };
//     }
//     const returnValue = {
//       value: this.employees[this.curEmployee],
//       done: false,
//     };
//     this.curEmployee++;
//     return returnValue;
//   },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
        yield this.employees[currentEmployee];
        currentEmployee++;
    }

  },
};

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (const employee of company) {
    console.log(employee);
}

// ---

const  course = {
    title: 'javascript - beginner to advanced',
};

// Reflect.setPrototypeOf(course, {toString() {return this.title}});
// console.log(course.toString());

// console.log(course);

const courseHandler = {
    get(obj, propertyName) {
        console.log('runtime access: ' + propertyName);
        return obj[propertyName];
    },
    set(obj, propertyName, newValue) {
        if (propertyName === 'rating') {
            return;
        }
        obj[propertyName] = newValue;
    }
}

const pCourse = new Proxy(course, courseHandler);

console.log(pCourse.title);
