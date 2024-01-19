const express= require('express');

const app= express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('in another middleware');
    res.send('<h1>hello from express</h1>');
});

app.listen(3000);

/*
Express.js is a popular web application framework for Node.js.
To use Express include its simplicity, flexibility, middleware support.

Middlewares in Express are functions that have access to the request, response, and the next middleware function in the application's request-response cycle

next function is a callback parameter. It is used to move to the next middleware function in the request-response cycle.

res.send is an Express method used to send a response to the client. It automatically sets the Content-Type header based on the type of the response.
It can send HTML, text, JSON, or other types of data.

If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to.
 text/html because you are sending HTML content.

If I do res.send( { key1: value }) . What will be the content-type header equal to.
to application/json because you are sending a JSON object.

app.listen(3000) makes Express application listen on port 3000 for incoming HTTP requests. It starts a server that will handle these requests.
*/