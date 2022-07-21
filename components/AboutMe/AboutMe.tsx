import Image from "next/image";
import React from "react";

import tv from "../../public/icons/Group.svg";
import mari from "../../public/img/mar 1.svg";
import mari2 from "../../public/img/mar-2.svg";
import storyLogo from "../../public/icons/storyLogo.svg";
import separator from "../../public/icons/Avax separador.svg";
import styles from "./AboutMe.module.css";
import Pad from "../Pad";

export interface AboutMeProps {}

export default React.memo<AboutMeProps>(function AboutMe() {
  return (
    <main className={styles["container"]}>
      <div className={styles["header"]}>
        <Image src={storyLogo} alt="The Story behind Wolfi" />
      </div>
      <div className={styles["about-me"]}>
        <div className={styles["frame-sm"]}>
          {" "}
          <Image src={mari} />
        </div>
        <div className={styles["frame"]}>
          {" "}
          <Image src={mari2} />
        </div>
        <p className={styles["about-me-text"]}>
          I am Mar, the creator of wolfi, the most popular mascot among the
          Avalanche community. I’ve been active working on different projects,
          but currently, I am a freelancer designer. I created wolfi after a
          group of friends that loved AVAX asked me to do it. Today, I decided
          to create the first official wolfi collection, which mainly works as a
          fund to support me as an artist.
        </p>
        
        <video className={styles['rectangle']} src="../../public/videos/Creation Video-1.mp4" controls />


        <p className={styles["about-me-text-2"]}>
          I designed wolfi in 2020, with the expectations to create a caricature
          similar to apu the frog. I used as reference “Landwolf”, other
          character from the popular comic “Boy’s club”, but with a couple
          modifications to make it unique.
        </p>
      </div>
      <div className={styles["tv"]}>
      <video src="../../public/videos/Creation Video-1.mp4" controls width={640} height={330}></video>
      </div>
      <Pad amt={200} />
      <div className={styles['separator']}><Image src={separator} alt="Separator" /></div>
    </main>
  );
});
