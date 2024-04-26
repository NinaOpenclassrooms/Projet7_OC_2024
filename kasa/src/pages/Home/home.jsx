import Banner from '../../components/Banner/banner'
import AccomodationCard from '../../components/AccomodationCard/accomodationCard'

import backgroundImage from '../../assets/background-home.webp'
import accomodations from '../../data/accomodationList.json'

import './home.scss'

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" img={backgroundImage} page="home" />
      <section className='home__cardswrapper'>
        {accomodations.map((accomodations) => (
          <AccomodationCard id={accomodations.id} title={accomodations.title} cover={accomodations.cover} />
        ))}
      </section>
    </div>
  )
}

export default Home
