const { createClient } = require("redis")

require("dotenv").config()

const client = createClient({
    password: process.env.REDIS_pass,
    socket: {
        host: process.env.REDIS_URL,
        port: 11574
    }
});


module.exports = { client }