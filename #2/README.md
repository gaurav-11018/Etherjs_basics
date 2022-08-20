# Ether.js-2

Basics Of Ether.js🎉
 -a JavaScript library that allows developers to interact with the Ethereum blockchain.


Ether.js #2
-Super basic example. Interacting with the smart-contract!!

# EXPLAINATION:

1. Importing: Importing the ether.js library locally.
NOTE: Don't forget to add ethers version in your package.json .

Command: 
const { ethers } = require("ethers");

2. Connecting to Ethereum: RPC
-The JSON-RPC API is another popular method for interacting with Ethereum and is available in all major Ethereum node implementations.

Command:
const provider = new ethers.provider.JsonRpcProvider(`${Type_Your_url_here}`);

3. Interacting with the contract(Read and Show)

First off, we need to know about ABI!!!

What's an abi? 
The Contract Application Binary Interface (ABI) is the standard way to interact with contracts in the Ethereum ecosystem, both from outside the blockchain and for contract-to-contract interaction.

With the help of the contract abi we interact and read and display the contents of the token we want to see!!
Command:
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
];

const name = await http://contract.name
();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  
  console.log(`Symbol: ${symbol}`);

