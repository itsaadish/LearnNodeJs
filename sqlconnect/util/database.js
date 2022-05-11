const mysql = require('mysql2');

const pool = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"node_complete",
    password:"password"
})

module.exports = pool.promise();