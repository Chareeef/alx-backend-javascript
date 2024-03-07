// `Airport` class implementation
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // name getter
  get name() {
    return this._name;
  }

  // code getter
  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
