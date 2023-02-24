import {MongoClient} from "mongodb";

export default async function connectToLocalDB() {
    return await MongoClient.connect('mongodb://localhost:27017/blood_pressure');
}