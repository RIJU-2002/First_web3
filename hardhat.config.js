require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL=process.env.GOERLI_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.19",
  networks:{
    goerli:{
      url:GOERLI_URL,
      accounts:[PRIVATE_KEY],
    },
  },
};

//Deployed contract address 0xe3B58a081fc6142E82550a578EF0aB9Ba14e0434
