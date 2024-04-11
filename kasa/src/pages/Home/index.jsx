import bannerHome from '../../assets/background-home.webp'
import HomeCard from '../../components/HomeCard'
import './index.scss'
import '../../utils/style/colors.scss'
  
function Home() {
    return (
      <div>
        <div className='bannerHome'>
          <h1 className='bannerHome__title'>Chez vous, partout et ailleurs</h1>
          <img src={ bannerHome } alt='Photo de plage' className='bannerHome__img' />
        </div>
        {/* <section className='cardswrapperHome'> */}
          <HomeCard />
        {/* </section> */}
      </div>
  )
}

export default Home
