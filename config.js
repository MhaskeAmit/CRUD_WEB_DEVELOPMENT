var sql = require('mysql');

var connection = sql.createConnection({
    host: 'localhost' ,
    user: 'root',
    password: 'root123',
    database:'mall'
});

connection.connect((err,req,res)=>{
    if(!err){
        console.log('Connected to database');
    }else{
        console.log(err.sqlMessage);
    }
});

module.exports = connection;