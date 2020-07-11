class Course {
  #price = 0;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    // this.#price = price;
    this.setPrice = price;
  }

  set setPrice(price = 0) {
    if (price > 0) {
      this.#price = price;
    }
  }

  get dollarValue() {
    return `\$${this.#price}`;
  }

  value() {
    if (this.#price === 0) {
      return "Best Value - Infinite..!";
    }
    return this.length / this.price;
  }

  summary() {
    return `${this.title} over ${this.length} hours at a price of ${this.dollarValue}`;
  }
}

class PracticalCourse extends Course {
  constructor(numOfExercise, title, length, price) {
    super(title, length, price);
    this.numOfExercise = numOfExercise;
  }

  getNumOfExercise() {
    return `total of ${this.numOfExercise} exercises`;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    return `${this.title} - Theoretical - Publication: `;
  }
}

const course1 = new PracticalCourse(
  100,
  "javascript begginer to advanced",
  53,
  0
);

const course2 = new TheoreticalCourse(
  "nodejs and react, begginer to advanced",
  30,
  0
);

console.log(course1);
console.log(course1.value(), course1.summary());
console.log(course1.getNumOfExercise());
console.log(course2.publish());
