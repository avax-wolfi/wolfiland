import React from "react";
import Image from "next/image";
import mint from "../../public/icons/mint now 1.png";
import mintSm from "../../public/img/mint now 1-sm.svg";
import wolfilandSm from "../../public/img/Logo-sm.svg";
import styles from "./Welcome.module.css";
import Pad from "../Pad";

export interface WelcomeProps {}

export default React.memo<WelcomeProps>(function Welcome() {
  return (
    <div className={styles["container"]}>
      <div className={styles["welcome"]}>
        <div className={styles["welcome-sm"]}>
          <h1>welcome to</h1>

          <div className={styles["wolfiland-sm"]}>
            <Image src={wolfilandSm} />
          </div>
        </div>
        <div className={styles["left-box"]}></div>

        <div className={styles["right-box"]}>
          <div className={styles["img-div"]}>
            <div className={styles["mint-now"]}>
              <Image src={mint} alt="Mint Now" />
            </div>
            <div className={styles["mint-now-sm"]}>
              <Image src={mintSm} alt="Mint Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
