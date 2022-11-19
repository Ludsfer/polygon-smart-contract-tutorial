// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// const { API_URL, PRIVATE_KEY } = process.env;

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     mumbai: {
//       url: API_URL,
//       accounts: [`0x${PRIVATE_KEY}`]
//     }
//   }
// };

require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

const { API_URL, PRIVATE_KEY, MATIC_URL } = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    matic: {
      url: MATIC_URL,
      accounts: [`0x${PRIVATE_KEY}`] // Real production Mainnet. Use the same private key if 
      // the TEST account (TESTNET) is the same as the production account (MAINNET)
    }
  }
};