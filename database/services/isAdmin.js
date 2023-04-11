// ToDo: remove if not used

import mongoConnect from "@/lib/mongo-connect";

export async function isAdmin(email) {
    const client = await mongoConnect()
    const db = client.db()
    const collection = db.collection("users")
    const user = await collection.findOne({email})
    return user.role === "admin"
}

export default async function handler(req, res) {
    const role = await isAdmin(req.body)
    console.log(role)
    return res.status(200).json(role)
}