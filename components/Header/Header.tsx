import React from 'react'

import Image from 'next/image'

import barLogo from '../../public/icons/menu logo 1.png'
import discord from '../../public/icons/discord 1.svg'
import twitter from '../../public/icons/twitter 1.svg'
import connectWallet from '../../public/icons/connect wallet.svg'
import styles from './Header.module.css'
import Link from 'next/link'

export interface HeaderProps {}

export default React.memo<HeaderProps>(function Header() {
  return (
    <header className={styles['container']}>
      <nav
        className={
          'navbar navbar-expand-md bg-red position-relative' +
          ' ' +
          styles['nav']
        }
      >
        {/* MENU ICON */}
        <Image
          className="navbar-brand navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#headerNavbar"
          aria-controls="headerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          src={barLogo}
          alt="Menu"
        />

        <div
          className={
            'collapse navbar-collapse align-items-center pb-3 pb-md-0' +
            ' ' +
            styles['nav-options ']
          }
          id="headerNavbar"
        >
          {/* OPTIONS LINKS */}
          <div className="navbar-nav  align-items-center mx-auto">
            <a
              className="nav-link text-white text-uppercase"
              aria-current="page"
              href="#"
            >
              story
            </a>
            <a className="nav-link text-white text-uppercase" href="#">
              collection
            </a>
            <a className="nav-link text-white text-uppercase" href="#">
              mint
            </a>
          </div>
          {/* SOCIAL LINKS */}
          <div
            className={
              'navbar-nav  align-self-center justify-content-between mx-auto mx-lg-0 mt-md-0' +
              ' ' +
              styles['social-links']
            }
          >
            <a
              className="d-flex justify-content-center me-2 mt-3 mb-3 mb-lg-0 mt-md-0"
              href="#"
            >
              <Image src={discord} alt="Discord" />
            </a>
            <a
              className="d-flex justify-content-center me-2 mb-3 mb-lg-0 mt-md-0"
              href={''}
            >
              <Image src={twitter} alt="Twitter" />
            </a>
            <a
              className="d-flex justify-content-center  "
              style={{ top: 0 }}
              href="#"
            >
              <Image src={connectWallet} alt="Connect wallet" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
})
