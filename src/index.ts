import {
  AlchemyMultichainClient,
} from './alchemy-multichain-client';
import { Network } from 'alchemy-sdk';

async function main() {
  // Default config to use for all networks.
  const defaultConfig = {
    apiKey: 'demo', // TODO: Replace with your API key.
    network: Network.MATIC_MAINNET
  };
  // Include optional setting overrides for specific networks.
  const overrides = {
    // TODO: Replace with your API keys.
    [Network.MATIC_MAINNET]: { apiKey: 'matic-api-key', maxRetries: 10 },
    [Network.ARB_MAINNET]: { apiKey: 'arb-api-key' }
  };
  const alchemy = new AlchemyMultichainClient(defaultConfig, overrides);

  // get NFTs in multiple networks
  const owner = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
  const mainnetNfts = await alchemy
    .forNetwork(Network.ETH_MAINNET)
    .nft.getNftsForOwner(owner, { pageSize: 5 });
  const maticNfts = await alchemy
    .forNetwork(Network.MATIC_MAINNET)
    .nft.getNftsForOwner(owner, { pageSize: 5 });

  console.log('mainnetNfts', mainnetNfts);
  console.log('maticNfts', maticNfts);
}

main();
