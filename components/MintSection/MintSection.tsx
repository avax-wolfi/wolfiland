import React from "react";
import Image from "next/image";

import Mint from "../Mint/Mint";

import mintWolfi from "../../public/img/mint 1.svg";

import styles from "./MintSection.module.css";
import Pad from "../Pad";

export interface MintSectionProps {}

export default React.memo<MintSectionProps>(function MintSection() {
  return (
    <div className={styles["container"]} id="mint-section">
      <Mint />
      <Pad amt={30} row />
      <Image src={mintWolfi} alt="Spicy Wolfi" />
    </div>
  );
});
