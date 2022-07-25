import { useConnect } from "../../hooks/useConnect";
import { connectorsByName } from "../../pages/_app";

export function ConnectButton() {
  const {
    activate,
    activatingConnector,
    connector,
    context,
    error,
    setActivatingConnector,
    triedEager,
  } = useConnect();
  const currentConnector = connectorsByName["Connect With Metamask"];
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;
  
  return (
    <button
      className="btn"
      disabled={disabled}
      onClick={() => {
        setActivatingConnector(currentConnector);
        activate(connectorsByName["Connect With Metamask"]);
      }}
    >
      {activating ? "Connecting" : connected ? "Connected" : "Connect"}
    </button>
  );
}