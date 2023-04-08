import {bgGreenBright, bgRed, black, yellowBright} from "ansi-colors";

import {MongoClient} from 'mongodb';

let DB;
if (process.env.ENVIRONMENT === 'dev') {
    DB = 'mongodb://localhost:27017/gardening'
} else {
    DB = process.env.DB_CONN
    .replace("<USERNAME>", process.env.DB_UN)
    .replace("<PASSWORD>", process.env.DB_PW)
    .replace("<DB_NAME>", process.env.DB_N);
}


const mongoConnect = async () => {
    try {
        const client = await MongoClient.connect(DB);
        console.log(bgGreenBright(black("Mongo Connection Open")));
        return client;

    } catch (error) {
        console.error(error);
        console.log(bgRed(yellowBright(`Mongo Connection Error: ${error.message}`)));
    }
};

export default mongoConnect;