import inquirer from "inquirer";
import chalk from "chalk";
import fs from 'fs';
import figlet from "figlet";
import { barwin, barwinDisclaimer } from "./barwin.js";


function sayHerro () {
  console.log(chalk.greenBright(barwin));
  console.log(chalk.greenBright(figlet.textSync("Erik Barwinn !")));
};

function sayDisclaimer () {
  console.log(chalk.greenBright(barwinDisclaimer));
};


function setRunContext () {
  console.log(chalk.greenBright.underline.bold("Lets get you setup!"));

  const questions = [
    {
      name: "COMMIT_AMOUNT",
      message: "How much $BNB do you want to commit for each position?",
      default: "0.01",
    },
    {
      name: "LEAD_SECONDS",
      message: `How many lead seconds prior to the round start do you want to commit funds?
(Network congestion can impact transaction success rates. 13 is a good number..)`,
      default: "13",
    },
    {
      type: "checkbox",
      name: "CHAIN",
      message: "Select the BSC DEX do you want to predict on?",
      choices: [
        {
          name:"PancakeSwap"
        },
        {
          name:"CandleGenie"
        },
      ]
    },
    // {
    //   type: "checkbox",
    //   name: "CONDITION_COEFFICIENT",
    //   message:
    //     "What direction is think we are experiencing?",
    //   choices: [{ name: "Bear"},{name: "Bull"}],
    //   validate(value) {
    //     if (value.length == 1) {
    //       if (value == "Bull") {
    //         value = "5.5";
    //         return true;
    //       } else {
    //         value = "6";
    //         return true;
    //       }
    //     } else {
    //       return "Select one option!!!";
    //     }
    //   },
    // },
    {
      name: "PRIVATE_KEY",
      message:
        "I know this one is weird by you have to enter your private key for the bot to authorize transactions..",
      mask: "*",
    },
  ];
  return inquirer.prompt(questions);
};


async function newRunContext() {
  try {
    const context = await setRunContext();
    console.log(chalk.greenBright.italic("Barwinn is setting your environment variables.."));

    const stream = fs.createWriteStream('.env');

    for (const key in context) {
      stream.write(`${key}=${context[key]}\n`)
    }
    return context
  } catch {
    console.error("Bao!.. There was an issue running the setup");
  }
};


export {sayHerro, sayDisclaimer, newRunContext};
// export { sayHerro, sayDisclaimer, newRunContext };
