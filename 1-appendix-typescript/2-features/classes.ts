class Vehicle {
  constructor(protected color: string) {}
  protected drive(): void {
    console.log("broom broom");
  }
  honk(): void {
    console.log("beep");
  }
}
class Auto extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vroom vroom", this.color);
  }
}
const vehicle = new Vehicle("orange");
vehicle.honk();
const auto = new Auto(4, "red");
auto.drive();
auto.honk();
