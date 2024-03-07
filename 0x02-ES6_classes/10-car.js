// `Car` class implementation
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Clone the car
  cloneCar() {
    return new this.constructor();
  }
}
