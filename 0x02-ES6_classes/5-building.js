/* eslint-disable no-underscore-dangle */

// `Building` "abstract" class implementation
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // The evacuationWarningMessage method must be overrided by a subclass
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must '
      + 'override evacuationWarningMessage');
    }
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }
}
