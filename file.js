// const fetchForm = document.getElementById('fetchForm')

// fetchForm.addEventListener('submit', async function submitPost(event){
    
//     event.preventDefault()
//     //setting values within elements

//     //accessing elements
//     let title = document.getElementById('titleInput').value
//     let body = document.getElementById('bodyInput').value
    
//     //creating a POST within an api
//     const options = {
//         method: 'POST',
//         body: JSON.stringify({title: title, body: body }),
//         headers: new Headers({
//             "Content-Type": "application/json"
//         })
//     }

//     const postPromise = await fetch(
//         'https://jsonplaceholder.typicode.com/posts',
//         options
//     )

//     const post = await postPromise.json()
    
//     title = post.title
//     body = post.body

//     document.querySelector('.card-title').innerHTML = title
//     document.querySelector('.card-body').innerHTML = body

//     document.getElementById('fetchForm').reset()
// })

/*
submitting a POST method onto an api to render to an application. 

//access element that we want to apply the POST functionality to.
 */

const fetchForm = document.getElementById('fetchForm')

//element contains an eventListener method and async function attached.
fetchForm.addEventListener('submit', async function submitPost(event){

    event.preventDefault()

    //accessing html elements 'POST' value
    let title = document.getElementById('titleInput').value
    let body = document.getElementById('bodyInput').value


    const postMethod = {
        method: "POST",
        body: JSON.stringify({
            title: title, body: body
        }),
        headers: new Headers({//headers method creates a
            "Content-Type": "application/json"
        })
    }

    //fetch data and applying 'POST'
    const postRequest = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        postMethod
    )

    /*
    converting data request, and data POST
    to json
    */
    const post = await postRequest.json()

    title = post.title
    body = post.body

    //accessing elements to add content to.

    document.querySelector('.card-title').innerHTML = title
    document.querySelector('.card-body').innerHTML = body

    document.getElementById('fetchForm').reset()
})

