import React from "react";
import Image from "next/image";
import magentaWaves from "../../public/img/waves.svg";
import wolfiCollection from "../../public/img/wolfi-collection.svg";
import wolfi from "../../public/img/about 1.svg";
import group1 from "../../public/img/Group 1.png";
import group2 from "../../public/img/Group 2.png";
import group3 from "../../public/img/Group 3.png";
import group4 from "../../public/img/Group 4.png";




import benefits from "../../public/img/benefits.svg";
import styles from "./Collection.module.css";
import Pad from "../Pad";

export interface CollectionProps {}

export default React.memo<CollectionProps>(function Collection() {
  return (
    <div className={styles["container"]}>
      <Image className={styles["top-waves"]} src={magentaWaves} alt="" />

      <div className={styles["magenta"]}>
        <Pad amt={100} />
        <div className={styles["wolfi-collection"]}>
          <div className={styles["desc-collection"]}>
            <Image src={wolfiCollection} alt="Wolfi" />
            <Pad amt={60} />
            <p>
              This collection works as a fund to support me as an artist. If you
              use wolfi daily for your memes or posts, a mint from this
              collection will be appreciated. I don’t intend for this project to
              become a financial investment, so if you expect that, please
              re-consider minting (it is cheap anyway!). There’s a total of
              6,000 wolfis accessible for minting, costing $20 US dollars each
              in AVAX. The contract is programmed so we can adjust the AVAX
              price to $20 US dollars in case of massive price fluctuations.
            </p>
          </div>
          <Pad amt={70} row />
          <Image src={wolfi} alt="Wolfi" style={{ alignSelf: "center" }} />
        </div>
        <Pad amt={100} />
        <div className={styles["wolfi-benefits"]}>
          <Image src={benefits} alt="NFT Benefits" />
          <Pad amt={40} />
          <div className={styles["card-group"]}>
            <div className={styles["card"]}>
              <div className={styles['card-img']}>
              <Image src={group1} alt="I" />
              </div>
             
            
              <p>
                You'll be part of the official wolfi collection list of
                addresses that 3rd party projects can use to deploy airdrops and
                many other things.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles['card-img']}>
              <Image src={group2} alt="II" />
              </div>
             
              
              <p>
                We grant all copyright rights to the user for their mint(s).
                This particular point doesn't include base wolfi; It is only
                granted for the minted wolfi with the specific clothing and hair
                color you generate.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles['card-img']}>
              <Image src={group3} alt="III" />
              </div>
             
              
              <p>
              You will have access to our exclusive merch store (TBA).
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles['card-img']}>
              <Image src={group4} alt="IV" />
              </div>
              
              
              <p>
              A exclusive digital artbook of wolfi (TBA).
              </p>
            </div>
          </div>
          <Pad amt={150} />
        </div>
      </div>
      <Image className={styles["down-waves"]} src={magentaWaves} alt="" />
    </div>
  );
});
