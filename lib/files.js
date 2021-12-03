import path from "path";
import fs from "fs";




const currentDirectory = () => path.basename(process.cwd());
const directoryExists = (filePath) => fs.existsSync(filePath);
const readConfig = (filePath) => JSON.parse(fs.readFileSync(filePath));

export { currentDirectory, directoryExists, readConfig };
