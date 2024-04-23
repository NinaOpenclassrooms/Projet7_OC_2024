import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/slideshow'
import AccomodationCard from '../../components/AccomodationCard/accomodationCard'
import Error from '../../pages/Error/error'

import accomodations from '../../data/accomodationList.json'

import './accomodation.scss'



function Accomodation() {
    const id = useParams();
    console.log(id)                                                          //RENVOIE BIEN L'ID
    const index = accomodations.indexOf(id)
    console.log(index)                                                         //RENVOIE -1 QUELQUE SOIt LA PAGE
    const accomodationsData = accomodations.find(element => element.id = id)   //NE FONCTIONNE PAS 
    console.log(accomodationsData)

    //Redirection towards the error page if the accomodation is not found
    if (!accomodationsData) {
        return (
            <Error />
        )
    }

    return (
        <div className='accomodation__container'>
            <Slideshow pictures={accomodationsData.pictures} />
            <AccomodationCard />
        </div>
    )
}

export default Accomodation