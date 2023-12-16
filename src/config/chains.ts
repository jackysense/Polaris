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
  filecoin,
  gnosis,
 iotex, 
 kava,
  klaytn,
  linea,
  mainnet,
  moonbeam,
  neonMainnet,
  okc,
  opBNB,
  optimism,
  polygon,
  sepolia,
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

export const ethw = defineChain({
  id: 10001,
  network: 'EthereumPoW',
  name: 'EthereumPoW',
  nativeCurrency: { name: 'ethw', symbol: 'ETHW', decimals: 18 },
  rpcUrls: { 
     default: { http: ['https://mainnet.ethereumpow.org'] },
    public: {      
      http: ['https://mainnet.ethereumpow.org'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://mainnet.ethwscan.com',
    },
    default: {
      name: 'Etherscan',
      url: 'https://www.oklink.com/en/ethw',
    },
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
  opBNB,
  okc,
  polygon,
  fantom,
  avalanche,
  classic,
  klaytn,
  optimism,
  base,
  arbitrum,
  zkSync,
  eos,
  linea,
  
  celo,
  confluxESpace,
  gnosis,
  filecoin,
  shibarium,
  sepolia,
  moonbeam,
  iotex,
  kava,ethw
};

export type ChainKey = keyof typeof inscriptionChains;
