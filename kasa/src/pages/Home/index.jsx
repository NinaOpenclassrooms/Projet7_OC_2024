import AccomodationTitleCard from '../../components/AccomodationTitleCard'
  
function Home() {
    return (
      <div>
        <div className='banner-home'>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <section className='cardswrapper'>
          <AccomodationTitleCard>
          </AccomodationTitleCard>
        </section>
      </div>
  )
}

export default Home
