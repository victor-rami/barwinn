import { currentDirectory, directoryExists } from "./lib/files.js";
import { sayHerro } from "./lib/herro.js";
import { askRunContext } from "./lib/inquirer.js";

// Load CLI Welcome
sayHerro();

// Run user setup prompts
const run = async () => {
    const runContext = await askRunContext();
    console.log(runContext);
};

run();

