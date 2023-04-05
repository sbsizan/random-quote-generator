const button = document.getElementById('btn');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');




const fetchUrl = 'https://api.quotable.io/random';
button.addEventListener('click', async () =>{

    try {
        quoteElement.innerText = `Generating Quote...`
        authorElement.innerText = `Waiting...`
        const response = await fetch(fetchUrl)
        const data = await response.json()

        const quote = data.content;
        const author = data.author;

        quoteElement.innerText = `${quote}`;
        authorElement.innerText = `~ ${author}`;
    } catch (error) {
        quoteElement.innerHTML = `<i class = 'alert'>Something Wrong. Please try again later.</i>`
        authorElement.innerText = `Something Wrong.`
    }
})