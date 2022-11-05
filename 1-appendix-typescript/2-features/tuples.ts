const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// tuple
const pepsi = ["brown", true, 40];
pepsi[2] = "brown"; // works fine

type Drink = [string, boolean, number];
const sprite: Drink = ["brown", true, 50];
// sprite[2] = \'brown\' // gives error

// unsafe use of tuples
// what do these values mean?
const carSpecs: [number, number] = [400, 3354];
