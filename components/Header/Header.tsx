import React from "react";

import Image from "next/image";

import barLogo from "../../public/icons/menu logo 1.png";
import discord from "../../public/icons/discord 1.svg";
import twitter from "../../public/icons/twitter 1.svg";
import connectWallet from "../../public/icons/connect wallet.svg";
import styles from "./Header.module.css";
import Link from "next/link";
import Pad from "../Pad";

export interface HeaderProps {}

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
            <a
              
             
              href="#"
            >
              story
            </a>
            <a className="nav-link text-white text-uppercase" href="#">
              collection
            </a>
            <a className="nav-link text-white text-uppercase" href="#">
              mint
            </a>
          </div>
        
          {/* SOCIAL LINKS */}
          <div
            className={
              styles["social-links"]
            }
          >
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
            <a
              className="d-flex justify-content-center  "
              style={{ top: 0 }}
              href="#"
            >
              <Image src={connectWallet} alt="Connect wallet" />
            </a>
          </div>
       
      </nav>
    </header>
  );
});
