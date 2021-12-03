import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { barwin } from "./barwin.js";


const sayHerro = function() {
  clear();
  console.log(chalk.greenBright(barwin));
  console.log(chalk.greenBright(figlet.textSync("Eric Barwinn !")));
  console.log(chalk.greenBright.underline.bold("Lets get you setup!"));
};


export { sayHerro };
