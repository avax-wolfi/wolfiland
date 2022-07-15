import Image from 'next/image'
import React from 'react'

import tv from '../../public/icons/Group.svg'
import storyLogo from '../../public/icons/storyLogo.svg'
import separator from '../../public/icons/Avax separador.svg'
import styles from './AboutMe.module.css'
import Pad from '../Pad'

export interface AboutMeProps {}

export default React.memo<AboutMeProps>(function AboutMe() {
  return (
    <main className={styles['container']}>
      <div className={styles['header']}>
        <Image src={storyLogo} alt="The Story behind Wolfi" />
      </div>
      <div className={styles['about-me']}>
        <div className={styles['frame']}></div>
        <p className={styles['about-me-text']}>
          I am Mar, the creator of wolfi, the most popular mascot among the
          Avalanche community. I’ve been active working on different projects,
          but currently, I am a freelancer designer. I created wolfi after a
          group of friends that loved AVAX asked me to do it. Today, I decided
          to create the first official wolfi collection, which mainly works as a
          fund to support me as an artist.
        </p>
      </div>
      <div className={styles['tv']}>
        <Image src={tv} alt="Tv" />
      </div>
      <Pad amt={200} />
      <Image src={separator} alt="Separator" />
    </main>
  )
})
