import React from "react";
import Image from "next/image";
import mint from "../../public/icons/mint now 1.svg";
import mintSm from "../../public/img/mint now 1-sm.svg";
import wolfi from '../../public/icons/hero 1.svg'
import wolfiSm from '../../public/img/hero-sm.svg'
import wolfilandSm from "../../public/icons/Layer_1-2.svg";
import styles from "./Welcome.module.css";
import Pad from "../Pad";

export interface WelcomeProps {}

export default React.memo<WelcomeProps>(function Welcome() {
  return (
    <div className={styles["container"]}>
      <div className={styles["welcome"]}>
        <div className={styles["welcome-sm"]}>
        
          <Pad amt={20} />
          <div className={styles["wolfiland-sm"]}>
            <Image src={wolfilandSm} />
          </div>
         
          <div className={styles['mint-now-sm']}>
          <a href="#mint"><Image src={mintSm} /></a>
          </div>
        </div>

        
        <div className={styles["left-box"]}></div>
         
        <div className={styles['wolfi-welcome']}>
           <Image src={wolfi} />
        </div>
        <div className={styles['wolfi-welcome-sm']}>
           <Image src={wolfiSm} />
        </div>
        <div className={styles["right-box"]}>

          <div className={styles["img-div"]}>
            <div className={styles["mint-now"]}>
              <a href="#mint">
                <Image src={mint} alt="Mint Now" />
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
});
