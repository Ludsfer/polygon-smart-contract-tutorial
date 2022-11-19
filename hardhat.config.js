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

const { API_URL, PRIVATE_KEY } = process.env;

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
    }
  }
};