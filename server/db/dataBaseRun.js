
const dataBase = async (sqlQuery, args) => {
    const mysql = require('mysql2/promise');
    const dbConf = require('../../config/dbConfig');
    // create the connection
    const connection = await mysql.createConnection(dbConf);
    // query database
    const [rows] = await connection.execute(sqlQuery, args);
    //close connection
    connection.end();
    return rows;
}
module.exports = dataBase;
