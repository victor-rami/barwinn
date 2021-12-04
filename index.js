import clear from "clear";
import dotenv from 'dotenv';
import {
    sayDisclaimer,
    sayHerro,
    newRunContext
} from "./lib/cli.js";
import { fileExists } from "./lib/utils.js";

// Load CLI Welcome
clear();
sayHerro();
sayDisclaimer();

// Check for .env file. If true the user will be prompted to
// set the run context.
if (!fileExists('.env')) {
    return await newRunContext();
};

dotenv.config();

console.log(process.env.CHAIN);


