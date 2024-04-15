import { Link } from 'react-router-dom'
import accomodations from '../../data/accomodationList.json'

import './index.scss'

function HomeCard() {
    return (
        <section className='cardswrapperHome'>    
            {accomodations.map((accomodations) => (
                <Link className='homeCard__link' to={`/accomodation/${accomodations.id}`} key={accomodations.id}>
                    <div className='homeCard' >
                        <h2 className="homeCard__title">{accomodations.title}</h2>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default HomeCard