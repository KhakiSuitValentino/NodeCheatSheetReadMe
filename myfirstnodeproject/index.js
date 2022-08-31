//we need to require our module here with require, feeding it a string of the path to the file we are using

// let myModule = require('./myModule')

// myModule.beBasic()
// myModule.count()
// console.log(myModule.secretToLifeTheUniverseAndEverything)


//There are built in modules as well- here is the File System 'fs' module at work:

// let fs = require('fs')
// fs.readFile('story.txt', 'utf8', function(err, data) {
//     if(err) {
//         console.log('There was a problem reading this file.')
//     } else {
//         console.log(data)
//     }
// })

// fs.writeFile('story.txt', 'while I pondered, weak and weary', function(err) {
//     if(err) {
//         console.log('whoops')
//     } else {
//         console.log('you did it')
//     }
// })

//let's create an HTTP core module
let http = require('http')

let host = 'localhost'
let port = 8000

let server = http.createServer()

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
    console.log('hello world!')
})