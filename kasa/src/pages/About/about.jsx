import Banner from '../../components/Banner/banner'
import Dropdown from '../../components/Dropdown/dropdown'

import text from '../../data/aboutTextList.json'
import backgroundImage from '../../assets/background-about-us.webp'

import './about.scss'

function About() {
  return (
    <div>
      <Banner title="" img={backgroundImage} page="about" />
      <section className='dropdown__container'>
        {text.map((text) => (
          <div className='dropdown__element' key={text.id}>
            <Dropdown title={text.title} description={text.description} page="about" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default About