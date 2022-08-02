import React from "react";
import Image from "next/image";

import ConnectWallet from "../ConnectWallet/ConnectWallet";

import mintWolfi from "../../public/img/mint 1.svg";

import styles from "./WalletSection.module.css";
import Pad from "../Pad";

export interface WalletSectionProps {}

export default React.memo<WalletSectionProps>(function WalletSection() {
  return (
    <div className={styles["container"]}>
      <ConnectWallet />
      <Pad amt={30} row />
      <Image src={mintWolfi} alt="Spicy Wolfi" />
    </div>
  );
});
