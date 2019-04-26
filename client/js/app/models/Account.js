class Account {

  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  update(tax) {
    throw new Error('O método update dever ser implementado!')
  }
}