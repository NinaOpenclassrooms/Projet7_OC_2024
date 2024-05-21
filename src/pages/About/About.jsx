import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'

import text from '../../data/aboutTextList.json'
import backgroundImage from '../../assets/background-about-us.webp'

import './About.scss'

function About() {
  return (
    <div>
      <div className='banner__container banner__container--tall'>
        <Banner title="" img={backgroundImage} />
      </div>
      <section className='dropdown__container'>
        {text.map((text) => (
          <div className='dropdown__element' key={text.id}>
            <Dropdown title={text.title} description={text.description} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default About