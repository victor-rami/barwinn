import path from "path";
import fs from "fs";



const currentDir = () => path.basename(process.cwd());
const fileExists = (filePath) => fs.existsSync(filePath);


export { currentDir, fileExists};
