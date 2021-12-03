import path from "path";
import fs from "fs";


const currentDirectory = () => path.basename(process.cwd());
const directoryExists = (filePath) => fs.existsSync(filePath);


export { currentDirectory, directoryExists};
