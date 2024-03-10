const { default: mongoose } = require("mongoose");
const DB = process.env.DATABASE;

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