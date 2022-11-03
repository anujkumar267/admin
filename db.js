const mysql = require('mysql');
const env = require('dotenv').config();

// console.log(env)

global.db = {};
function connectSQl() {
    global.db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    global.db.connect(
        function (err) {
            if (err) throw err;
            console.log("Connected!");
            // console.log(global.db.query, )
        });
}


module.exports = {
    connectSQl
}