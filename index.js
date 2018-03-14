var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    bot = require('./bot').bot,
    fs = require('fs'),
    app = express(),
    upload = multer();

//server 
const server = app.listen(8080, function(){
    console.log('Server is listening to port ' + server.address().port);
});
//set view engine
app.set('view engine', 'ejs');
//parse JSON
app.use(bodyParser.json());
//parse multipart/form data
app.use(upload.array());
//parse application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//main server view
app.get('/chatBot', function(req, res){
    res.render('chatForm');
});

app.post('/chatBot', function(req, res){
    message = req.body.message;
    //randomness generators
    var randomGreet = bot.greet[Math.floor(Math.random() * bot.greet.length)];
    var randomName = bot.name[Math.floor(Math.random() * bot.name.length)];
    var randomTell = bot.tell[Math.floor(Math.random() * bot.tell.length)];
    if(message.includes('hey') || message.includes('how are you') || message.includes('hello')) {
        console.log(randomGreet);
    }
    if(message.includes('name')) {
        console.log(randomName);
    }
    if(message.includes('joke') || message.includes('story')) {
        console.log(randomTell);
    }
});