import chalk from "chalk";
import figlet from "figlet";
import { barwin, barwinDisclaimer } from "./barwin.js";


const sayHerro = function() {
  console.log(chalk.greenBright(barwin));
  console.log(chalk.greenBright(figlet.textSync("Erik Barwinn !")));
};

const sayDisclaimer = function() {
  console.log(chalk.greenBright(barwinDisclaimer));
};

export { sayHerro, sayDisclaimer };
