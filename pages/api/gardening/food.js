import mongoConnect from "@/lib/mongo-connect";

export const getFood = async (req, res) => {
    try {
        const client = await mongoConnect();
        const db = client.db();
        const collection = db.collection("food");
        return await collection.find({}).sort({plant: 1}).toArray()
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "fail" });
    }
};