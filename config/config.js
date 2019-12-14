const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});


const username = process.env.NAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;


const config = {
    dev:{
        db:{
            username,
            password,
            database,
            host
        }
    },
    test: {},
    prod: {}
};

module.exports = config[node_env];