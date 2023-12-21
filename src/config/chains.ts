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
 goerli,
 holesky,
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
  scroll,
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

export const bevm = defineChain({
  id: 1501,
  name: "BEVM",
  network: "BEVM",
  nativeCurrency: {
    decimals: 18,
    name: "BTC",
    symbol: "BTC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-1.bevm.io"],
    },
    public: {
      http: ["https://rpc-2.bevm.io"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://scan.bevm.io/" },
  },
});


export const WEMIX3 = defineChain({
  id: 1111,
  name: "WEMIX3.0 Mainnet",
  network: "WEMIX3.0 Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "WEMIX",
    symbol: "WEMIX",
  },
  rpcUrls: {
    default: {
      http: ["wss://ws.wemix.com"],
    },
    public: {
      http: ["https://api.wemix.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.wemix.com" },
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
  cfx,
  cronos,
  bevm,
  sepolia,
  moonbeam,
  iotex,
  kava,
  ethw,
  WEMIX3,
  scroll,
  goerli,
  holesky
};

export type ChainKey = keyof typeof inscriptionChains;
