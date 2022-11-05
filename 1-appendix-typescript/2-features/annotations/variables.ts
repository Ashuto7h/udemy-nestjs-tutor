let apples = 5;

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 4];
let truths: boolean[] = [true, false, true];

// classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
      x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
      console.log(i);
};

// when to use annotations
// 1. functions that return any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// any type - typescript has no idea what could be the type.
// avoid variables with any type at all costs

//  2. when we declare a variable somewhere and assign it later
let words: string[];
words = ["red", "green"];

// 3. when we have variable which can have multi type values whose types can not be inferred;
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (const number of numbers) {
      if (number > 0) {
        numberAboveZero = number;
  }
}

// type inference for functions
