require('dotenv').config();

const config = {
    db: {
        url: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase'
    },
    port: process.env.PORT || 3000
};

module.exports = config;
