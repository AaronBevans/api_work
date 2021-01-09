/*
//variables
var number = 1
number = 2
number += number
console.log(number)

//short circuiting
number = 0
let newNumber = number + 1
newNumber != number ? console.log(true) : console.log(false)

//if/else-if else statements

if(newNumber){
    console.log('truthy value')
}else{
    console.log('falsy value')
}

if(newNumber === number){
    console.log(0)
}else if(newNumber > number){
    console.log(`newNumber value is ${newNumber}`)
}else{
    console.log('value unidentified')
}

let letter = 'a'

if(typeof newNumber === typeof letter && typeof newNumber <= typeof length){
    console.log(`${newNumber} and ${letter} are equal data types`)
}else{
    console.log(`${newNumber} and ${letter} are not equal data types`)
}

newNumber = typeof newNumber
letter = typeof letter
let nullType = null


//switch statements
switch(letter){
    case letter:
        console.log(`the data type is ${letter}`)
        break;
    case newNumber:
        console.log(`the data type is a ${newNumber}`)
        break;
    default:
        console.log(`the data type is ${nullType}`)
}

const booleanVal = true
const falsyType = ''
const newFalsyType = NaN

//arrays
let array = [
    `${number}`,
    `${newNumber}`,
    `${letter}`,
    `${nullType}`,
    `${booleanVal}`,
    `${falsyType}`,
    `${newFalsyType}`
]
console.log(array[0])
console.log(array[3])

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//objects
let object = {
    engineerType: 'front-end software engineer',
    languages: ['html', 'css', 'javaScript'],
    frameworkTechnology: 'react.js',
    objectMethod(){
        console.log(
            `${this.engineerType}; user interface development with ${this.languages[2]}.`
        )
    }
}

object.serverTechnology = 'node.js'
console.log(object.serverTechnology)
object.objectMethod()

//functions

function functionLogic(){
    console.log('simple function logic')
}
functionLogic()

//anonymous function
let dataFun = function(dataParam){
    console.log(dataParam)
}
dataFun('variable is now a function')


function returnFunction(){
    console.log(`${dataFun}`)
}
returnFunction()//returns function body

//challenge; determine if person is old enough to drink
//send a message based on age and gender to both age limit groups.

let profileObject = [
    {
        firstName: 'aaron',
        lastName: 'bevans',
        age: 30,
        sex: 'male'
    },
    {
        firstName: 'angelica',
        lastName: 'criado',
        age: 27,
        sex: 'female'
    },
    {
        firstName: 'avrie',
        lastName: 'bevans',
        age: 1,
        sex: 'female'
    },
    {
        firstName: 'bynx',
        lastName: 'the black cat',
        age: 5,
        sex: 'male'
    },
    {
        firstName: undefined,
        lastName: 'person',
        age: 21,
        sex: undefined
    },
    {
        firstName: 'baby A',
        lastName: 'bevans',
        age: 0,
        sex: undefined
    }
]

for(let i = 0; i < profileObject.length; i++){
    if(profileObject[i].age >= 21){//if males and undefined are 21 or above confirm they can drink
        if(profileObject[i].sex === 'male'){
            console.log(`Thank you for meeting the age limit mr. ${profileObject[i].firstName} ${profileObject[i].lastName}.`)
        }else if(profileObject[i].sex === 'female'){
            console.log(`Thank you for meeting the age limit ms. ${profileObject[i].firstName} ${profileObject[i].lastName}.`)
        }else if(profileObject[i].sex === undefined){
            console.log(`Thank you for meeting the age limit ${profileObject[i].firstName} ${profileObject[i].lastName}.`)
        }
        
    }else if(profileObject[i].age < 21){
        if(profileObject[i].sex === 'male'){
            console.log(`I'm sorry ${profileObject[i].firstName} ${profileObject[i].lastName} you are not of age.`)
        }else if(profileObject[i].sex === 'female'){
            console.log(`I'm sorry ${profileObject[i].firstName} ${profileObject[i].lastName} you are not of age.`)
        }else if(profileObject[i].sex === undefined){
            console.log(`I'm sorry ${profileObject[i].firstName} ${profileObject[i].lastName} you are not of age.`)
        }
    }
}

//generating random numbers
let randomNumber = Math.random() * 11
randomNumber = Math.floor(randomNumber)
console.log(randomNumber)

//challenge; create an array of random quotes
//use random generation logic to randomly generate a quote to the console.
let quotesArray = [
    'practice makes perfect!',
    'when there\'\s a will there\'\s a way.',
    'stand for something or fall for anything!',
    'dont worry by happy!',
    'no limits!',
    'do something today your future self will thank you for later.'
]

function logRandomQuotes(){
    let randomNumber = Math.random() * quotesArray.length
    randomNumber = Math.floor(randomNumber)
    console.log(quotesArray[randomNumber])
}
logRandomQuotes()

//creating elements with document.createElement
var myList = document.getElementById('my-list')
var newLi = document.createElement('li')
myList.append(newLi)
//myList.prepend
newLi.textContent = 'front end software engineer'

var new_p = document.createElement('p')
document.body.append(new_p)
new_p.textContent ='manipulating the DOM is fun!'


//creating elements in js; innerHTML +=
//creates string html elements on a page.
//good to create single elements.

document.body.innerHTML += "<p id='html-p'>This is a new parahraph</p>"
document.getElementById('html-p').style.textAlign = 'center'//applying style to textAlign property.


//creating elements on a page for-loop + createElement
let languages = [
    {lnaguage: 'html'},
    {language: 'css'},
    {language: 'javaScript'},
    {language: 'react.js'},
]

let newUl = document.getElementById('my-list')

for(let i = 0; i < languages.length; i++){
    newUl.innerHTML += `<li>${languages[i].language}</li>`
}

//Events & Event listeners
var newButton = document.createElement('button')
newButton.textContent = 'Click!'
document.body.append(newButton)

//adding anonymous function on to eventListener.
newButton.addEventListener('click', function(){
    console.log('this event has been fired!')
})


var newEventButton = document.createElement('button')
newEventButton.textContent = 'Click Here As Well!'
document.body.append(newEventButton)


//can create a function then pair with function and eventListener.
function fireEvent(){
    document.body.style.backgroundColor = 'lightGreen'
}
newEventButton.addEventListener('click', fireEvent)


var newestEventButton = document.createElement('button')
newestEventButton.textContent = 'Click Here For More Fun!'
document.body.append(newestEventButton)


function fireNewEvent(){
    document.body.style.color = 'white'
}
//function uses no paranthesis because it will be accessed later.
newestEventButton.addEventListener('click', fireNewEvent)

//access an elements class or id and add event listener and function.
function originalStyle(){
    document.body.style.backgroundColor =  'red'
    document.body.style.color =  'gold'
    newButton.style.backgroundColor = 'green'
    newButton.style.color = 'gold'
    newButton.style.borderStyle = 'none'
    newEventButton.style.backgroundColor = 'green'
    newEventButton.style.color = 'gold'
    newEventButton.style.borderStyle = 'none'
    newestEventButton.style.backgroundColor = 'green'
    newestEventButton.style.color = 'gold'
    newestEventButton.style.borderStyle = 'none'
}
//click changes background color to red & font color to gold
document.querySelector('#heading-1').addEventListener('click', originalStyle)

//removeEventListener(); inverse to addEventListener()
// document.getElementById('heading-1').removeEventListener('click', originalStyle)

// modifying elements; values
// var newElement = document.body.innerHTML += "<input value='input text value'/>"
// console.log(newElement.value)

//for-of-loop
let numbersArray = [1, 2, 3, 4, 5]
for(let number of numbersArray){
    console.log(number)
}

let devObjectArray = [
    {language: 'javaScript', development: 'front end'},
    {language: 'ES6', development: 'user interface development'}
]

for(let i = 0; i < devObjectArray.length; i++){
    console.log(devObjectArray[i].language)
    console.log(devObjectArray[i].development)
}


for(let object of devObjectArray){
    console.log(object.language)
    console.log(object.development)
}






//JavaScript practices
var integer = 1
console.log(integer)

let string = 'cyberman'
console.log(string)
string = `${string} the front end developer`
console.log(string)

const integerConstant = 3//cannot directly modify decalred/inited constant variables
let multiplyIntConst = integerConstant * 3//can store constant variables then modify
console.log(multiplyIntConst)

const newIntegersConstant = multiplyIntConst
console.log(newIntegersConstant)

//short circuit
var truthyVal = '2'

//true/truthy value is returned 'false' is both false and falsy
console.log(truthyVal || false)

truthyVal = ''
//first matching value is returned ('' is falsy & does not match 'true' boolean)
console.log(truthyVal && true)

//first matching value is returned; both falsy, no need to return both.
console.log(truthyVal && false)

//first matching value is returned
truthyVal = 0
console.log(truthyVal || false)

//first value matching variable is returned
console.log(truthyVal && true)

//first truthy/true value returned; beacuse truthy has priority over falsy/false.
console.log(truthyVal || true)

//ternary
let points = 0
let pointsToLevelUp = 101
let enoughPoints = true
let notEnoughPoints = false
points = 101

let currentProgress = points >= pointsToLevelUp ? console.log(enoughPoints) 
    : console.log(notEnoughPoints)

let level_One = points
console.log(level_One)


let level_Two = points += 100
console.log(level_Two)

points = 200

currentProgress = points >= level_Two ? console.log(`${enoughPoints} level 2 unlocked!`) 
    : console.log(`${notEnoughPoints}, you need ${level_Two - points} more point(s)
to get to level 2! Current Points achieved ${points}.`)

//conditionals
// let correct_answer_One = 'html'
// let current_points = 0
// let question_One = prompt('what language is used for web page layout design?')
// console.log(question_One)
// if(question_One === correct_answer_One){
//     alert(`${question_One} is correct! current points: ${current_points += 10}`)
// }else{
//     alert(`Sorry ${question_One} is not correct! current points: ${current_points}`)
// }

// let question_Two = prompt('what language is used for web page styling design?')
// let correct_answer_Two = 'css'
// if(question_Two === correct_answer_Two){
//     alert(`${question_Two} is correct! current points: ${current_points += 10}`)
// }else{
//     alert(`Sorry ${question_Two} is not correct! current points: ${current_points}`)
// }

// let question_Three = prompt('what language is used for web page interactivity design?')
// let correct_answer_Three = 'javascript'
// if(question_Three === correct_answer_Three){
//     alert(`${question_Three} is correct! current points: ${current_points += 10}`)
// }else{
//     alert(`Sorry ${question_Three} is not correct! current points: ${current_points}`)
// }

//switch statements
let arrayObjs = [
    {languages: 'html'},
    {languages: 'css'},
    {languages: 'javascript'},
    {languages: 'react.js'}
]

//searching for array-object containing react.js data
switch(arrayObjs.languages = 'react.js'){
    case 'react.js': 
        let truth = true
        let verifiedReact = `${truth} react.js`
        console.log(verifiedReact)
        break;
    case 'python':
        let verifiedPy = `${truth} python`
        console.log(verifiedPy)
        break;
    default:
        console.log(false)
        break;
}

//template literals; 
let myFavoriteLanguage = 'javascript'
let myFavoriteOs0 = 'linux'
let myFavoriteOs1 = 'iOs 14'

console.log(`My second favorite operating system is ${myFavoriteOs1}`)

//object destructuring
const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
};
//accessing object value pairs
// console.log(player.name)
// console.log(player.club)

// accessing object value pairs 
const {name, club} = player
console.log(name)
console.log(`${name} plays for ${club}`)

//accessing object nested object key-value pair
const {address: {city}} = player
console.log(`${name} lives in in ${city}.`)

//Destructuring Objects Challenge.
const student = {
    aname: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

//object destructured
const {aname, age, projects: {diceGame}} = student
console.log(
    `${aname} is a ${age} student and has created a game called ${diceGame}!!`
)

//destructuring arrays
let namesArray = ['aaron', 'avrie', 'angelica']

let [firstName, secondName, thirdName] = [namesArray[0], namesArray[1], namesArray[2]]

firstName = 'Dad Bod'
console.log(firstName)

firstName = namesArray[0]
console.log(firstName)

//object literals
//function that creates object key-value pairs
function createNewAddress(city, state){
    const newAddress = {city, state}//parameters match object keys
    console.log(newAddress)
}
createNewAddress('San Jose', 'California')

//combine object literal, destructuring
function developmentData(data){
    //method 1

    // const newDevelopment = {
    //     language: data.language,
    //     framework: data.framework,
    //     developmentType: 'front end web developer'
    // }

    //object now destructured.
    // const {language, framework} = newDevelopment

    // console.log(`I am a ${developmentType}. I develop applications using ${language}, 
    // it is easier to build apps with the use of the ${framework} library.`)

    //method 2
    //object now destructured.
    const {language, framework} = data

    const newDevelopment = {
        language,
        framework,
        developmentType: 'front end web developer'
    }

    console.log(`I am a ${newDevelopment.developmentType}. I develop applications using ${newDevelopment.language}, 
    it is easier to build apps with the use of the ${newDevelopment.framework} library.`)
}
developmentData({language: 'javaScript', framework: 'react.js'})

//for-of-loop
let technologyArray = [
    'html', 
    'css', 
    'javaScript'
]
//using for-of-loop to assign number to array element.
let place = 0
for(const tech of technologyArray){
    console.log(`${place++} ${tech}`)
}

//spread operator(...arrays, ...objects)
let emptyArray = []
console.log(typeof emptyArray)


let arrayData = [
    'software engineer',
    'front end developer', 
    'systems administrator'
]

let newArrayData = [
    ...arrayData,
    'hacker'
]
console.log(newArrayData)

let engineerObj = {
    primary_language: 'javaScript',
    secondary_language: 'python',
    primary_Os: 'mac os',
    secondary_Os: 'linux',
    primary_task: 'front end development',
    secondary_task: 'systems administration'
}

let supplimentalEngineerObj = {
    ...engineerObj,
    supplimental_task: 'penetration testing',
    secondary_supplimental_task: 'network engineering'
}
console.log(supplimentalEngineerObj)

//Rest Operator
function retrieveArguments(...letters){
    console.log(letters)
}
retrieveArguments('a', 'b', 'c', 'd', 'e', 'f')

//arrow functions
const arrowFun = (primary_title, secondary_title) => {
    console.log(`I have ${primary_title} skills, along with ${secondary_title} skills.`)
}
arrowFun('front end software engineer', 'systems administrator')

const newPrimaryArrowFun = day_title => `${day_title} by day...`
console.log(newPrimaryArrowFun('front end software engineer'))

const newSecondaryArrowFun = night_title => `${night_title} by night...`
console.log(newSecondaryArrowFun('systems administrator'))

//default parameters;
const defaultValue = (b = 5) =>{
    a = 5
    console.log(a * b)
}
defaultValue()

const multiply = (a, b) =>{
    b = (typeof b != 'undefined') ? b : 1
    console.log(a * b)
}
multiply(5, 2)
multiply(5)

//default parameters challenge

**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"



function shoppingItems(food = 'something'){
    console.log(`I'm going to buy ${food} from the grocery store.`)
}
shoppingItems('milk')
shoppingItems()

//includes();
write a function that will
log out a message if an array element exists
log out message if not.

numbersArray = [1, 2, 3, 4, 5]
function includesElement(){
    if(numbersArray.includes(6)){
        console.log('six exists')
    }else{
        console.log('six is undefined')
    }
}
includesElement()

numbersArray.push(6)
includesElement()

//var, let and const variables

var example;
if(true){
    //var example = 5
    example = 5
}
console.log(example)

// let example1 = 6
let example1 = 6
if(true){
    example1 += 1
}
console.log(example1)

const example2 = 7
if(true){
    let example3 = example2
    example3 += 1
    console.log(example3)
}

//import and export

//export 
const data = [1, 2, 3]

//enter another file

//import {data} from './file.js

let updatedData = data

updatedData.push(4)
console.log(updatedData)

//exporting and importing a function

//export
function exportSum(a, b){
    return a + b
}

import {exportSum} from './file.js'
let importSum = exportSum(5, 5)
console.log(importSum)
*/

//classes; templates to building objects
class Car{
    //build instance of car with constructor.
    constructor(make, model, color){
        this.make = make
        this.model = model
        this.color = color
    }

    driveMode(drive_mode = 'sport mode activated'){
        console.log(drive_mode)
    }
}
let car = new Car('porsche', 'cayman 718', 'black; red stripes')

console.log(car.make)
console.log(car.model)
console.log(car.color)

car.make = 'tesla'
car.model = 'model X'
car.color = 'white; black rims & wheels'

console.log(car.make)
console.log(car.model)
console.log(car.color)

car.driveMode()

//can export and import application classes
//'main.js'
//export
class SoftwareDevelopment{
    constructor(language, developmentType, library){
        this.language = language
        this.developmentType = developmentType
        this.library = library
    }
    sendMessage(message = 'message sent!'){
        console.log(message)
    }

    //get method; prop created only to return a value.
    get getMetaData(){//property, not a method
        console.log(
            `language: ${this.language}, development: ${this.developmentType}`
        )
    }

    //static; creates a function where
    //we dont need instance of the class.
    static returnStaticValue(value){
        console.log(value)
    }


}

//'newMain.js'
/*import {SoftwareDevelopment} from './main.js*/

let development = new SoftwareDevelopment(
    'javaScript', 'user interface', 'react.js'
)

console.log(development.language)
console.log(development.developmentType)
console.log(development.library)

development.language = 'python'
development.language = 'es6'

development.sendMessage('latest message sent')

/*
The get syntax binds an object property to a function 
that will be called when that property is looked up.
*/

//get property
development.getMetaData

//cannot be called on instances of the class; no 'this'
//static prop or methol.
SoftwareDevelopment.returnStaticValue(5)



/*export */ class Programmer extends SoftwareDevelopment{
    constructor(language, developmentType, library, operatingSystem){
        super(language, developmentType, library)
        this.operatingSystem = operatingSystem
    }

    /*
    child class inherets and uses the sam methods and props from 
    parent class
    */
}

/*import {SoftwareDevelopment, programmer} from './main.js*/

let programDevelopment = new Programmer(
    'javascript/es6', 
    'user interface development', 
    'react.js', 
    'unix like systems'
)

Programmer.returnStaticValue(5)

programDevelopment.getMetaData

programDevelopment.sendMessage('child class inheritance')

/*
classes; constructor, 'this', props, methods/logic
get, static, extending class inheritance to child class
*/

//fakeFile.js
/*export*/ class ParentClass{
    constructor(development, devLanguage, task){
        this.development = development
        this.devLanguage = devLanguage
        this.task = task
    }

    static returnStaticProp(){
        class MethodClass{
            constructor(firstNumber, secondNumber, thirdNumber){
                this.firstNumber = firstNumber
                this.secondNumber = secondNumber
                this.thirdNumber = thirdNumber
            }

            logOutNumber(){
                return this.firstNumber
            }
        }
        let newMethodClass = new MethodClass(
            'the number is 1', 
            'the number is two', 
            'the number is three'
        )
        console.log(newMethodClass.logOutNumber())
    }

    get metaDataProp(){
        let htmlUnList = document.createElement('ul')
        htmlUnList.innerHTML = `<h1>Class 'get' list property title</h1>
        <li>using getter in js</li>
        <li>return getter values in js</li>
        `
        document.body.append(htmlUnList)

    }
}

/*import {ParentClass} from './fakeFile.js'*/
let newParentClass = new ParentClass('front end development',
'javascript', 'user interface development'
)
ParentClass.returnStaticProp()

newParentClass.metaDataProp

/*
class challenge; create two classes 
using property and method inheritance
*/

class SoftwareEngineer{
    constructor(software, softwareDevelopment, softwareLanguage){
        this.software = software
        this.softwareDevelopment = softwareDevelopment
        this.softwareLanguage = softwareLanguage
    }
    shareData(){
        console.log(`${this.software} can be used for ${this.softwareDevelopment}, 
along with ${this.softwareLanguage} 
being used for development within an application.`
        )
    }
}

let softwareEngineering = new SoftwareEngineer(
    'apple\'\s iOs operating system',
    'application development',
    'javascript'
)

softwareEngineering.shareData()


class ChildEngineerClass extends SoftwareEngineer{
    constructor(software, softwareDevelopment, softwareLanguage, softwareVirtualized){
        super(software, softwareDevelopment, softwareLanguage, softwareVirtualized)
        this.softwareVirtualized = softwareVirtualized
    }
    shareSupplimentalData(){
        console.log(
            `multiple ${this.softwareVirtualized} are abstract layers of computing software, 
that can be configured to run on a single machine.`
        )
    }
}

let inheritance = new ChildEngineerClass(
    'windows os',
    'server side development',
    'python',
    'linux virtual computers'
)

inheritance.shareData()
inheritance.shareSupplimentalData()


//promises

let newPromise = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        let error = true
        if(error){
            reject('404 your connection has been interrupted')
        }else{
            resolve('connection successful')
        }
    }, 3000);
})
newPromise
.then((success)=> console.log(success))
.catch((reject) => console.log(reject))
.finally(
setTimeout(() => {
    console.log('done')
}, 3500))

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

let userPromise = new Promise((resolve, reject)=>{
    let user = {
        alias: 'cyberman',
        developmentType: 'user interface development',
        operatingSystems: [
            'Red Hat Linux',
            'iOs',
            'windows'
        ],
        returnUserData(){
            console.log(user.operatingSystems[0])
        }
    }
    setTimeout(() => {
        if(user.operatingSystems[0] === 'ubuntu linux'){
            resolve(`${user.alias} develops with the ${user.operatingSystems[0]}`)
        }else{
            reject(`Sorry! That os is not an option, 
            ${user.alias} develops in the ${user.operatingSystems[1]} operating system.`)
        }
    }, 3500);
})
userPromise.then(success => {
    console.log(success)
})
.catch(error=>{
    console.error(error)
})
.finally(
    console.log('done')
)

//fetch api call
// practice with; https://jsonplaceholder.typicode.com/comments/1

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response=> response.json())
    .then(data=> console.log(data))


//making a POST to api
fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
        postId: 'a.0',
        name: 'cyberman',
        developmentLanguage: 'asynchronous javascript development',
        body: 'software development data'
    })
})
.then(response => response.json())
.then(data=> console.log(data))
/**
 * Fetch - Challenge
 * 
 * GET the first comments value 
 * 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * 
 * POST a new comment using 
 * 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
fetch('https://jsonplaceholder.typicode.com/comments', {
    method:'POST',
    body: JSON.stringify({
        postId: 2,
        comment: 'this is a new post submit',
        body: 'new post',
        name: 'cyberman'
    })
})
.then( response => response.json())
.then(data=> console.log(data))

//async & await
//use aync await on on function using fecth api

async function dataRetrieval(){
    const request = await fetch('https://jsonplaceholder.typicode.com/comments/1')
    const response = await request.json()

    const data = response
    setTimeout(() => {
        console.log(data)
    }, 2500);
}
dataRetrieval()

//adding key value to object based on condition.
const emptydataObj = {}

async function promiseDataLog(){

    let keyVal = new Promise((resolve, reject)=>{

        setTimeout(() => {
            emptydataObj['devAlias'] = 'cyberman'
            if(emptydataObj.devAlias === 'cyberman'){
                resolve(`new developer alias identified: ${emptydataObj.devAlias}`)
            }else{
                const identified = false
                reject(`new developer alias identified: ${identified}`)
            }
        }, 3500);
    })

    let keyVal1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            emptydataObj['devLanguage'] = 'javaScript'
            if(emptydataObj.devLanguage === 'javaScript'){
                resolve(`new developer language: ${emptydataObj.devLanguage}`)
            }else{
                const identified = false
                reject(`new developer language: ${identified}`)
            }
        }, 3500);
    })

    let result = await keyVal

    console.log(result)
    console.log(emptydataObj)



    let newResult = await keyVal1

    console.log(newResult)
    console.log(emptydataObj)
}
promiseDataLog()

//async function
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getData(){
    const request = await fetch(apiUrl)
    const response = await request.json()


    setTimeout(() => {
        console.log(response.value)
    }, 3500);
}
getData()

//sets; unique values in a set, no duplicates allowed.
const newSet = new Set([1, 2, 2, 4])
console.log(newSet)
newSet.add(6).add(77)
console.newSet
console.log(newSet.has(77))

let someArray = [1, 2, 3, 4]
console.log(someArray)

let setSpread = ([...newSet])
console.log(setSpread)

//js challenges
//array replace
function arrayReplace(array, elementToReplace, subElement){
    for(let i = 0; i <= array.length; i++){
        if(array[i] === elementToReplace){
            array[i] = subElement
        }
    }
    console.log(array)
}
arrayReplace([1, 2, 1], 1, 5)

//factorial number
function factorial(num) {
    let product = 1;//start at 1 because anything multiplied by 0 will be 0.
    for(let i = 1; i <= num; i++) {//num = 5; not an array, bur there is 
        //a list of numbers 1 through 5.
        // product = product * i;
        product *= i;//product is multiplied by every number up to and including 5.
    }
    console.log(product);//only log out final product when iterations/loop stops
}
factorial(5)//there will be 5 loops/iterations

function firstDigit(str) {
    //  write code here.
    //.split() the array string
    //check if string .includes() thel left most integer.
    
    const string = str//string arg
    const splitStr = string.split('')//split string
    for(let i = 0; i < splitStr.length; i++){//iterate through chars
        //recognizes and converts strings to nums.
        if(splitStr[i].includes(Number('1' && '2'))){
            console.log('1')//log out sought after int.
        }
    }
}
firstDigit('var_1__Int2')

//first digit
function firstDigit_1(str){
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const chars = str.split('');
    
    //loop checks if any chars match the split strings chars
    for(const char of chars) {
        if(strNums.includes(char)) {
            console.log(char)
            /*console logs('1' & '2)
            because the iteration and conditional 
            both recognize two characters
            that are within the string argument
            */
        }
    }
}
firstDigit_1('var_1__Int2')

//larget number

function largestNumber(num) {
    //empty string
    let placeholder = 'placeholder value: ';
    
    /*
    as long as the index is less than and amount of num
    & the amount of iterations equal the same amount as num
    a * will be added to the placeholder value string.
    */
    for(let i = 0; i < num; i++) {
        /*string value now equals to 9 as long as loop
        iterates only twice
        */
        placeholder = placeholder.concat('*');
    }
    console.log(placeholder);
}
largestNumber(2)

function maxMultiple(divisor, bound) {
    const remainder = bound % divisor;
    
    console.log(bound - remainder);
}
maxMultiple(6, 100)

/*
//JavaScript and ES6//

Variables

- var; Declares a variable, optionally initializing it to a value.

- let; Declares a block scope local variable, 
optionally initializing it to a value.

- const; Declares a read-only named constant.
Cannot be changed directly/explicitly.


- data types
- strings; pasStart() & padEnd(); allows us
to add characters to start of and end of strings
- short circuiting
- ternary
- conditionals
- switch statements
- template literals
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions

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
Classes are a template for creating objects.


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
        .style. = ''
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

- problems with callbacks -

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

CRUD; 
CRUD is an acronym term that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.

- CRUD; v
Create; POST method; creates resource/data.
Rread; GET method; retrieves data from database.
Update; PUT/PATCH methods; updates data.
Delete; DELETE method; allows deletion of data.

- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method

- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.


- async await pauses promise code until all requests are resolved;
not using .then() or .catch() or .finally().


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




//array destructuring & ...rest operator
let toolsArray = [
    'javaScript/es6', 
    'react.js', 
    'node.js'
]

let practArray = [
    behavior, 
    ...rest//rest operator
] = [
    'javaScript/es6', 
    'react.js', 
    'node.js'
]

console.log(...rest)

//object destructuring

let toolsObject = {
    behavior: {
        newBehavior: 'javaScript/es6 scripting language'
    },
    reusabilityKey: 'react.js',
    serverSideKey: 'node.js'
}

const { behavior:{ newBehavior }, reusabilityKey, serverSideKey} = toolsObject
console.log(newBehavior)
console.log(reusabilityKey)
console.log(serverSideKey)






