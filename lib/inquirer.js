import inquirer from "inquirer";
import { currentDirectory, directoryExists } from "./files.js";

let runContext = {};

const askRunContext = function () {
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
      choices: [
        {
          name: "Bear",
        },
        {
          name: "Bull",
        },
      ],
      validate(value) {
        if (value.length == 1) {
          if (value == "Bull") {
            runContext.conditionCoefficient = "5.5";
          } else {
            runContext.conditionCoefficient = "6";
          }
          return true;
        } else {
          return "Select and option!!!";
        }
      },
    },
  ];
  return inquirer.prompt(questions);
};

export { askRunContext };
