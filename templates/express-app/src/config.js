require('dotenv').config();

const config = {
    db: {
        url: process.env.DB_URL || 'mongodb://127.0.0.1:27017'
    },
    port: process.env.PORT || 3000
};

module.exports = config;
