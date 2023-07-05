const btnEl=document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const qouteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


async function getQuote(){

    try {
    btnEl.innerText ="Loading...";
    btnEl.disabled =true;
    qouteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data =  await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    qouteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText ="Get a quote";
    btnEl.disabled =false;
    console.log(data);
        
    } catch (error) {
       console.log(error);
       qouteEl.innerText = "an error happened, try again later";
       authorEl.innerText = "an error happened";
       btnEl.innerText ="true";
       btnEl.disabled =true;
    }
   
    
}
getQuote()

btnEl.addEventListener("click",getQuote);
