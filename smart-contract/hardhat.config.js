require('@nomiclabs/hardhat-waffle')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/-FBpzNlNGtfehhOSTsfNlKI4E4MB_yJR',
      accounts: [
        'f2679263aadf9db7949246a5265f7cf0b0aece610ba4d84dcfc9304ccd050d0c'
      ],
    }
  },
};
