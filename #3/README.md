# ETHER.JS PROGRAM!!!!!

What is Ether.js
 -a JavaScript library that allows developers to interact with the Ethereum blockchain.


# Ether.js #3
-Writing and interacting with the contract

EXPLAINATION:

1. Importing: Importing the ether.js library locally.
NOTE: Don't forget to add ethers version in your package.json .

Command: 
const { ethers } = require("ethers");

2. Connecting to Ethereum: RPC
-The JSON-RPC API is another popular method for interacting with Ethereum and is available in all major Ethereum node implementations.

Command:
const provider = new ethers.provider.JsonRpcProvider(`${Type_Your_url_here}`);


3. Interacting with the contract(Read and show)

Reads and shows the information stored in contract.

Command: 
const balance = await contract.balanceOf(account1);

  console.log(`\n Reding from ${address}\n`);
  console.log(`\n Balance of sender: ${balance}\n`);
  
  
 4.Writing on the contract.

Transferring Eth from one account to another 

COMMAND:
const contractWithWallet = contract.connect(wallet);

const tx = await contractWithWallet.transfer(account2, balance);
 await tx.wait();
  console.log(tx);
  
  
Thats all, keep learning!!!!!
