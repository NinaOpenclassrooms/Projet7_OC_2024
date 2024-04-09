import bannerAboutUs from '../../assets/background-about-us.webp'

function AboutUs() {
        return (
      <div>
        <div className='bannerAboutUs'>
            <img src= {bannerAboutUs} alt='Photo de montagnes et de forêts' className='bannerAboutUs__img'/>
        </div>
      </div>
  )
}

export default AboutUs