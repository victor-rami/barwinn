import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { barwin } from "./barwin";


const sayHerro = function () {
  clear();
  console.log(chalk.greenBright(barwin));
  console.log(chalk.greenBright(figlet.textSync("Eric Barwinn !")));
  console.log(chalk.greenBright.underline.bold("The crypto predictions bot"));
};

export { sayHerro };
