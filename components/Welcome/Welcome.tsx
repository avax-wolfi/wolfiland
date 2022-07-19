import React from 'react'
import Image from 'next/image'
import mint from '../../public/icons/mint now 1.png'
import styles from './Welcome.module.css'
import Pad from '../Pad'

export interface WelcomeProps {}

export default React.memo<WelcomeProps>(function Welcome() {
  return (
    <div className={styles['container']}>
      <div className={styles['welcome']}>
        <div className={styles['left-box']}></div>
      
        <div className={styles['right-box']}>
          <h1>welcome to</h1>
          <Pad amt={190} />
          <div
            className={styles['img-div']}
          >
            <Image className={styles['mint-now']} src={mint} alt="Mint Now" />
          </div>
        </div>
      </div>
    </div>
  )
})
