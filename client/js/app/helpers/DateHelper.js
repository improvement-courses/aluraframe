class DateHelper {

  constructor() {
    throw new Error('Esta classe não pode ser instânciada!');
  }

  static dateForText(date) {
    return `${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() }`;
  }

  static textForDate(text) {
    if (!/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error('Deve ser no formato aaaa-MM-dd');
    return new Date(text.split('-').map((item, index) => item - index % 2));
  } 
}