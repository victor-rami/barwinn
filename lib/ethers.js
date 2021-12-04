import ethers from "ethers";
import { formatEther, parseEther } from "@ethersproject/units";
import {
  BNB_URI,
  BNB_PANCAKE_ADDRESS,
  BNB_PANCAKE_ABI,
} from "./lib/bsc/bsc-config.js";

function setSignor(rpcUri) {
  const provider = new ethers.providers.JsonRpcProvider(rpcUri);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  return signer;
}

function setContract(address, abi, signer) {
  const contract = new ethers.Contract(address, abi, signer);
  return contract;
}

export { setSignor,setContract };
