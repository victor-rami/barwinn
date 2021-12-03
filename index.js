import clear from "clear";
import fs from "fs";
import chalk from "chalk";
import { currentDirectory, directoryExists, readConfig } from "./lib/files.js";
import { sayDisclaimer, sayHerro } from "./lib/herro.js";
import { getRunContext } from "./lib/inquirer.js";

const CONFIG_FILE = "config.json";

// Load CLI Welcome
clear();
sayHerro();
sayDisclaimer();

// Run user setup prompts
async function runSetup() {
  try {
    let runContext = await getRunContext();
    console.log(chalk.greenBright.italic("Creating config file.."));
    runContextString = JSON.stringify(runContext);
    fs.writeFile("config.json", runContextString);
    console.log(chalk.greenBright.italic.runContext);
  } catch {
    console.error();
  }
};

let config = directoryExists(CONFIG_FILE)
  ? readConfig(CONFIG_FILE)
  : runSetup();

console.log(config);
