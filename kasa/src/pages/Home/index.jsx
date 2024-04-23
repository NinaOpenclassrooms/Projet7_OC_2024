import Banner from '../../components/Banner/banner'
import HomeCard from '../../components/HomeCard/homeCard'
import backgroundImage from '../../assets/background-home.webp'
import './index.scss'
import '../../utils/style/colors.scss'

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" img={backgroundImage} page="home" />
      <HomeCard />
    </div>
  )
}

export default Home
