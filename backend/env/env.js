const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bgmg8xbcwmakvk0rwtk3-mysql.services.clever-cloud.com',
    user: 'uvfliohnxreuuhfh',
    password: 'OxHOnFbBEjlKX9u7YrXN',
    database: 'bgmg8xbcwmakvk0rwtk3',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;