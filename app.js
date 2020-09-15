const express = require('express');
const path = require('path')
const port = 8080;

const app = express();

// How to handle get request
app.get('/', (request, response) => {
    console.log(request.url);
    response.sendFile(path.join(__dirname + '/public/views/index.html'));
})

// How to handle post request
app.post('/user', (request, response) => {
    response.send('Got a PUT request @/user') 
})

app.put('/user'), (request, response) => {
    response.send('Got a POST request @/user')
}

app.delete('/user', (request, response) => {
    response.send('Got a DELETE request @/user')
})

// ACTION!
app.listen(port, ()=>{
    console.log("Example of listening to port at http://localhost:"+port)
})