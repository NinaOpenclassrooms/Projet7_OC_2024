import { useParams } from 'react-router-dom'
// import AccomodationCard from '../../components/AccomodationCard'
import Slideshow from '../../components/Slideshow'
import AccomodationCard from '../../components/AccomodationCard';


function Accomodation() {
    const { accomodationId }  = useParams();
    return (
        <div>
            <h1>{accomodationId}</h1>
            <Slideshow />
            <AccomodationCard />
        </div>
    )
}

export default Accomodation