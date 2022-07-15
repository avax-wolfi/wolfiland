import React from 'react'

import Image from 'next/image'
import max from '../../public/img/max.svg'
import min from '../../public/img/min.svg'
import connectWallet from '../../public/img/connect-wallet.svg'
import wolfiLand from '../../public/icons/logo big 1.svg'

import styles from './ConnectWallet.module.css'
export interface ConnectWalletProps {}

export default React.memo<ConnectWalletProps>(function ConnectWallet() {
  return (
    <div className={styles['container']}>
      <div className={styles['logotype-desc']}>
        <Image src={wolfiLand} alt="WolfiLand" />
        <p>Connect your wallet to see your balance</p>
      </div>

      <div className={styles['min-max']}>
        <Image src={max} alt="+" />
        <Image src={min} alt="-" />
      </div>

      <Image src={connectWallet} alt="Connect your Wallet" />

      <div className={styles['cost']}>
        <span>Min Cost:2 AVAX</span>
        <span>Total Minted:XXXX</span>
      </div>
    </div>
  )
})
