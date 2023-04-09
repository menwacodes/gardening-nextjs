import mongoose from "mongoose";

export default async function connectMongoose() {
    if (mongoose.connection.readyState > 0) return;

    let DB;

    if (process.env.ENVIRONMENT === 'dev') {
        DB = 'mongodb://localhost:27017/gardening';
    } else {
        DB = process.env.DB_CONN
            .replace("<USERNAME>", process.env.DB_UN)
            .replace("<PASSWORD>", process.env.DB_PW)
            .replace("<DB_NAME>", process.env.DB_N);
    }
    return mongoose.connect(DB);
}