import { AmountWithBaseDenom, Chain, TxParams, WalletTxParams } from '@thorswap-lib/types';

import { UTXOApiClientType } from './commonApiTypes.js';

export type UTXOChain = Chain.Bitcoin | Chain.BitcoinCash | Chain.Doge | Chain.Litecoin;

export type Witness = {
  value: number;
  script: Buffer;
};
export type UTXO = {
  hash: string;
  index: number;
  value: number;
  witnessUtxo: Witness;
  txHex?: string;
};

export type AddressBalance = {
  confirmed: AmountWithBaseDenom;
  unconfirmed: AmountWithBaseDenom;
  address: string;
};

export type UTXOTransactionData = {
  txHash: string;
  inputs: UTXOTransactionIO[];
  outputs: UTXOTransactionIO[];
  time: number;
  tx_hex?: string;
};

export type UTXOTransactionIO = {
  txId: string | undefined;
  address: string;
  value: string | number;
};

export type UTXOBaseToolboxParams = {
  apiClient: UTXOApiClientType;
  chain: UTXOChain;
};

export type UTXOBuildTxParams = TxParams & {
  feeRate: number;
  sender: string;
  fetchTxHex?: boolean;
};

export type UTXOTransferParams = WalletTxParams & {
  feeRate?: number;
};

export type UTXOWalletTransferParams<T, U> = UTXOTransferParams & {
  signTransaction: (params: T) => Promise<U>;
};

export type UTXOBroadcastTxParams = {
  txHex: string;
};

export type UTXOCreateKeyParams = { phrase?: string; wif?: string; derivationPath: string };
