
import { CHAIN_IDS } from 'config/web3/chains';

const IMX_ADDRESSES: {
  [chainId: number]: string;
} = {
  [CHAIN_IDS.ROPSTEN]: '0x6659a9c5cd313974343e30b4fdffd95bd4b4dcd2',
  [CHAIN_IDS.KOVAN]: '0x5671B249391cA5E6a8FE28CEb1e85Dc41c12Ba7D',
  [CHAIN_IDS.ETHEREUM_MAIN_NET]: '0x7b35ce522cb72e4077baeb96cb923a5529764a00',
  [CHAIN_IDS.ARBITRUM]: '0x56659245931CB6920e39C189D2a0e7DD0dA2d57b'
};

const IMX_DECIMALS = 18;

export {
  IMX_ADDRESSES,
  IMX_DECIMALS
};
