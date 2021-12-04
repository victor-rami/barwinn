import clear from "clear";
import dotenv from 'dotenv';
import {
    runDisclaimer,
    runHerro,
    newRunContext
} from "./lib/cli.js";
import { fileExists } from "./lib/utils.js";

// Load CLI Welcome
clear();
runHerro();
runDisclaimer();

// Check for .env file. If true the user will be prompted to
// set the run context.
if (!fileExists('.env')) {
    await newRunContext();
};

dotenv.config();

console.log(process.env.COMMIT_AMOUNT);


