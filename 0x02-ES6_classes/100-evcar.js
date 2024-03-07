import Car from "./10-car.js";

// `EVCar` class implementation (extending Car)
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Generate a new `Car` instance
  cloneCar() {
    return new Car();
  }
}
