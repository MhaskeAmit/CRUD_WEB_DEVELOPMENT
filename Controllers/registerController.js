var connection = require('./../config');
var app = require('./../app');


module.exports.registerControl = function(req,res){
    var user = {
        'username':req.body.username,
        'email':req.body.email,
        'password':req.body.password
    }

    connection.query('insert into users SET ?', user , (err,req,res)=>{
        if(!err){
            console.log('User registered');
        }
        else{
            console.log(err.sqlMessage);
        }
    });
    res.redirect('/register');
};