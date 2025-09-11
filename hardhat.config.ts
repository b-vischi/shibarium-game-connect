import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    puppynet: {
      url: process.env.PUPPYNET_RPC_URL || "",
      chainId: 157,
      accounts: accounts,
    },
  },
};

export default config;
