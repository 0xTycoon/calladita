/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-etherscan");

module.exports = {
	solidity : {

		version: "0.8.12",
        settings: {
            optimizer: {
                enabled: false,
                runs: 200
            },
        },

	},

	networks: {
    mainnet: {
		url: "http://192.168.0.105:8545", // change to your own RPC url
            chainId: 1
    }
  },
	etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "change-this-to-your-key"
  }
};
