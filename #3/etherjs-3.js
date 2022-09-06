const { ethers } = require("ethers");

const Type_Your_url_here = "ur RPC_URL";

const provider = new ethers.provider.JsonRpcProvider(`${Type_Your_url_here}`);

const account1 = ""; //Your account address 1
const account2 = ""; //Your account address 2

const privateKey1 = ""; //private key (never ever share this with anyone, dont push it to github pleaseeeeeee)
const wallet = new ethers.wallet(privateKey1, provider);

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "put ur contract address";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\n Reding from ${address}\n`);
  console.log(`\n Balance of sender: ${balance}\n`);

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();

  console.log(tx);

  const balanceOfSender = await contract.balanceOf(account1);
  const balanceOfReciever = await contract.balanceOf(account1);

  console.log(`\n Balance of sender: ${balanceOfSender}\n`);
  console.log(`\n Balance of reciever: ${balanceOfReciever}\n`);
};

main();
