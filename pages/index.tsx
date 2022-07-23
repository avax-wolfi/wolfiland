import { useWeb3React } from "@web3-react/core";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from "react";
import AboutMe from '../components/AboutMe/AboutMe'
import Background from '../components/Background/Background'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import WalletSection from '../components/WalletSection/WalletSection'
import Welcome from '../components/Welcome/Welcome'
import { useActiveWeb3React } from '../hooks'

const Home: NextPage = () => {
  const { chainId, account, library } = useActiveWeb3React();
  useEffect(() =>  {console.log(chainId, account, library)}, [chainId]);
  
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
