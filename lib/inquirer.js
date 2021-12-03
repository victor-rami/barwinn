import inquirer from "inquirer";
import chalk from "chalk";


const getRunContext = function () {

  console.log(chalk.greenBright.underline.bold("Lets get you setup!"));

  const questions = [
    {
      name: "commitAmount",
      message: "How much $BNB do you want to commit for each position?",
      default: "0.01",
    },
    {
      name: "leadTimeInSeconds",
      message: `How many lead seconds prior to the round start do you want to commit funds?
(Network congestion can impact transaction success rates. 13 is a good number..)`,
      default: "13",
    },
    {
      type: "checkbox",
      name: "conditionCoefficient",
      message:
        "What type of market you think we are experiencing? (Serect  1!)",
      choices: [{ name: "Bear"},{name: "Bull"}],
      validate(value) {
        if (value.length == 1) {
          if (value == "Bull") {
            value === "5.5";
            return true;
          } else {
            value === "6";
            return true;
          }
        } else {
          return "Select one option!!!";
        }
      },
    },
    {
      type: "password",
      name: "privateKey",
      message:
        "I know this one sounds weird by you have to enter your private Key",
      mask: "*",
    },
  ];
  return inquirer.prompt(questions);
};




export { getRunContext };
