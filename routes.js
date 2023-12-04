const fs= require('fs');

const requestHandler= (req, res) => {
    const url= req.url;
    const method= req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        res.end();
      }
      if (url === '/message' && method==='POST') {
        const body= [];
    
        res.on('data', (chunk)=> {
            console.log(chunk)
            body.push(chunk);
        });
        return res.on('end', () => {
           
            const parsedBody= Buffer.concat(body).toString();
            const message= parsedBody.split('=')[1];
    
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                } else {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                }
            });   
        });
      }
    
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>First page</title></head>');
      res.write('<body><h1>Hello from my node js server</h1></body>');
      res.write('</html>');
      res.end(); 
};

module.exports= {
    handler: requestHandler,
    someText: "some hard coded text"
};
/*
module.exports= requestHandler;

module.exports.handler= requestHandler;
module.exports.someText= "some hard coded text";
*/
