import clear from "clear";
import dotenv from 'dotenv';
// import fs from "fs";
// import chalk from "chalk";
// import { currentDirectory, directoryExists } from "./lib/files.js";
import { sayDisclaimer, sayHerro } from "./lib/herro.js";
import { newRunContext } from "./lib/herro.js";


// Load CLI Welcome
clear();
sayHerro();
sayDisclaimer();

// Set bot params and env variables
// runSetup();
const setup = await newRunContext();


