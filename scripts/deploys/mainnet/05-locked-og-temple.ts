import '@nomiclabs/hardhat-ethers';
import { ethers, network } from 'hardhat';
import { LockedOGTemple__factory, TempleStaking__factory } from '../../../typechain';
import { deployAndMine, DeployedContracts, DEPLOYED_CONTRACTS, fromAtto, toAtto } from '../helpers';

const EPOCH_SIZE = 24 * 60 * 60;
const START_TIMESTAMP = 1632880800; // Wednesday, September 29, 2021 2:00:00 AM UTC
const UNLOCK_TIMESTAMP = 1637236800; // Thursday, November 18, 2021 12:00:00 PM UTC
const MAX_EXITABLE_PER_ADDRESS = toAtto(1000) ;
const MAX_EXITABLE_PER_EPOCH = toAtto(1000) ;
const MINT_MULTIPLE = 6;

async function main() {
  const [owner] = await ethers.getSigners();

  let DEPLOYED: DeployedContracts

  if (DEPLOYED_CONTRACTS[network.name] === undefined) {
    console.log(`No contracts configured for ${network.name}`)
    return;
  } else {
    DEPLOYED = DEPLOYED_CONTRACTS[network.name];
  }

  const STAKING = new TempleStaking__factory(owner).attach(DEPLOYED.STAKING);
  const lockedOgTempleFactory = new LockedOGTemple__factory(owner);

  const LOCKED_OG_TEMPLE = await deployAndMine(
    'LOCKED_OG_TEMPLE', lockedOgTempleFactory, lockedOgTempleFactory.deploy,
    await STAKING.OG_TEMPLE(),
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });