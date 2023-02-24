import fs from "fs";
import path from "path";

export default async function getJsonFile(fileName) {
    const filePath = path.join(process.cwd(), "data", fileName)
    const fileContent = await fs.readFileSync(filePath)
    return JSON.parse(fileContent)
}