const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}
    Year: ${this.year}
    Broken?: ${this.broken}`;
  },
};

interface Reportable {
  summary(): string;
}

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}
    Carbonated?: ${this.carbonated}
    Sugar: ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink2);
