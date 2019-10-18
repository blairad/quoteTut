var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
    fetch(endpoint)
    //.then is a promise that after we fetch this end point we'll run this function
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayQuote(data.message);
      })
      .catch(function () {
            console.log("An error occured");
      });
  }
//   The simplest use of fetch takes a single argument - the url to the resource you want to fetch - and returns what is known as a Promise.

//   The first .then() block converts the raw response into JSON (since that’s what we are expecting from What Does Trump Thinks). To use the actual data, we need to chain another .then() method and then access the data from there.
  
//   The catch block executes only if the fetch request or any of the then blocks above it throw an error. In a real-world application, you will need to handle errors properly, perhaps by showing a notification to the user, but logging text to the console would suffice for our purposes here.
function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
  }

const newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);
getQuote();