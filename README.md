# Alchemy SDK Multichain Demo

This is a simple demo of how to use the Alchemy SDK with multiple chains in a single application
while managing the different API keys and endpoints for each chain.

The `src/alchemy-multi-chain-client.ts` file contains a sample implementation of a
`AlchemyMultichainClient` class, which is a wrapper around the Alchemy SDK that allows using
multiple chains in a single application. This should be a good starting point for building
out your own multichain application using the Alchemy SDK.

The `src/index.ts` file contains a simple demo using the `AlchemyMultichainClient` class to
make requests across multiple chains. Please feel free to modify this demo file to test out
different requests and chains.

## Getting Started

To get started, clone this repo. Then, run `npm install` to install the dependencies. To run the
demo, run `npm run demo`.

## Sample Usage

Here's a sample usage of the `AlchemyMultichainClient` class from the demo:

```ts
import { AlchemyMultichainClient } from './alchemy-multichain-client';
import { Network } from 'alchemy-sdk';

const owner = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
const defaultSettings = { apiKey: 'default-api-key' };
const overrides = {
  [Network.MATIC_MAINNET]: { apiKey: 'matic-api-key' }
};
const alchemy = new AlchemyMultichainClient(defaultSettings, overrides);
alchemy.forNetwork(Network.ETH_MAINNET).getNftsForOwner(owner); // Uses `default-api-key`
alchemy.forNetwork(Network.MATIC_MAINNET).getNftsForOwner(owner); // Uses `matic-api-key`
```

Please feel free to copy or modify this sample implementation to suit your needs in your own
projects!
