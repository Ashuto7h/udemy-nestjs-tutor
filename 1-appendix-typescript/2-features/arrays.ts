const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// help with  inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);  // gives error

carMakers.forEach((car: string) => {
  return car.toUpperCase();
});

// flexible types
const importantDates = [new Date(), "2030-10-10", 10];
importantDates.push(1);
importantDates.push(new Date());
