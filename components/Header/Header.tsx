import React, { useState } from "react";

import Image from "next/image";

import barLogo from "../../public/icons/menu logo 1.svg";
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
  return (
    <>
      <button className={styles["connect-btn"]}>
        <div className={styles["connect-btn-text-container-box"]}>
          <div className={styles["connect-btn-text"]}>
          <Link href='https://joepegs.com/collections/0xbc3323468319cf1a2a9ca71a6f4034b7cb5f8126'>
            <Image
                  src={viewWallet}
                  style={{cursor: 'pointer'}}
                />
          </Link>
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
            
            href="https://t.me/WolfiLandNFT"
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
