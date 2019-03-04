require('dotenv').config();
const connectionLimit = process.env.DB_CONNECTION_LIMIT,
    host = process.env.DB_HOST,
    user = process.env.DB_USER,
    password = process.env.DB_PASS,
    database = process.env.DB_NAME;

module.exports = {
    connectionLimit: connectionLimit,
    host: host,
    user: user,
    password: password,
    database: database
}