import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/AboutMe/AboutMe'
import Background from '../components/Background/Background'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import WalletSection from '../components/WalletSection/WalletSection'
import Welcome from '../components/Welcome/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Background />
      <Footer />

      <footer></footer>
    </div>
  )
}

export default Home
