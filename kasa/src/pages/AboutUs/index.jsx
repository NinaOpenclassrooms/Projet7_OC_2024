import bannerAboutUs from '../../assets/background-about-us.webp'
// import DescriptionAboutUsCard from '../../components/DescriptionAboutUsCard'

function AboutUs() {
        return (
      <div>
        <div className='bannerAboutUs'>
            <img src= {bannerAboutUs} alt='Photo de montagnes et de forêts' className='bannerAboutUs__img'/>
            </div>
            {/* <DescriptionAboutUsCard /> */}
      </div>
  )
}

export default AboutUs