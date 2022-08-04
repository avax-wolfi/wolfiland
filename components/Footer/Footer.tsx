
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Interface } from 'readline'

import logoFooter from '../../public/icons/logo footer 1.svg'
import twitter from '../../public/icons/twitterAlt.svg'
import telegram from '../../public/icons/tlgm.svg'

import styles from './Footer.module.css'
import Pad from '../Pad'

export interface FooterProps{}

export default React.memo<FooterProps>(function Footer(){

      return <footer className={styles['container']}>
        
           <div className={styles['nav-footer']}>

             <div className={styles['logo']}>
                <Image src={logoFooter} alt=''/>
                <Pad amt={30} />
                <small>2022 wolfiland all rights reserved</small>
             </div>
             <div className={styles['nav']}>
                <Link href='#story'>story</Link>
                <Link href='#collection'>collection</Link>
                <Link href='#mint'>mint</Link>
                <Link href='#'><Image src={twitter} alt='Twitter'/></Link>
                <Link href='#'><Image src={telegram} alt='Telegram' width={'26px'}/></Link>
                </div>

           </div>
         
      </footer>
})