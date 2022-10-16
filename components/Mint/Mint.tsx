import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import mintNow from "../../public/icons/mint now 1.png";
import mintAtJoePegs from "../../public/img/mint-at-joepegs.svg";

import wolfiLand from "../../public/icons/logo big 1.svg";

import styles from "./Mint.module.css";
import Pad from "../Pad";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";
import {
  useMintingContract,
} from "../../hooks/useContract";
import { useTransactionAdder } from "../../state/transactions/hooks";
import { useConnect } from "../../hooks/useConnect";
import { connectorsByName } from "../../pages/_app";
import Wallet from "../Wallet/Wallet";
import Link from "next/link";
import { ChainId } from "@pangolindex/sdk";

export interface ConnectWalletProps {}

export default React.memo<ConnectWalletProps>(function ConnectWallet() {
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

  const { chainId, account, library } = useWeb3React();
  const mintingContract = useMintingContract();
  const addTransaction = useTransactionAdder();

  const [totalSupply, setTotalSupply] = useState("0");
  const [feedback, setFeedback] = useState("");
  const [forceRefresh, setForceRefresh] = useState(0);

  const [showWalletModal, setShowWalletModal] = useState(false);


  const getData = useCallback(async () => {
    setTotalSupply(await mintingContract.totalSupply());
  }, [mintingContract]);

  useEffect(() => {
    if (chainId) {
      getData();
    }
  }, [chainId]);

  return (
    <>
     <Wallet
        isModalVisible={showWalletModal}
        handleOk={() => setShowWalletModal(false)}
        handleCancel={() => setShowWalletModal(false)}
        refresh={forceRefresh}
      />
     <div className={styles["container"]}>
      <div className={styles["logotype-desc"]}>
        <Image src={wolfiLand} alt="WolfiLand" />
        <Pad amt={20} row />
      </div>
      <Pad amt={40} />
        <Link href='https://joepegs.com/collections/0xbc3323468319cf1a2a9ca71a6f4034b7cb5f8126'>
          <Image src={mintAtJoePegs} alt="Mint at Joepegs!" style={{cursor: 'pointer'}} />
        </Link>
    </div>
    </>
  );
});
