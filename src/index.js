import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";

dotenv.config({
    path: "./.env"
});

connectDB()

/* import express from "express";

const app = express();

;( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {});
        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}...`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        throw err
    }
})() //Imediately invoking the async function for connecting to MongoDB */