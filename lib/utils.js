import path from "path";
import fs from "fs";



const currentDir = () => path.basename(process.cwd());
const fileExists = (filePath) => fs.existsSync(filePath);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};


export { currentDir, fileExists, sleep};
