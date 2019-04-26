class Negotiation {

  constructor(date, quantity, amount) {
    this._date = new Date(date.getTime());
    this._quantity = quantity;
    this._amount = amount;
    Object.freeze(this);
  }

  get date() {
    return this._date;
  }

  get quantity() {
    return this._quantity;
  }

  get amount() {
    return this._amount
  }

  get volume() {
    return this._quantity * this._amount;
  }
}