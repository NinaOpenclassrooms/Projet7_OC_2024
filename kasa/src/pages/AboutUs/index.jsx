import bannerAboutUs from '../../assets/background-about-us.webp'
import Dropdown from '../../components/Dropdown'
import text from '../../data/aboutTextList.json'
import './index.scss'


function AboutUs() {
        return (
          <div>
            <div className='bannerAboutUs'>
                <img src= {bannerAboutUs} alt='Photo de montagnes et de forêts' className='bannerAboutUs__img'/>
            </div>
            <section className='Dropdown'>
              {text.map((text) => (
                  <div className='Dropdown__element' key={text.id}>
                    <Dropdown title={text.title} description={text.description} />
                  </div>
              ))}
            </section>
          </div>
  )
}

export default AboutUs