import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
// import AccomodationCard from '../../components/AccomodationCard'
import DescriptionAccomodationCard from '../../components/DescriptionAccomodationCard'
import Footer from '../../components/Footer'


function Accomodation() {
    const { accomodationNumber } = useParams()
    return (
        <div>
            <Header></Header>
            <section>
                <h1>Hébergement { accomodationNumber}</h1>

            </section>
            <DescriptionAccomodationCard>
            </DescriptionAccomodationCard>
            <Footer></Footer>
        </div>
    )
}

export default Accomodation