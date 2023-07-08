
import HeroSection from './components/HeroSection'


const Home = () => {

  const data = {
    name:"Martin Lowe",
    image: "./images/hero.svg"
  }
  return (
    <HeroSection  {...data}/>
  )
}

export default Home