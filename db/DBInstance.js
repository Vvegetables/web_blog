var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : "",
    database : 'node_blog'
});
connection.connect();

exports.connection = connection;