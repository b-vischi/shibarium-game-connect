import { ethers, network, config } from "hardhat";

async function main() {
  const networkName = network.name;
  const accountsConfig = config.networks[networkName]?.accounts;

  // Detect whether accounts are configured
  const hasAccounts =
    Array.isArray(accountsConfig) && accountsConfig.length > 0;

  if (!hasAccounts) {
    console.log(
      "⚠️ No private key configured. Running in read-only mode — contract will NOT be deployed."
    );
    return;
  }

  console.log(`🚀 Deploying GameItems contract on network: ${networkName}...`);

  // Get the contract factory
  const GameItems = await ethers.getContractFactory("GameItems");

  // Deploy the contract
  const gameItems = await GameItems.deploy();

  // Wait for deployment to be mined
  await gameItems.waitForDeployment();

  console.log(`✅ GameItems deployed to: ${await gameItems.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
