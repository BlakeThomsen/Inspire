import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawQuote() {
  console.log("THE QUOTE MAN SAYS:", store.State.quote);
  let quote = store.State.quote;
  document.getElementById("quote").innerHTML = quote.quoteTemplate;
}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQuote);
    QuoteService.getQuote();
  }
}
