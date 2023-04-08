import mongoConnect from "@/lib/mongo-connect";

export const getFlowers = async (req, res) => {
    try {
        const client = await mongoConnect();
        const db = client.db();
        const collection = db.collection("flowers")
        return await collection.find({}).sort({ plant: 1 }).toArray();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "fail" })
    }
}