import "hardhat";

declare module "hardhat/types/runtime" {
  import { ethers } from "ethers";
  export const ethers: typeof ethers;
}
