// `HolbertonClass` class implementation
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // size getter
  get size() {
    return this._size;
  }

  // location getter
  get location() {
    return this._location;
  }

  // override string representation
  toString() {
    return this.location;
  }

  // override numeric representation
  valueOf() {
    return this.size;
  }
}
