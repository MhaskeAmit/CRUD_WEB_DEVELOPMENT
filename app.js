var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var registerController = require('./Controllers/registerController');
var loginControl = require('./Controllers/loginController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
});

app.get('/shop',(req,res)=>{
    res.sendFile(__dirname+'/views/Shop.html');
});

app.get('/addProd',(req,res)=>{
    res.sendFile(__dirname+'/views/add_product.html');
});

app.get('/api/registration',registerController.registerControl);
app.post('/api/registration',registerController.registerControl);
app.post('/api/login',loginControl.loginController);

app.listen('3000',(req,res)=>{
    console.log("Listening to localhost 3000");
});