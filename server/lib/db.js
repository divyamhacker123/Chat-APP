// for connecting with mongodb and perform operations
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log("DB Connected"));
        mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
    } catch (error) {
        console.log(error);
    }
}