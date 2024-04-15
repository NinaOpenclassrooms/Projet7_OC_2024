import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import text from '../../data/aboutTextList.json'
import backgroundImage from '../../assets/background-about-us.webp'
import './index.scss'


function AboutUs() {
        return (
          <div>
            <Banner title="" img={backgroundImage} page="about" />
            <section className='dropdown'>
              {text.map((text) => (
                  <div className='dropdown__element' key={text.id}>
                    <Dropdown title={text.title} description={text.description} />
                  </div>
              ))}
            </section>
          </div>
  )
}

export default AboutUs