import Banner from '../../components/Banner/Banner'
import AccomodationCard from '../../components/AccomodationCard/AccomodationCard'

import backgroundImage from '../../assets/background-home.webp'
import accomodations from '../../data/accomodationList.json'

import './Home.scss'

function Home() {
  return (
    <div>
      <div className='banner__container banner__container--short' >
        <Banner title="Chez vous, partout et ailleurs" img={backgroundImage} />
      </div>
      <section className='home__cardswrapper'>
        {accomodations.map((accomodations) => (
          <AccomodationCard id={accomodations.id} title={accomodations.title} cover={accomodations.cover} key={accomodations.id} />
        ))}
      </section>
    </div>
  )
}

export default Home
