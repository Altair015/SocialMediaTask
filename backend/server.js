import { config } from "dotenv";
import express, { json } from "express";
import { dbConnection } from "./utils/db_config.js";

config();

const { PORT, HOSTNAME } = process.env;

const server = express();

server.use(json());

dbConnection()

server.listen(
    PORT, HOSTNAME, () => {
        console.log(`Server is started at port number ${PORT}.`)
    }
);