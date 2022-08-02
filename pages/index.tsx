import type { NextPage } from 'next'
import Background from '../components/Background/Background'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
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
