import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './AccomodationCard.scss'

function AccomodationCard({ id, title, cover }) {
    return (
        <div className='accomodationCard' key={id} >
            <Link className='accomodationCard__link' to={`/accomodation/${id}`}>
                <h2 className="accomodationCard__title">{title}</h2>
                <img className='accomodationCard__img' src={cover} alt={title} />
            </Link>
        </div>
    )
}

AccomodationCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string
}

export default AccomodationCard