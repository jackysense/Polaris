import { defineChain } from "viem";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  celo,
  classic,
  confluxESpace,
  cronos,
  eos,
  fantom,
  gnosis,
  linea,
  mainnet,
  okc,
  opBNB,
  polygon,
  zkSync} from "viem/chains";

export const shibarium = defineChain({
  id: 109,
  name: "Shibarium",
  network: "shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "BONE",
    symbol: "BONE",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.shibrpc.com"],
    },
    public: {
      http: ["https://rpc.shibrpc.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://shibariumscan.io" },
  },
});

export const cfx = defineChain({
  id: 1030,
  name: "Conflux eSpace",
  network: "Conflux eSpace",
  nativeCurrency: {
    decimals: 18,
    name: "CFX",
    symbol: "CFX",
  },
  rpcUrls: {
    default: {
      http: ["https://evm.confluxrpc.com"],
    },
    public: {
      http: ["https://evm.confluxrpc.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://evm.confluxscan.net/" },
  },
});




export const inscriptionChains = {
  eth: mainnet,
  bsc,
  polygon,
  avalanche,
  classic,
  base,
  arbitrum,
  zkSync,
  eos,
  linea,
  okc,
  fantom,
  opBNB,
  celo,
  confluxESpace,
  gnosis,
  shibarium,
  cfx,
  cronos
};

export type ChainKey = keyof typeof inscriptionChains;
