import path from 'path';
import fs from 'fs';

function currentDirectory() {
  return path.basename(process.cwd());
}

function directoryExists(filePath) {
  return fs.existsSync(filePath);
}

export { currentDirectory, directoryExists };
