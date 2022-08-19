const { ethers } = require("ethers");

const Type_Your_url_here = "ur RPC_URL";

const provider = new ethers.provider.JsonRpcProvider(`${Type_Your_url_here}`);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = " put your token address"; //ERC20-token address

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  const balance = await contract.balanceOf(
    "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
  );

  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
};

main();
