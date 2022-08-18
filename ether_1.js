const { ethers } = require("ethers");

const Type_Your_url_here = "ur RPC_URL";

const provider = new ethers.provider.JsonRpcProvider(`${Type_Your_url_here}`);

const address = "put_ur_address";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `ETH balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`
  );
};

main();
