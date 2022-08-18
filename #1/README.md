# Ether.js-1


Ether.js #1
-Super basic example. Getting started with ether.js!!


# Explaination of the above code

1.
Importing: Importing the ether.js library locally.
NOTE: Don't forget to add ethers version in your package.json .

Command: 
const { ethers } = require("ethers");

2.
Connecting to Ethereum: RPC
-The JSON-RPC API is another popular method for interacting with Ethereum and is available in all major Ethereum node implementations.

Command:
const provider = new ethers.provider.JsonRpcProvider(`${Type_Your_url_here}`);

3.
Getting the ETH Balance
-This function wrapped in main is the vital part of this program. getBalance is a function of the Ether.js blockchain provider which gives the balance of the address given

NOTE: you can use contract.address to obtain the address of the contract instance.
Command:
const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `ETH balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`
  );
};

main();


Thats all!!! Keep Learning🎈
