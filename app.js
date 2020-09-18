const express = require('express'); // JS Framework
const path = require('path'); // File/Folder path name builder
const port = 8080; // port we are listening to
const app = express(); // initalizing express

/* 
REQUEST & RESPONSE are the built-in node.js request and response objects.
Request - the users request to the server and contains some user information (if given)
Response - what the server will give back to the user, in most cases just a .html file.
*/

// ROUTES!

// Setting base or default path
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/public/views/index.html'));
})

// Get member view by member name
// :member will bind to request.params.member
app.get('/member/:member', (request, response) => {
    // console.log(response);
    response.sendFile(path.join(__dirname + '/public/views/'+request.params.member+'.html'))
})

// ACTION!
app.listen(port, ()=>{
    console.log("Example of listening to port at http://localhost:"+port)
})