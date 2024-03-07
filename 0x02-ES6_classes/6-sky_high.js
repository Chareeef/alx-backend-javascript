import Building from './5-building';

// `SkyHighBuilding` class implementation
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // floors getter
  get floors() {
    return this._floors;
  }

  // Return Warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
