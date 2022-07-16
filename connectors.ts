import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const RPC_URL_1 = "https://api.avax-test.network/ext/bc/C/rpc";
const RPC_URL_4 = "https://api.avax.network/ext/bc/C/rpc";

const RPC_URLS: { [chainId: number]: string } = {
  1: RPC_URL_1 as string,
  4: RPC_URL_4 as string
};

export const injected = new InjectedConnector({
  supportedChainIds: [43113, 43114]
});

export const network = new NetworkConnector({
  urls: { 43113: RPC_URLS[1], 43114: RPC_URLS[4] },
  defaultChainId: 43113
});
