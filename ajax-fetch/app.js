// console.log('thats so fetch');

// //API : Application Programming Interface, or Application Protocol Interface. It's a piece of software designed to talk to another piece of software. The DOM is an API because it's a piece of software meant to talk to JS, HTML, and CSS.

// //DATA API: a piece of software designed to send data over the internet.

// // https://swapi.dev/api/films/

// // window.fetch() to retrieve data from our data API url
// fetch('https://swapi.dev/api/films/')
//     // Promises: handle asynchronicity in Javascript
//     // dot then syntax
//     .then(responseData => {
//         //this callback will not run until the 'promise resolves' meaning no errors have occurred
//         // convert the data payload into JSON
//         // console.log(responseData);
//         // returning another promise from this 'dot then'
//         return responseData.json();
//     })
//     .then(jsonData => {

//     //console.log(jsonData.results)
//     //grab the document body
//         const body = document.querySelector('body');
//         console.log(body)
//         jsonData.results.forEach(result => {
//             //make a div
//             const div = document.createElement('div');
//             //make an h2 for the title
//             const h2 = document.createElement('h2');
//             h2.innerText = result.title;
//             //make a p tag for the opening crawl
//             const p = document.createElement('p');
//             p.innerText = result.opening_crawl;
//             // console.log(result.title);
//             // console.log(result.opening_crawl);
//             div.append(h2, p);
//             body.append(div);
//         })
//     })

//     // dot catch is where errors from fetch wind up
//     .catch(error => {
//         console.warn('fetch error:', error)
//     })

//     const redditUrl = 'https://www.reddit.com/search.json?q=kittens'
//     //step 1 : fetch data
//     fetch(redditUrl)
//     //step 2: jsonify data
//     .then(redditData => {
//         return redditData.json()
//     })
//     //step 3: do something with json data
//     .then(jsonData =>{
//         const body = document.querySelector('body');
//         const img= document.createElement('img');
//         img.src = jsonData.data.children[2].data.thumbnail;
//         img.alt = jsonData.data.children[2].data.title;
//         body.append(img);
//     })
//     //step 4: be a good program and handle your errors
//     .catch(err => console.warn(err))

document.addEventListener('DOMContentLoaded', () => {
    //DOM selectors:
    const form = document.querySelector('form')
    const numInput = document.querySelector('#num-input')
    const peopleList = document.querySelector('#people-list')
    // console.log(form, numInput, peopleList)
    //when form is submitted, grab value from input and make some fetch happen
    form.addEventListener('submit', e => {
        e.preventDefault()
        const peopleUrl = `https://randomuser.me/api/?results=${numInput.value}`
        // console.log(peopleUrl)
        //step 1: fetch data
        fetch(peopleUrl)
        //step 2: jsonify data
        .then(peopleData => {
            return peopleData.json()
        })
        //step 3: do something with json data
        .then(peepzJson => {
            peepzJson.results.forEach(result => {
                // console.log(result.picture.large)
                const name = `${result.name.title} ${result.name.first} ${result.name.last}`
                // console.log(name)
                const div = document.createElement('div')
                const h3 = document.createElement('h3')
                h3.innerText = name
                const img = document.createElement('img')
                img.src = result.picture.large
                img.alt = name
                li.append(img, h3)
                peopleList.append(li)

            })
        })
        //step 4: be a good programmer and handle errors
        .catch(console.warn)
    })
})