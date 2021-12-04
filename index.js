import clear from "clear";
import dotenv from 'dotenv';
import {
    runDisclaimer,
    runHerro,
    newRunContext
} from "./lib/cli.js";
import { fileExists } from "./lib/utils.js";

//Refactor for adding more networks and Dex tools.
import {
    BNB_URI,
    BNB_PANCAKE_ADDRESS,
    BNB_PANCAKE_ABI
 } from "./lib/networks/bsc.js";

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

const ABI = BNB_PANCAKE_ABI;
const

console.log(process.env.COMMIT_AMOUNT);


