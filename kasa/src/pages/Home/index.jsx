import Banner from '../../components/Banner'
import HomeCard from '../../components/HomeCard'
import backgroundImage from '../../assets/background-home.webp'
import './index.scss'
import '../../utils/style/colors.scss'
  
function Home() {
    return (
      <div>
        <Banner title="Chez vous, partout et ailleurs" img={backgroundImage} page="home"/>
        <section className='cardswrapperHome'>
          <HomeCard />
        </section>
      </div>
  )
}

export default Home
