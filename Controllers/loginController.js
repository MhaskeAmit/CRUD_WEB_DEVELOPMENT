var connection = require('./../config');

module.exports.loginController =  function(req,res){

    var username = req.body.username;
    var password = req.body.password;

    connection.query('select * from users where username = ?', [username], function(err,results,fields){
        if(err){
            console.log(err.sqlMessage);
        }else{
            if(results.length > 0){
                if(password ==  results[0].password){
                    console.log('User successfully authenticated!!!');
                }
                else{
                    console.log('Password does not match');
                }
            }
            else{
                console.log('Username and password does not exist!');
            }
        }

        
    });
    return res.redirect('/');
}