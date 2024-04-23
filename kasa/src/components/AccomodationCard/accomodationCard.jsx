import { useParams } from 'react-router-dom'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Dropdown from '../../components/Dropdown/dropdown'

import accomodations from '../../data/accomodationList.json'

import './accomodationsCard.scss'


function AccomodationCard() {
    const id = useParams();
    const accomodationsData = accomodations.find((accomodationId) => accomodationId)

    return (
        <div className='accomodationCard'>
            <div className='accomodationCard__informationsContainer'>
                <div className='accomodationCard__titleContainer'>
                    <h1 className='accomodationCard__title'>{accomodationsData.title}</h1>
                    <h2 className='accomodationCard__location'>{accomodationsData.location}</h2>
                    <Tag tags={accomodationsData.tags} accomodationId={accomodationsData.accomodationId} />
                </div>
                <aside className='accomodationCard__aside' >
                    <Host hostName={accomodationsData.host.name} hostPicture={accomodationsData.host.picture} />
                    <Rating scaleValue={accomodationsData.rating} />
                </aside>
            </div>
            <div className='accomodationCard__description'>
                <Dropdown title="Description" description={accomodationsData.description} page="accomodation" />
                <Dropdown title="Équipements" description={accomodationsData.equipments} page="accomodation" />
            </div>
        </div>
    )
}

export default AccomodationCard