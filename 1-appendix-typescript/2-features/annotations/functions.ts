const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const throwError = (message: string): never => {
  throw new Error(message);
};

// difference between void and never
let something: void = undefined;
let nothing: never = undefined; // gives error

// destructuring annotations
const logWeather = ({ date, status }: { date: Date; status: string }) => {
  console.log({ date, status });
};
