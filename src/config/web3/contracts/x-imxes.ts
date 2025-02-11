
import { CHAIN_IDS } from 'config/web3/chains';

const X_IMX_ADDRESSES: {
  [chainId: number]: string;
} = {
  [CHAIN_IDS.ROPSTEN]: '0xD6986435Df54C5CBC3F657636ac9D3Bd35368E58',
  [CHAIN_IDS.KOVAN]: '0x31864bc58A47A4Fc8782B4135873788E876dE9eB',
  [CHAIN_IDS.ETHEREUM_MAIN_NET]: '0x363b2deac84f0100d63c7427335f8350f596bf59',
  [CHAIN_IDS.ARBITRUM]: '0x27205620EfB293D50B0e624421620513394eA78f'
};

const X_IMX_DECIMALS = 18;

export {
  X_IMX_ADDRESSES,
  X_IMX_DECIMALS
};
