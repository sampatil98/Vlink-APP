const { createClient } = require("redis")

require("dotenv").config()

const client = createClient({
    url: process.env.REDIS_URL
});


module.exports = { client }