import { AlchemyMultichainClient } from './alchemy-multichain-client';
import { Network } from 'alchemy-sdk';

async function main() {
  // Default config to use for all networks.
  const defaultConfig = {
    apiKey: 'demo', // TODO: Replace with your Mainnet Alchemy API key.
    network: Network.ETH_MAINNET
  };
  // Include optional setting overrides for specific networks.
  const overrides = {
    // TODO: Replace with your API keys.
    [Network.MATIC_MAINNET]: { apiKey: 'demo', maxRetries: 10 }, // Replace with your Matic Alchemy API key.
    [Network.ARB_MAINNET]: { apiKey: 'demo' } // Replace with your Arbitrum Alchemy API key.
  };
  const alchemy = new AlchemyMultichainClient(defaultConfig, overrides);

  // get NFTs in multiple networks
  // owner for which you want to get the NFTs
  const owner = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';

  // get NFTs for owner in mainnet and matic networks with a page size of 5
  const mainnetNfts = await alchemy
    .forNetwork(Network.ETH_MAINNET)
    .nft.getNftsForOwner(owner, { pageSize: 5 });
  const maticNfts = await alchemy
    .forNetwork(Network.MATIC_MAINNET)
    .nft.getNftsForOwner(owner, { pageSize: 5 });

  // log the NFTs
  console.log('mainnetNfts', mainnetNfts);
  console.log('maticNfts', maticNfts);
}

main();
