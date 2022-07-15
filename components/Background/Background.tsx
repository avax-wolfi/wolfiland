import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Collection from '../Collection/Collection'
import WalletSection from '../WalletSection/WalletSection'

import styles from './Background.module.css'
export interface BackgroundProps {}

export default React.memo<BackgroundProps>(function Background() {
  return (
    <div className={styles['container']}>
      <AboutMe />
      <Collection />
      <WalletSection />
    </div>
  )
})
