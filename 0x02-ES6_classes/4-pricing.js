// `Pricing` class implementation
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // amount getter
  get amount() {
    return this._amount;
  }

  // amount setter
  set amount(value) {
    this._amount = value;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // currency setter
  set currency(cur) {
    this._currency = cur;
  }

  // Display full price (ex: `20 Dollars ($)`)
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Convert the price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
