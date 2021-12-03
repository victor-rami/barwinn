import inquirer from "inquirer";
import { currentDirectory, directoryExists } from "./files.js";

const askRunContext = function () {
  const questions = [
    {
      name: "commitAmount",
      message: "How much $BNB do you want to commit for each position?",
      default: "0.01",
    },
    {
      name: "leadTimeInSeconds",
      message: `How many lead seconds prior to the round start do you want to commit \
            funds? (Network congestion can impact transaction success rates. 13 is a good number..)`,
      default: "13",
    },
    {
      type: "checkbox",
      name: "conditionCoefficient",
      message:
        "What type of market you think we are experiencing? (Its okurtt if you dont know..)",
      choices: ["Bear", "Bull", "Dont Know"],
    },
  ];
};

export { askRunContext };
