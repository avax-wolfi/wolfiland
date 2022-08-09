import React from "react";
import Image from "next/image";
import magentaWaves from "../../public/img/wavesResize.svg";
import wolfiCollection from "../../public/img/wolfi-collection.svg";
import wolfi from "../../public/img/aboutDefinitive.svg";
import group1 from "../../public/img/Group 1.png";
import group2 from "../../public/img/Group 2.png";
import group3 from "../../public/img/Group 3.png";
import group4 from "../../public/img/Group 4.png";
import wolfiSm from "../../public/img/about-sm.svg";

import benefits from "../../public/img/benefits.svg";
import styles from "./Collection.module.css";
import Pad from "../Pad";

export interface CollectionProps {}

export default React.memo<CollectionProps>(function Collection() {
  return (
    <div className={styles["container"]} id="collection">
      <div className={styles["top-waves"]}>
        <Image src={magentaWaves} alt="" />
      </div>
      <div className={styles["magenta"]}>
        <Pad amt={100} />
        <div className={styles["wolfi-collection"]}>
          <div className={styles["desc-collection"]}>
            <div className={styles["wolfi-collection-img"]}>
              {" "}
              <Image src={wolfiCollection} alt="Wolfi" />
            </div>
            <Pad amt={60} />
            <div className={styles["wolfi-sm"]}>
              <Image src={wolfiSm} alt="Wolfi" width={320} />
            </div>
            <p>
              This fun and exclusive NFT collection will allow you to mint one
              customized art piece of Wolfi. Only 5,000 mints will be available,
              so don't waste your chance to grab one of these; it is cheap
              anyways! The cost is $20 US dollars per Wolfi (worth $AVAX), fixed
              at that rate, no matter the price fluctuations. So get ready to
              join the fun and mint your exclusive Wolfi now, don't let it
              slide!
            </p>
          </div>
          <Pad amt={70} row />
          <div className={styles["wolfi"]}>
            <div className={styles["wolfi-lg"]}>
              {" "}
              <Image src={wolfi} alt="Wolfi" />
            </div>
          </div>
        </div>
        <Pad amt={100} />
        <div className={styles["wolfi-benefits"]}>
          <Image src={benefits} alt="NFT Benefits" />
          <Pad amt={40} />
          <div className={styles["card-group"]}>
            <div className={styles["card"]}>
              <div className={styles["card-img"]}>
                <Image src={group1} alt="I" />
              </div>

              <p>
                Aside from holding a collectible piece of this emblematic
                mascot, you will be part of the official Wolfi collection list
                of addresses that 3rd party projects can use to deploy airdrops
                and many other things.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card-img"]}>
                <Image src={group2} alt="II" />
              </div>

              <p>
                Wolfi NFT owners can use their collectibles for non-profit or
                profit purposes. This is only granted for Wolfi generated with
                the specific clothing and hair color.
              </p>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card-img"]}>
                <Image src={group3} alt="III" />
              </div>

              <p>You will have access to our exclusive merch store (TBA).</p>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card-img"]}>
                <Image src={group4} alt="IV" />
              </div>

              <p>An exclusive digital artbook of wolfi (TBA).</p>
            </div>
          </div>
          <Pad amt={30} />
        </div>
      </div>
      <div className={styles["down-waves"]}>
        <Image src={magentaWaves} alt="" />
      </div>
    </div>
  );
});
