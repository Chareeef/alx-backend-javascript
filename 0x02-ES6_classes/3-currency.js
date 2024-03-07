/* eslint-disable no-underscore-dangle */

// `Currency` class implementation
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // code getter
  get code() {
    return this._code;
  }

  // code setter
  set code(val) {
    this._code = val;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(val) {
    this._name = val;
  }

  // Display the code (e.g.: `Dollars ($)`)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
