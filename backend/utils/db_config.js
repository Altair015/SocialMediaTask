import { config } from "dotenv";
import mongoose, { connect } from "mongoose";

config();

const { MONGO_URL } = process.env;

export function dbConnection() {
    try {
        const db = connect(MONGO_URL);
        if (db) {
            const { connection } = mongoose;
            connection.on('connected', () => console.log('MongoDB Server is connected'));
        }
    }
    catch (error) {
        console.log(error.message)
    }
}