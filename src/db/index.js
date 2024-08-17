const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');

const connectMongoDB = async () => {

    // console.log(process.env.PORT)
    try {
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected and Host at :- ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('Failed Connection with MongoDB. Error is :-', error);
        // console.log(process.env.MONGODB_URI)
        process.exit(1);
    }
};


module.exports = connectMongoDB;