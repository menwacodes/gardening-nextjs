import mongoose from "mongoose";

export default async function connectMongoose() {
    const DB = process.env.DB_CONN
    .replace("<USERNAME>", process.env.DB_UN)
    .replace("<PASSWORD>", process.env.DB_PW)
    .replace("<DB_NAME>", process.env.DB_N);
    console.log(DB)


    if (mongoose.connection.readyState > 0) return; // re-use open mongoose connection
    return mongoose.connect(DB)
}