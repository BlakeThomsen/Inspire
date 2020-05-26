export default class Quote {
  constructor(data) {
    this.id = data.quote.id;
    this.name = data.quote.body;
  }
  get quoteTemplate() {
    return `<h2 class="text-light dropshadow">${this.name}</h2>`;
  }
}
