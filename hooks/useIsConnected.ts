import { connectorsByName } from "../pages/_app";
import { useConnect } from "./useConnect";

export function useIsConnected() {
  const {
    connector,
  } = useConnect();
  const currentConnector = connectorsByName["Connect With Metamask"];
  return currentConnector === connector;
}
