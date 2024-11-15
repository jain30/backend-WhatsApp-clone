//pojain30
//HcJUehqz75HAy4ns

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {

    const USERNAME = process.env.DB_USERNAME;

    const PASSWORD =  process.env.DB_PASSWORD;

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.lcueg.mongodb.net/?retryWrites=true&w=majority&appName=whatsapp-clone`;

    try{
        await mongoose.connect(URL);
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Error while connecting to database", error.message)
    }
    
};

export default connection;