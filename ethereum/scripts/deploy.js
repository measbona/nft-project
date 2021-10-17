const { ethers } = require("hardhat");

async function main() {
  const Cats = await ethers.getContractFactory("Cats");
  const cats = await Cats.deploy();

  console.log("Cats deployed:", cats.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });