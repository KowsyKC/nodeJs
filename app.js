const express= require('express');
const bodyParser= require('body-parser')

const app= express();

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', (req, res, next) => {
  //console.log('This always run!');
    next();
});

app.use('/add-product', (req, res, next) => {
  //console.log('In another middleware');
    res.send('<form action="/product" method="post"><input type="text" name="title"><input type="text" name="size"><button type="submit"></button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  //console.log('In another middleware');
    res.send('<h1>hello from Express</h1>');
});

app.listen(3000);

