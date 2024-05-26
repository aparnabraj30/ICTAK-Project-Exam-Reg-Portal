const { default: mongoose } = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
    }
    catch (error) {
        console.error(`MongoDB Error ${error}`);
    }
};


module.exports = connectDB;