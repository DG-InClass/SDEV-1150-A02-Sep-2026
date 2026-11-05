// inclass/19/demo-fetch.js
// node --watch demo-fetch.js
console.log('Trying fetch calls....');

// fetch() is a function that returns a Promise<Response>
// Promises in JavaScript are what make Asynchronous programming possible.
fetch('http://localhost:3000/bodies/3') // returns a Promise<Response>
    // When the backend server responds, then...
    .then((response) => {
        console.log('The backend server got back to me', response.status);
        // I happen to know that the backend server will return JSON, so
        return response.json(); // convert the JSON string into a JavaScript object
    })
    // When the JSON is converted to JavaScript object or array, then...
    .then((data) => {
        console.log('Got the data');
        console.log(data);
    });
console.log('The end of this script file');
