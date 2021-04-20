// Express - minimalist
// There's also Adonis - like Laravel

// package.json allows us to list out all the packages or dependencies for a project.
// Can create package.json using npm init or can self-code

// package-lock.json is version of libraries in your project

const express = require("express");
const axios = require("axios");

const app = express();

app.get('/dad-joke', (request, response) => {
    
    // response.json({
    //     data: {
    //         greeting: "hello class",
    //     },
    // });

    // callback functions are typically the mechanism for dealing with non blocking code
    // making a network request is considered IO and is blocking
    // Can make this efficient in node - it is non blocking by default.
    // Axios library: instead of using callback function when request comes back, it uses promises
    // We use axios library to make a request and we get back a promise which we can then use a then function to attach a callback when it does finish
    
    // Say you promise to pay a friend back: you're saying you're not going to pay back right now, but you promise you will do it in the future. A promise is sort of like a guarantee you'll get a response back upon which you will *then* do something
    const promise = axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json",
        },
    });

    // You're passing in a callback function to then. 
    promise.then((icanhazdadjokeResponse) => {
        console.log(icanhazdadjokeResponse.data);
    });

});

app.listen(8000);