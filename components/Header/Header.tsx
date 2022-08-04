import React, { useState } from "react";

import Image from "next/image";

import barLogo from "../../public/icons/menu logo 1.png";
import  telegram from "../../public/icons/telegram.svg";
import twitter from "../../public/icons/twitter 1.svg";
import connectWallet from "../../public/icons/connect wallet.svg";
import viewWallet from "../../public/img/connect-2.svg";
import connectWalletIcon from "../../public/img/connectW.svg";
import styles from "./Header.module.css";
import Link from "next/link";
import Pad from "../Pad";
import { useConnect } from "../../hooks/useConnect";
import { connectorsByName } from "../../pages/_app";
import Wallet from "../Wallet/Wallet";

export interface HeaderProps {}

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

  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <>
      <Wallet
        isModalVisible={showWalletModal}
        handleOk={() => setShowWalletModal(false)}
        handleCancel={() => setShowWalletModal(false)}
      />
      <button
        className={styles["connect-btn"]}
        disabled={disabled}
        onClick={() => {
          setActivatingConnector(currentConnector);
          activate(connectorsByName["Connect With Metamask"]);
        }}
      >
        <div className={styles["connect-btn-text-container-box"]}>
          <div className={styles["connect-btn-text"]}>
            {activating ? (
              "CONNECTING"
            ) : connected ? (
              <Image
                src={viewWallet}
                onClick={() => setShowWalletModal(true)}
                style={{cursor: 'pointer'}}
              />
            ) : (
              <Image src={connectWalletIcon} style={{cursor: 'pointer'}} />
            )}
          </div>
        </div>
      </button>
    </>
  );
}

export default React.memo<HeaderProps>(function Header() {
  return (
    <header className={styles["container"]}>
      <nav className={styles["nav"]}>
        {/* MENU ICON */}
        <div className={styles["nav-icon"]}>
          <Image
           
            src={barLogo}
            alt="Menu"
          />
        </div>

        {/* OPTIONS LINKS */}
        <div className={styles["nav-options"]}>
          <a href="#story">story</a>
          <a href="#collection">
            collection
          </a>
          <a  href="#mint">
            mint
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className={styles["social-links"]}>
          <a
            
            href="#"
          >
            <Image src={telegram} alt="Telegram" />
          </a>
          <a
           
            href={"https://twitter.com/wolfilandnfts"}
          >
            <Image src={twitter} alt="Twitter" />
          </a>
          <div className={styles["connect-button-container"]}>
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  );
});
