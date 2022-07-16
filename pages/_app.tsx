import dynamic from "next/dynamic";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injected } from "../connectors";

import { Provider } from "react-redux";
import store from "../state";
import ApplicationUpdater from "../state/application/updater";
import TransactionUpdater from "../state/transactions/updater";
import MulticallUpdater from "../state/multicall/updater";

export enum ConnectorNames {
  Injected = "Connect With Metamask",
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

if (typeof window !== "undefined" && "ethereum" in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false;
}

function Updaters() {
  return (
    <>
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  );
}

const Web3ReactProviderDefault = dynamic(
  () => import("../components/DefaultProvider"),
  { ssr: true }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <Provider store={store}>
            <Updaters />
            <Component {...pageProps} />
          </Provider>
        </Web3ReactProviderDefault>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
