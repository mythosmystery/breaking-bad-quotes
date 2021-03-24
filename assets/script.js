var author1El = $("#author1");
var quote1El = $("#quote1");
var author2El = $("#author2");
var quote2El = $("#quote2");

var quoteAuthor;
var quote;
var quoteId;

getJesseQuote();
getSaulQuote();

function getJesseQuote(){
   fetch("https://www.breakingbadapi.com/api/quote/random?author=Jesse+Pinkman")
   .then(function (resp) {
      return resp.json();
   }) // Convert data to json
   .then(function (data) {
      quoteAuthor = data[0].author;
      quote = data[0].quote;
      quoteId = data[0].quote_id;

      console.log(data);
      console.log(quote);
      console.log(quoteAuthor);
      console.log(quoteId);
      author1El.text(quoteAuthor);
      quote1El.text(quote);
   })
   .catch(function () {
      // catch any errors
   });
}
function getSaulQuote(){
   fetch("https://www.breakingbadapi.com/api/quote/random?author=Saul+Goodman")
   .then(function (resp) {
      return resp.json();
   }) // Convert data to json
   .then(function (data) {
      quoteAuthor = data[0].author;
      quote = data[0].quote;
      quoteId = data[0].quote_id;

      console.log(data);
      console.log(quote);
      console.log(quoteAuthor);
      console.log(quoteId);
      author2El.text(quoteAuthor);
      quote2El.text(quote);
   })
   .catch(function () {
      // catch any errors
   });
}


