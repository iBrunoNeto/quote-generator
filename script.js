let apiQuotes = [];

//Show New Quote
function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}

//  //API
 async function getQuotes() {
     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
         try {
             const response = await fetch(apiUrl);
             apiQuotes = await response.json();
             newQuote();
         } catch(error) {
        }
    }
 
 //Load
 getQuotes();
//newQuote();