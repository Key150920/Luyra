const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bwb3gksdtvxkplrjk55f-mysql.services.clever-cloud.com',
    user: 'uxnhacz8o3wcmihd',
    password: 'thJji0BGAfek2ARRXbTO',
    database: 'bwb3gksdtvxkplrjk55f',
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