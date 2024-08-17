require('dotenv').config()

const connectMongoDB = require("./db/index.js");

connectMongoDB()