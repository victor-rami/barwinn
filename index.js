import clear from "clear";
import dotenv from 'dotenv';
import { fileExists,sleep } from "./lib/utils.js";

import {
    runDisclaimer,
    runHerro,
    newRunContext
} from "./lib/cli.js";

import {setSignor,setContract} from "./lib/ethers.js";
import {
    BNB_URI,
    BNB_PANCAKE_ADDRESS,
    BNB_PANCAKE_ABI,
  } from "./lib/bsc/bsc-config.js";

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

// Remove the lead time defined when setup from max (5 mins)
const SLEEP_TIME = (300 - process.env.LEAD_SECONDS ) * 100

// Blockchain web3 setups
const signer = setSignor(BNB_URI);
const contract = setContract(BNB_PANCAKE_ADDRESS,BNB_PANCAKE_ABI,signer);

// Refactor to fix argument
await sleep(SLEEP_TIME);

