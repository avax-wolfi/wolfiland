import React from 'react'
import Image from 'next/image'
import mint from '../../public/icons/mint now 1.png'
import mintSm from '../../public/img/mint now 1-sm.svg'

import styles from './Welcome.module.css'
import Pad from '../Pad'

export interface WelcomeProps {}

export default React.memo<WelcomeProps>(function Welcome() {
  return (
    <div className={styles['container']}>
      <div className={styles['welcome']}>
        <div className={styles['left-box']}></div>
      
        <div className={styles['right-box']}>
          <h1 style={{fontSize:'20px'}}>welcome to</h1>
            <div className={styles['pad-xl']}><Pad amt={190}  /></div>
            <div className={styles['pad-sm']}><Pad amt={100}/></div>
          
          <div
            className={styles['img-div']}
          >
            <div className={styles['mint-now']} ><Image src={mint} alt="Mint Now" /></div>
            <div className={styles['mint-now-sm']} ><Image src={mintSm} alt="Mint Now" /></div>

          </div>
        </div>
      </div>
    </div>
  )
})
