import fs from "fs";
import path from "path";

export default async function getJsonFile(fileName) {
    const filePath = path.join(process.cwd(), "data", fileName)
    const fileContent = await fs.readFileSync(filePath)
    try {
        return JSON.parse(fileContent)
    } catch (err) {
        console.log("Error parsing JSON", error, fileContent)
    }
}