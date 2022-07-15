import React from 'react'
import Image from 'next/image'
import mint from '../../public/icons/mint now 1.png'
import styles from './Welcome.module.css'

export interface WelcomeProps {}

export default React.memo<WelcomeProps>(function Welcome() {
  return (
    <div className={styles['container']}>
      <div className={styles['welcome']}>
        <div className={styles['left-box']}></div>
        <div style={{ width: '30%' }}></div>
        <div className={styles['right-box']}>
          <div
            style={{
              height: '90%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Image className={styles['mint-now']} src={mint} alt="Mint Now" />
          </div>
        </div>
      </div>
    </div>
  )
})
