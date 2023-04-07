import getJsonFile from "@/lib/fileHelper";

export async function getFlowerData() {
    const data = await getJsonFile("flowers.json")
    console.log(data)
    return JSON.parse(JSON.stringify(data))
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
          const data = await getJsonFile("flowers.json")
          return res.status(200).json({status: "success", count: data.length, data})
        } catch (error) {
          console.error(error);
          return res.status(500).json({status: "fail", message: "An error occurred"})
        }
    }
}