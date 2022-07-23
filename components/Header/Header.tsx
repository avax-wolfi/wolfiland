import React from "react";

import Image from "next/image";

import barLogo from "../../public/icons/menu logo 1.png";
import discord from "../../public/icons/discord 1.svg";
import twitter from "../../public/icons/twitter 1.svg";
import connectWallet from "../../public/icons/connect wallet.svg";
import styles from "./Header.module.css";
import Link from "next/link";
import Pad from "../Pad";
import { useConnect } from "../../hooks/useConnect";
import { connectorsByName } from "../../pages/_app";

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

  // TODO: insert a varation for connected
  return disabled ? (
    <>{activating ? "Connecting" : connected ? "Connected" : "Connect"}</>
  ) : (
    <button
      className={styles["connect-btn"]}
      disabled={disabled}
      onClick={() => {
        setActivatingConnector(currentConnector);
        activate(connectorsByName["Connect With Metamask"]);
      }}
    >
      <a className="d-flex justify-content-center  " style={{ top: 0 }}>
        <Image src={connectWallet} alt="Connect wallet" />
      </a>
    </button>
  );
}

export default React.memo<HeaderProps>(function Header() {
  return (
    <header className={styles["container"]}>
      <nav className={styles["nav"]}>
        {/* MENU ICON */}
        <Image
          className="navbar-brand navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#headerNavbar"
          aria-controls="headerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          src={barLogo}
          alt="Menu"
        />

        {/* OPTIONS LINKS */}
        <div className={styles["nav-options"]}>
          <a href="#">story</a>
          <a className="nav-link text-white text-uppercase" href="#">
            collection
          </a>
          <a className="nav-link text-white text-uppercase" href="#">
            mint
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className={styles["social-links"]}>
          <a
            className="d-flex justify-content-center me-2 mt-3 mb-3 mb-lg-0 mt-md-0"
            href="#"
          >
            <Image src={discord} alt="Discord" />
          </a>
          <a
            className="d-flex justify-content-center me-2 mb-3 mb-lg-0 mt-md-0"
            href={""}
          >
            <Image src={twitter} alt="Twitter" />
          </a>
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
});
