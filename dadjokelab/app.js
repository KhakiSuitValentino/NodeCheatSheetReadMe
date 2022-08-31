const url = "https://icanhazdadjoke.com"

const options = {
    headers: {
        'Accept': 'application/json'
    }
}

// Testing:
// fetch(url, options)
//     .then(response => {
//         return response.json()
//     })
//     .then(console.log)
//     .catch(console.warn)

document.addEventListener('DOMContentLoaded', () => {
    const jokeArea = document.querySelector('#joke-area')
    const jokeButton = document.querySelector('#joke-button')
    jokeButton.addEventListener('click', () => {
        //clear out the joke area
        while(jokeArea.firstChild) {
            jokeArea.removeChild(jokeArea.firstChild)
        }
        //fetch a joke
        fetch(url, options)
        //jsonify the response
        //'implicit return arrow function'
        .then(response => response.json())
        //append the joke to the joke area
        .then(jokeJson => {
            console.log(jokeJson.joke)
            //create a P tag 
            const pTag = document.createElement('p')
            //set the text of the p tag to be the Dad joke
            pTag.innerText = jokeJson.joke
            //append the p to the joke area
            jokeArea.append(pTag)
            //make new image tag for the joke image
            const imgTag = document.createElement('img')
            imgTag.src = `https://icanhazdadjoke.com/j/${jokeJson.id}.png`
            imgTag.alt = jokeJson.joke
            jokeArea.append(pTag, imgTag)
        })
        //catch & handle errors
        .catch(err => {
            console.warn(err)
            //display error message to user
            const pTag = document.createElement('p')
            pTag.innerText = "Oops, there was a fetch error"
            jokeArea.append(pTag)
        })
    })
})