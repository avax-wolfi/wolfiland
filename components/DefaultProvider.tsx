import { createWeb3ReactRoot } from "@web3-react/core";
import { NetworkContextName } from "../constants";

let Web3ReactProviderDefault: (args: any) => JSX.Element;

try {
  Web3ReactProviderDefault = createWeb3ReactRoot(NetworkContextName);
} catch (error) {
  Web3ReactProviderDefault = (props) => <>{props.children}</>;
}

const Web3ReactProviderDefaultSSR = ({ children, getLibrary }: any) => {
  return (
    <Web3ReactProviderDefault getLibrary={getLibrary}>
      {children}
    </Web3ReactProviderDefault>
  );
};

export default Web3ReactProviderDefaultSSR;
