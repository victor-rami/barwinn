import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import figlet from "figlet";
import { prompts, barwin, disclaimer } from "./cli-prompts.js";

function runHerro() {
  console.log(chalk.greenBright(barwin));
  console.log(chalk.greenBright(figlet.textSync("Erik Barwinn !")));
}

function runDisclaimer() {
  console.log(chalk.greenBright(barwinDisclaimer));
}

function setRunContext() {
  console.log(chalk.greenBright.underline.bold("Lets get you setup!"));
  const questions = prompts;
  return inquirer.prompt(questions);
}

async function newRunContext() {
  try {
    const context = await setRunContext();
    console.log(
      chalk.greenBright.italic(
        "Barwinn is setting your environment variables.."
      )
    );
    const stream = fs.createWriteStream(".env");
    for (const key in context) {
      stream.write(`${key}=${context[key]}\n`);
    }
    return context;
  } catch {
    console.error("Bao!.. There was an issue running the setup");
  }
}

export { runHerro, runDisclaimer, newRunContext };
