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
