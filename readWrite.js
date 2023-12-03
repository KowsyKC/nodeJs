const http = require('http');
const fs= require('fs');

//to create an HTTP server, It takes a callback function that will be executed for each incoming request
const server = http.createServer((req, res) => {
  const url = req.url;
  const method= req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method==='POST') {
    const body= [];

    res.on('data', (chunk)=> {
        console.log(chunk)
        body.push(chunk);
    });
    return res.on('end', () => {
        //parse form data, write to file, and redirect
        const parsedBody= Buffer.concat(body).toString();
        const message= parsedBody.split('=')[1];

        fs.writeFile('message.txt', message, (err) => {
            res.statusCode= 302;
            res.setHeader('Location', '/');
            return res.end();
        });   
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First page</title></head>');
  res.write('<body><h1>Hello from my node js server</h1></body>');
  res.write('</html>');
  res.end(); 
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
 });

  //Buffers are used for efficient handling of binary data, while streams enable processing of data in chunks, making them essential for tasks like file I/O and network operations in JavaScript.