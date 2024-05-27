import { useParams } from 'react-router-dom'

import Error from '../Error/Error'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tag from '../../components/Tag/Tag'
import Host from '../../components/Host/Host'
import Rating from '../../components/Rating/Rating'
import Dropdown from '../../components/Dropdown/Dropdown'

import accomodations from '../../data/accomodationList.json'

import './Accomodation.scss'

function Accomodation() {
    const { id } = useParams();
    const accomodationsData = accomodations.find(element => element.id == id)

    //Redirection towards the error page if the accomodation is not found
    if (!accomodationsData) {
        return (
            <Error />
        )
    }

    return (
        <div className='accomodation__container'>
            <Slideshow title={accomodationsData.title} pictures={accomodationsData.pictures} />
            <div className='accomodation'>
                <div className='accomodation__informationsContainer'>
                    <div className='accomodation__titleContainer'>
                        <h1 className='accomodation__title'>{accomodationsData.title}</h1>
                        <h2 className='accomodation__location'>{accomodationsData.location}</h2>
                        <Tag tags={accomodationsData.tags} id={accomodationsData.id} />
                    </div>
                    <aside className='accomodation__aside' >
                        <Host hostName={accomodationsData.host.name} hostPicture={accomodationsData.host.picture} />
                        <Rating rating={accomodationsData.rating} />
                    </aside>
                </div>
                <div className='accomodation__description'>
                    <Dropdown title="Description" description={accomodationsData.description} />
                    <Dropdown title="Équipements" description={accomodationsData.equipments} />
                </div>
            </div>
        </div>
    )
}

export default Accomodation