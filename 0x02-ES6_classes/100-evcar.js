import Car from './10-car';

// `EVCar` class implementation (extending Car)
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Generate a new `Car` instance
  cloneCar() {
    let car;

    if (this.constructor === EVCar || this.constructor === Car) {
      car = new Car();
    }

    return car;
  }
}
