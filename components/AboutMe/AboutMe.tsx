import React from "react";
import Image from "next/image";

import { videoJs as VideoJS } from "../VideoJs/VideoJS";
import videojs, { VideoJsPlayerOptions } from 'video.js'

import tv from "../../public/icons/Group.svg";
import mari from "../../public/img/mari.png";
import storyLogo from "../../public/icons/storyLogo.svg";
import separator from "../../public/icons/Avax separador.svg";
import styles from "./AboutMe.module.css";
import Pad from "../Pad";
import Link from "next/link";

export interface AboutMeProps {}

export default React.memo<AboutMeProps>(function AboutMe() {

  const playerRef = React.useRef(null);

  const videoJsOptions:VideoJsPlayerOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    bigPlayButton:true,
    controlBar:false,
    fluid: true,
    sources: [{
      src: require('../../public/videos/CreationVideoV2.mp4'),
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
   
    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

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
          <Image src={mari} />
        </div>
        <p className={styles["about-me-text"]}>
          I am Mar, the creator of wolfi, the most popular mascot among the
          Avalanche community. I’ve been active working on different projects,
          but currently, I am a freelancer designer. I created wolfi after a
          group of friends that loved AVAX asked me to do it. Today, I decided
          to create the first official wolfi collection, which mainly works as a
          fund to support me as an artist.
        </p>
        
       
         


        <p className={styles["about-me-text-2"]}>
          I designed wolfi in 2020, with the expectations to create a caricature
          similar to apu the frog. I used as reference “Landwolf”, other
          character from the popular comic “Boy’s club”, but with a couple
          modifications to make it unique.
        </p>
      </div>
    
    
      {/* <video  className={styles['rectangle-xl']} src={require('../../public/videos/CreationVideoV2.mp4')}    ></video> */}
     
    
      <Pad amt={50} />
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} themeName={'city'}  />
      <Pad amt={25} />
      <a href={'#'} style={{color:'white',textAlign:'center'}}>Download the original proocreate file to verify aunthenticity</a>
      <Pad amt={30} />
      <div className={styles['separator']}>
      <Image src={separator} />
      </div>
    </main>
  );
});
