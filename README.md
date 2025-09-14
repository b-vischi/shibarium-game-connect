# Shibarium Game Connect 🎮🔥

A Hardhat-based project designed for the **Shibarium community**, providing a template for developers to build game integrations that can help support **SHIB token burning** and ecosystem growth.  

---

## 🚀 Features
- **Solidity smart contract** (`GameItems.sol`) with example ERC-1155 game assets  
- **Hardhat deployment scripts** with read-only mode (no private key required)  
- **Shibarium Puppynet (testnet)** integration  
- Open-source ready: designed for collaboration and adoption by the Shibarium dev community  

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone git@github.com:b-vischi/shibarium-game-connect.git
cd shibarium-game-connect

```
### 2. Install Dependencies
```bash
npm install

```
### 3. Configure Environment
Create a .env file in the root directory:
```bash
# Optional private key for deploying
PRIVATE_KEY=your_private_key_here

# Shibarium Puppynet RPC
PUPPYNET_URL=https://puppynet.shibrpc.com

```
⚠️ If PRIVATE_KEY is not set, deploy scripts will run in read-only mode.

### 4. Compile Contracts
```bash
npx hardhat compile

```
### 5. Deploy to Shibarium Puppynet
```bash
npx hardhat run scripts/deploy.ts --network puppynet

```
## Project Structure
```bash
shibarium-game-connect/
├── contracts/         # Solidity contracts
│   └── GameItems.sol
├── scripts/           # Deployment & utility scripts
│   └── deploy.ts
├── test/              # Hardhat tests
├── hardhat.config.ts  # Hardhat configuration
├── package.json
└── README.md

```
## Contributing
Contributions are welcome!

• Fork the repo

• Create a feature branch

• Submit a pull request 🚀

## 🌐 Community Vision
This project aims to:

• Encourage developers to build on Shibarium

• Provide templates for game integration

• Explore creative ways to support SHIB burning

## License
This project is licensed under the MIT License.

## 🔥 Use Cases

This framework enables developers to integrate Shibarium-based smart contracts into their games in order to automatically burn SHIB tokens through gameplay.
There are two main adoption paths:

### 1. New Web3 Games

&nbsp;&nbsp;&nbsp;&nbsp;Developers building from scratch can:

  &nbsp;&nbsp;&nbsp;&nbsp;• Deploy the provided GameItems smart contract on Shibarium Puppynet (testnet) or mainnet.

  &nbsp;&nbsp;&nbsp;&nbsp;• Mint NFTs or in-game items tied directly to blockchain transactions.

  &nbsp;&nbsp;&nbsp;&nbsp;• Define rules where every mint, transfer, or special action burns a percentage of SHIB.

  &nbsp;&nbsp;&nbsp;&nbsp;• Example: A battle game where entering an arena requires a SHIB payment, and 10% of that entry fee is burned.

### 2. Existing Web2 or Hybrid Games

  &nbsp;&nbsp;&nbsp;&nbsp;Games that already exist can integrate by adding a burn + blockchain rewards layer:

  &nbsp;&nbsp;&nbsp;&nbsp;• Call the deployment scripts or interact with the contract using the ethers API.

  &nbsp;&nbsp;&nbsp;&nbsp;• Trigger SHIB burns on specific backend events (e.g., item upgrades, premium actions, loot box purchases).

  &nbsp;&nbsp;&nbsp;&nbsp;• Reward players with NFTs or achievements tied to these transactions.

  &nbsp;&nbsp;&nbsp;&nbsp;• Example: An RPG where upgrading a weapon in the traditional game engine also calls the burn function on Shibarium, removing SHIB from circulation and issuing an NFT certificate of upgrade.
