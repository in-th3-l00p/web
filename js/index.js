//simple random number generator
function random(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

//gets a random item from an object
function randomItem(object) {
    let keys = Object.keys(object)
    return object[keys[random(0, keys.length)]]
}

async function setQuote() {
    //opening the .json file
    let quotesRespouse = await fetch("resources/quotes.json")
    let quotes = await quotesRespouse.json()

    //getting the html elements
    let paragraph = document.getElementById("indexQuote")
    let image = document.getElementById("quoteImage")
    if (paragraph == null || image == null) {
        return
    }

    //getting a random quote
    var movie = randomItem(quotes)
    image.src = "resources/quote-gifs/" + movie[1][random(0, movie[1].length)]
    paragraph.innerHTML = movie[0][random(0, movie[0].length)]
}

setQuote()
