class SavingsAccount extends Account {

  constructor(balance) {
    super(balance);
  }

  update(tax) {
    this._balance += (tax * 2);
  }
}
