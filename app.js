//declaring and initializing variables; var, let & const

var newVariable = 'this is a string'
newVariable = newVariable + `. string is now concatenated.`
console.log(newVariable)

if(true){
    var newestVariable = 1
    console.log(newestVariable)
}

let newLetVal = 1
if(true){
    newLetVal += 0
    console.log(newLetVal)
}

newLetVal = -1
console.log(newLetVal)

const constantVal = 2
newLetVal = constantVal
console.log(newLetVal)

newLetVal += 2
console.log(newLetVal)

//global and local scoped variables
var simpleVar = 'global variable'
function globalMod(){
    simpleVar = 'global variable accessed locally'
    console.log(simpleVar)
}
globalMod()

function localMod(){
    let localVar = 'local/function scoped'
    console.log(localVar)
}
localMod()




//strings
const newString = 'this is a constant variable'
function manageConst(){
    let editConst = newString
    editConst = 'this constant has been modifiied'
    console.log(editConst)
}
manageConst()

//short circuiting
simpleVar = 1
if(simpleVar && true){//no need to interpret further condition
    console.log(`the value is ${simpleVar}`)
}

simpleVar = false
var boolVar = true

if(simpleVar && true){
    console.log(`${boolVar}`)
}else{
    console.log(`${simpleVar}`)
}

if(simpleVar || false){
    console.log(`${boolVar}`)
}else{
    console.log(`${simpleVar}`)
}

//ternary; check for initial truthy values
console.log(simpleVar ? boolVar : 'falsy value identified')

simpleVar = {
    firstKey: `${simpleVar}`,
    secondKey: `${boolVar}`
}
// console.log(simpleVar.firstKey)
// console.log(simpleVar.secondKey)

//simpleVar.firstKey === false
simpleVar.firstKey === true ? console.log(true) : console.log(false)

//conditionals
simpleVar = [
    'javaScript',
    'react.js',
    'node.js'
]

let valueContained = simpleVar.includes('javaScript')

for(let i = 0; i < simpleVar.length; i++){
    if(simpleVar){
        console.log(`array value contained: ${valueContained}`)
    }else{
        console.log(false)
    }
}

valueContained = simpleVar.includes('react.js')

for(let i = 0; i < simpleVar.length;i++){
    if(simpleVar){
        console.log(`array value contained: ${valueContained}`)
    }else{
        console.log(false)
    }
}

//switch statement
switch(valueContained){
    case 'javaScript':
        console.log('javaScript selected')
        break;
    case 'python':
        console.log('python selected')
        break;
    case 'css':
        console.log('css selected')
        break;
    case 'react.js':
        console.log('react.js selected')
        break;
    case valueContained:
        console.log(`all values contained: ${valueContained}`)
        break;
    default:
        console.error('error 404: not found')      
}

//template literals/concatenation
console.log(`${valueContained}`)


//functions/arrow functions; global/local variables
/*simpleVar will always be considered
a global variable
*/

simpleVar = function(){
    console.log(`this function logs out a ${valueContained} value.`)
}
simpleVar()

/*
simpleVar will always be considered
a global variable
*/

simpleVar = 'this is now a truthy value'

valueContained = () =>{
    if(simpleVar){
        console.log(`${simpleVar}`)
    }else{
        console.log(false)
    }
}
valueContained()








/*
//JavaScript and ES6//


Variables

- var; Declares a variable, optionally initializing it to a value.

- var; variables declared using var are created before any code is 
executed in a process known as hoisting.

- global scoped variables; A JavaScript local variable is 
declared inside block or function. It is accessible 
within the function or block only.

- local scoped variables; A JavaScript global variable 
is accessible from any function. A variable i.e. declared
outside the function or declared with window object is 
known as global variable.

- var and let variables can be reinitialized

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


Pimitive Data Types; 

- strings; padStart() & padEnd(); allows us
to add characters to start of and end of strings
- numbers
- booleans
- undefined
- null

Logic
- short circuiting
- ternary
- conditionals

- switch statements; case and parameter have to match accordingly
- template literals/concatenation; link things together
as in a series or chain.

- functions/arrow functions; accessing global variables/scope
local variable scope.

- closures/ partial application
- default parameters


- call-back functions; A callback is a function passed 
as an argument to another function
technique allows a function to call another function.
Callback function can run after another function has finished

reference types(arrays, objects, maps, sets etc.)
- object literals; destructuring, ...object spread operator


- Rest operator; function(...Rest) {console.log(Rest)} (1, 2, 3, 4, 5)
allows us to retrieve arguments from functions. Also,
allows for use of spread op, without use of object types.

- Default parameters prevents functions from returning undefined
values, by setting values to parameters in functions early on.

- the map-object; .set(), forEach(()=>{}), ...map object spread

- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
- indexOf(array-element); returns the index of an
existing array element.

Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()

- includes(); lets us 
check for a specified array element
then returns a Boolean.

- ...array spread operator; used to create a copy of original object.
and/or to add to original object.

- Creating and destructuring arrays


- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.

- constructor functions
- prototype.chaining

Classes;
- template to create objects and instances of objects 
- can update class-object properties using .notation
& their properties
- class methods/logic
- extends keyword makes child class from parent
- super(); function/method used for parent to child class inheritance
properties from parent classes.
- They encapsulate code to work on that data;
good container for application logic.

GET property (property lookup)

- The get syntax binds an object property to a function 
that will be called when that property is looked up.

STATIC keyword (for cloning or fixed-values/config)

- Static methods are often utility functions, 
such as functions to create or clone objects, 
whereas static properties are useful for caches, 
fixed-configuration, or any other data 
you don't need to be replicated across instances.






CLASS METHODS/OPERATIONS
classes;
Classes are a functions/template for creating objects
and object properties and object methods.



Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.

- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- parent and child classes need the same properties within 
their constructor.

Trailing commas
- allows commas to exist after parameters

- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events

What is the DOM?
DOM; Document Object Model; document; lives on the window.
DOM is an object that represents all of the HTML as objects that can 
be modified by js.



- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

 EVENTS & EVENT LISTENERS
    Events; actions that occur when user interacts with the keyboard, mouse etc.
    Event listeners; tools that watch/listen for when events to occur; 
    can be applied to html elements using functions.
    - add events to elements with .addEventListener(()=>{
    })

- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        element.style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;

Ajax;

Working with AJAX; asynchronus javaScript;

With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.

- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.

PROBLEMS WITH CALLBACKS

- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})

- call-back functions; A callback is a function passed as an argument to another function
call-back technique allows a function to call another function.
callback function can run after another function has finished.

- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;

- Fetch() method api; used to make an ajax network 
request to retrieve data from 
REST api architectual code.

- fetch() data from an 
api then disply it to 
the browser/web page/application.
createElement()
.innerHTML
document.body.appendChild()

- iterate(forEach, for-loop) through json
object data and use .notation
or [bracket] notation to access
and display data to the browser.

- error handling with .catch(); catches an error
when errors are present.


CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

C.R.U.D.;
CREATE; POST method; creates resource/data.
READ; GET method; retrieves data from database.
UPDATE; PUT/PATCH methods; updates data.
DELETE; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
no need for .then() or .catch() or .finally().


- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.

- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
try keyword runs code black and 'tries' to verify that code contains no errors.
catch is used to notify user that there is an error when retrieving data.
can nest a Promise inside of an async function.

- async, await;  pauses promise code 
until all requests are resolved(no use of catch).

- async functions using the fetch() api;
are used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().

- write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.

CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.

MODULES: Essential Concepts

- Modules; split up code data into multiple files while still sharing code data.
isolate js functionality when sharing code between files.
- Modules; are just outside files being brought in.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable and share variables and functions outside of a module

//Basics of Web Architecture

My computer
My ISP(internet service provider)
DNS(Domain Name System) and routers
Web Servers
Applications
Hosting

What is the internet?

- Internet is the global system of interconnected computer networks
 that uses the Internet protocol suite (TCP/IP) 
to communicate between networks and devices.
Internet search process

How the internet works

1. user makes a request for a website
2. router/modem sends request over wifi; connected to isp network
3. isp provides intenet connectivity receives request
4. isp asks DNS(Domain Named System server); like a phone book
5. DNS retrieves an address and routes traffic to isp
6. isp sends information through router and its firewalls/other protocols
7. web page is sent to end user.

//Requests

1. Requests; exist so we can tell a server what we want
and how.

2. Parts of a request;
GET - verb that requests data; request method

- two ways to classify verbs
a. safe and unsafe
b. indempotent/not indempotent

GET and HEAD are safe beacuse retrieving
and sending data are their only actions.

other verbs are unsafe; they do take an
action and change something.

GET, HEAD, PUT, DELETE - indempotent('same', 'having power')
end result of making the same request is the same no matter 
how many times the request is made.

Parts Of a Request - scheeme

http - hypertext transfer protocol
https - hypertext transfer protocol secure

other schemes

Tells browser how to send the request, and how to make sense 
of the response.

ws:// for websocket
wss:// for websocket secure
sftp:// for secure file transfer protocol

Anything up to // is the SCHEME.

Domain - assets.website.company.com

subdomain: assets.
domain: company.
tld/top level domain: com

Port - where data passes through

80 for public http traffic; assumed 
when link starts with http://

443 for public https traffic; assumed
when link starts with https://


Path - /get

tells the server what content you want.
path is optional

Query Arguments

used to filter the result.

Query parameters are a defined set of parameters attached 
to the end of a url. They are extensions of the URL that 
are used to help define specific 
content or actions based on the data being passed

Fragment Identifier

Headers

Additional information 

Body

Content of the request


//Responses

- what you get back after making a request.

Response Codes

2xx - tells user what server did with request.

200 - ok

201 - created

204 - not connected



3XX - redirection

301 - moved permanently

302 - found 

304 - not found


4xx - you're doing something wrong

400 - bad request 

401 - unauthorized

403 - forbidden

404 - not found

405 - method not allowed


5xx - server is doing it wrong

500 - internal server error

502 - bad gateway

503 - service unavailable

504 - gateway timeout


SSL/TLS

Secure Socket Layer

Transport Layer Security

HTTPS = HTTPS + TLS


Why we need TLS

To prevent maliscious entities from 
taking sensitive data and sending maliscious
software

integrity;

content was not tampered with

encryption;

content cannot be read by others

authentication;

you are actually connected to 
the server you think you are 
connected to

how is TLS implementation?

TLS is a cryptographic protocol that provides end-to-end security 
of data sent between applications over the internet.

It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears 
in web browsers when a secure session is established.


Domains, Routing, DNS
(how a computer finds data we are looking for)

Domain;

human friendly address of a website
(where a site is stored/lives)

address settings live in a 
'zone file' on the authoritative
name server for the domain.

info is public, in order for routing
to work.

registrar

registry - keeps track fo TLDs

registrar - commercial sales
of domains within TLD

name server - holds info
on settings for domain.

registrar needs to know where 
nameservers are

Routing()

DNS
(Domain Named Server)


Caching

a way to remember data

Reasons for caching
away to save network data

save cpu cycles

save database lookup

Stale data

add complexity to software 

hard to debug where something went wrong

3 types of caching
browser caching; client side
managed by browser

DNS cache 
knows all visited ip addresses

Server cache;
storing copies of previously
requested data e.g. applcation pages.




Web Servers and Applications

- handles requests
- listens to the internet
- reponses provided
- web servers respond with; 
data from applications.




Applications and Databases Relationship 

content management process;
1. user requests a page from internet
2. app/site receives request from path/
3. app needs to look up for path-data within its server
4. course data is returned to user

Relational/RDS; like excel spread sheet, columns & rows
can be crosse referenced because of related datasets.

Database and object cache; 
- 'expensive' queries
- save the result
- don't query again

How it works; 
1. user makes page request
2. timed response and return making a copy
3. later request is reponded with a saved/cached copy 
of previous request.
downside!; caches are not always updated.

Dynamic Content;
- template + data (e.g. objects);
request uses template & fills in the gaps
from the database.

Static
- previously compiled (html, css, images);
fill in gaps for each post, and save it as a 
details for a file, etc.
- rquest comes in, serves the .html/.css file, image.
no db.

example relational databases;
- MySQL
- Postgress
- Sqlite

example content management databases
Document Store; 
- AKA NoSQL
- MongoDB
- Cassandra




Hosting and serverless

Two ways to ship code

Self managed hosting
- easier to get started

Serverless
- new method
- not compatibale with databases


Hosting method
- size & level
- size of individual services
- type of cachin is vital
- managed hosting not much but tends to be more
expensive
- wire things together ourself


Microservices and firewalls

not-microservices; 

monolith; everything is together hard to 
upgrade or scale.

codebase lives on a single server.
build and update is expensive, complicated


microservice achitecture


isolated components divided 
by responsibility

isolated scaling from others

can be independently developed
by different teams

communication - services usually have one, or few ports
open

usually they restrict who can talk to them

encryption is not necessary inside 
of cluster
gateway is used to talk to outside machines


comms & firewalls

stop request from reaching service
to make a response

firewalls throttle down requests/slowdown 
responses if they grow quickly.


intro to fetch

used with external apis
to get and received data; local 
or remote.

promised based

- easily get and recieve data
- generally used with external APIs
- asynchronous and uses Promises
- fetch can be used to GET, POST, PUT, or DELETE data
- errot handling is simple

api; 
specify how software components
should interact

how to interact with back-end app
how to send and recieve data.

//prerequisites

- js & es6
- arrow functions
- promises
- async await
- JSON understanding

//course outline

- get data from local api
- get data from an api
- push data to an api
- error handling
- project builds

*/

/*
fetch basics; fetch api is promise based.

fetch('https://some_api_url_endpoint.com')
.then(response=> response.json())
.then(data=> console.log(data))

what is json?

- javascript object notation
- data representation 
- storing and transport of data
- exchange data between client and server
- built with; bools, arrays[], numbers, objects{}, null
- rules; json must contain keyvals,
double quotes, must fall into data type
- data is seperated by commas
- curly braces hold objects
- square brackets hold arrays
- use; JSON.stringify() method to convert js string into json

*/

/*fetch() api*/


// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response=> response.json())
// .then(data=> console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response=> response.json())
// .then(data=> console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts/2')
// .then(response=> response.json())
// .then(data=> console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts/3')
// .then(response=> response.json())
// .then(data=> console.log(data))

/*
JSON example

{
    "name": "cyberman",

    "software engineer": true,

    "languages": ["html", "css", "javaScript"],

    "primaryLanguage": "javaScript/es6",

    "operatingSystems": {
        "iOS": "front end web development",
        "linux": "hacking",
        "red hat linux": "systems administration"
    }
}
*/

// const engineer = {
//     alias: "cyberman",
//     language: "javascript"
// }

//JSON.stringify() method to convert js string into json
// const toJson = JSON.stringify(engineer)
// console.log(toJson)

/*
{
    "alias": "cyberman",
    "language": "javaScript"
}
*/


//fetching data from json api and display to web page.

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response=> response.text())//creates a method on the 
//     //response
//     .then(text=>{//shows what reponse method does
//         const dataDiv = document.createElement('div')
//         dataDiv.innerHTML = text
//         document.body.appendChild(dataDiv)
// })

/*

fetching json data from a local file on 
the same machine.

fetch('app.json')
    .then(response=> response.json())
    .then(json=>{
        json.forEach(person => {//looping over json array elements
            const div = document.createElement('div')
            div.innerHTML = person.name
            document.body.appendChild(div)
    });
})

fetch('app.json')
    .then(response=> response.json())
    .then(json=>{
        json.forEach(person => {//looping over json array elements
            const div = document.createElement('div')
            div.innerHTML = `${person.name} is ${person.age}`
            document.body.appendChild(div)
    });
})
*/

// fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then(response => response.text())
//     .then(text=>{
//         const div = document.createElement('div')
//         div.innerHTML = text
//         document.body.appendChild(div)
//     })

// //fetch api; data retrieval and display
// //fetch() api/method
// fetch('https://jsonplaceholder.typicode.com/posts/4')
//     .then(response=> response.text())
//     .then(text=>{
//         //creating new element to store data within.
//         const div = document.createElement('div')
//         //setting html layout to contain the actual data.
//         div.innerHTML = text
//         //appending the html element and text within the DOM.
//         document.body.appendChild(div)
//     })

// //fetch api; retrieving and logging json
// fetch('https://jsonplaceholder.typicode.com/posts/5')
//     .then(response => response.json())
//     .then(data=> console.log(data))



// //fetch a photo from an api
// fetch('https://jsonplaceholder.typicode.com/photos/900') // Add the URL
// 	.then(res => res.json()) // Process the data
// 	.then(json => { // display data in browser; object.based
// 		const img = document.createElement('img');
// 		img.src = json.url; // Set the image source to the image URL value
// 		document.body.appendChild(img)
// 	}); 


// //error handling; catching errors
// fetch('https://jsonplaceholder.typicode.com/photos/3502')
//     .then(response=> {throw 404})
//     .then(json=>{
//         const img = document.createElement('img')
//         img.src = json.url
//         document.body.appendChild(img)
//     })
//     .catch(error=> console.error(error))

// //async & await; functions
// /*
// async await allows us promise
// based code to run and be resolved 
// properly.
// */

// const promisedData = async () => {
//     const request = await fetch(`https://jsonplaceholder.typicode.com/photos/3502`)
//     const response = await request.json()

//     const result = await response
//     console.log(result)
// }
// promisedData()

// async function retrieveData(){
//     const requestData = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const responseData = await requestData.json()

//     /*
//     iterating over every post element 
//     within the json api.
//     */
//     responseData.forEach(element => {
//         const result = element
//         console.log(result)
//     });
// }
// retrieveData()

// // const displayJsonData = async () =>{
// //     const request = await fetch('https://jsonplaceholder.typicode.com/photos')
// //     const response = await request.json()//

// //     response.forEach(json=>{//
// //         const image = document.createElement('img')
// //         image.src = json.url
// //         document.body.appendChild(image)
// //     })
// // }
// // displayJsonData()


// async function getData(){
//     const request = await fetch('https://jsonplaceholder.typicode.com/photos')
//     const response = await request.json()
//     const result = await response
//     setTimeout(()=>{
//         console.log(result)
//     }, 3000)
// }
// getData()

// //fetch and post blog posts using async/await
// //solution 1
// // const limitPostsAmount = async () =>{
// //     const promisedBlogs = await fetch('https://jsonplaceholder.typicode.com/posts')
// //     const posts = await promisedBlogs.json()
// //     html = ''

// //     posts.slice(0,10).forEach(post =>{
// //         let title = post.title
// //         let body = post.body
// //         html += `
// //             <div class='post'>
// //                 <h3>${title}</h3>
// //                 <p>${body}</p>
// //             </div>
// //         `
// //     })
// //     document.body.innerHTML = html
// // }
// // limitPostsAmount()

// //fetch and post blog posts using async/await

// //solution 2
// // const limitedPostsAmount = async () =>{
// //     const promisedBlogs = await fetch('https://jsonplaceholder.typicode.com/posts')
// //     const posts = await promisedBlogs.json()//array-object data
// //     let html1 = ''

// //     for(let i = 11; i < 60; i++){//only iterates the first 5 times.
// //         let title = posts[i].title
// //         let body = posts[i].body

// //         html1 += `
// //             <div class='post'>
// //                 <h3>${title}</h3>
// //                 <p>${body}</p>
// //             </div>
// //         `
// //     }
// //     document.body.innerHTML = html1
// // }
// // limitedPostsAmount()


// // //error handling; async/await
// // async function handlePromises(){
// //     const postDataRequest = await fetch('https://jsonplaceholder.typicode.com/posts')

// //     if(postDataRequest.ok){
// //         //array/object data
// //         const posts = await postDataRequest.json()
// //         for(let i = 0; i < 3; i++){
// //             const title = posts[i].title
// //             const body = posts[i].body
// //             console.log(`post title: ${title}; post content: ${body}`)
// //         }
// //     }else{//identifies and handles existing errors
// //         console.error(`error status: ${postDataRequest.status}`)
// //     }
// // }
// // handlePromises()

//fetch blog posts (POST)
//fetch methods repeat
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=> response.json())
// .then(data=> console.log(data))


// const limitPostsAmount = async () =>{
//     const promisedBlogs = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await promisedBlogs.json()
//     html = ''

//     posts.slice(0,10).forEach(post =>{
//         let title = post.title
//         let body = post.body
//         html += `
//             <div class='post'>
//                 <h3>${title}</h3>
//                 <p>${body}</p>
//             </div>
//         `
//     })
//     document.body.innerHTML = html
// }
// limitPostsAmount()


/*
async function getting 3 posts and posting 
title and body to page.
*/
// async function manageData(){
//     const dataRequest = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const dataResponse = await dataRequest.json()
//     let html = ''

//     dataResponse.slice(0,3).forEach(post=>{
//         let title = post.title
//         let body = post.body
//         html += `
//             <div class='post'>
//                 <h3>${title}</h3>
//                 <p>${body}</p>
//             </div>
//         `
//     })
//     document.body.innerHTML = html
// }
// manageData()

// //fetch an image from an api and post using error handling
// fetch('https://jsonplaceholder.typicode.com/photos/3')
//     .then(response=> response.json())
//     .then(json=>{
//         const image = document.createElement('img')
//         image.src = json.url
//         //document.body.appendChild(image)
//         console.log(image)
//     })
//     .catch(err=> console.error(err))


//fetch & post blog posts to browser & use error handling.
async function postBlogData(){
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(request.ok){
        const response = await request.json()
        let html = ''
        for(let i = 0; i < 95; i++){
            const title = response[i].title
            const body = response[i].body
            html += `
                <div class='post'>
                    <h1>${title}</h1>
                        <h2>
                            <p>${body}</p>
                        </h2>
                </div>
            `
        }
        document.body.innerHTML = html
    }else{
        console.log(`error status: ${request.status}`)
    }
}
postBlogData()

/*
get blog post data from 
an api and post to web page.
.forEach() method
*/
// async function getPosts(){
//     const request = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let html = ''

//     if(request.ok){
//         //array[{object.data}]
//         const posts = await request.json()
//         posts.slice(95,100).forEach(post=>{
//             let title = post.title
//             let body = post.body
//             html += `
//                 <div class='post'>
//                     <h2>${title}</h2>
//                     <p>${body}</p>
//                 </div>
//             `
//         })
//         document.body.innerHTML = html
//     }else{
//         console.log(`${request.status}`)
//     }
// }
// getPosts()

//fetch() and log data from an api

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=> response.json())
    .then(data=> console.log(data))

//fetch() data to post to the web page.

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=> response.text())
    .then(text=>{//describing what response.text() method does.
        const div = document.createElement('div')
        div.innerHTML = text
        div.style.color = 'blue'
        div.style.border = 'solid 10px black'
        div.style.margin = '10px auto'
        div.style.padding = '5px'
        div.style.textAlign = 'center'
        document.body.appendChild(div)
    })

//fetch() photo data to post to the web page.

fetch('https://jsonplaceholder.typicode.com/photos/17')
    .then(response=> response.json())
    .then(json=>{
        const image = document.createElement('img')
        image.src = json.url
        image.style.border = 'solid 10px black'
        document.body.appendChild(image)
    })


/*
use an async function to fetch() 
blog post data and display only a certain amount
and display only certain data.
*/

//async using forEach()
async function getSpecificData(){
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await request.json()
    let html = ''

    response.slice(0,5).forEach(res=>{
        let title = res.title
        let body = res.body
        html += `
            <div>
                <h3>${title}</h3>
                    <p>${body}</p>
            </div>
        `
    })
    document.body.innerHTML = html
}
getSpecificData()


//async using for-loop()
const grabDataAmount = async () =>{
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await request.json()
    let html = ''

    for(let i = 10; i < 20; i++){
        const title = response[i].title
        const body = response[i].body
        html += `
            <div>
                <h1>${title}</h1>
                    <p>${body}</p>
            </div>
        `
    }
    document.body.innerHTML = html
}
grabDataAmount()


/*
create a POST to an api

const postPromise = {
    method: 'POST',
    body: JSON.stringify({title: title, body: body}),
    headers: new Headers({
        "Content-type": "application/json"
    })
}

const post = fetch(
    'https://jsonplaceholder.typicode.com/posts',
    postPromise
)
*/






























