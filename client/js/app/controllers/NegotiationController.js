class NegotiationController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputAmount = $('#amount');

    this._listNegotiations = new ListNegotiations();

    this._negotiationsView = new NegotiationsView($('#negotiationsView'));
    this._negotiationsView.update(this._listNegotiations);

    this._message = new Message();
    this._messageView = new MessageView($('#messageView'));
    this._messageView.update(this._message);
  }
  
  add(event) {
    
    event.preventDefault();
    this._listNegotiations.add(this._createNegotiation());
    this._negotiationsView.update(this._listNegotiations);

    this._message.message = 'Negociação adicionada com sucesso!';
    this._messageView.update(this._message);

    this._cleanForm();
  }

  _createNegotiation() {
    return new Negotiation(
      DateHelper.textForDate(this._inputDate.value),
      this._inputQuantity.value,
      this._inputAmount.value
    );
  }

  _cleanForm() {
    this._inputDate.value = '';
    this._inputQuantity.value = 1;
    this._inputAmount.value = 0.0;

    this._inputDate.focus();
  }
}