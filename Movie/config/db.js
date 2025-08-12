const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/movieStore");
        console.log("MongoDB connected");
    }catch(error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);

    }
    }

    module.exports = connectDb;