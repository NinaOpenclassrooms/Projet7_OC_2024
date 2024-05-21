import PropTypes from 'prop-types'

import './Banner.scss'

function Banner({ title, img }) {
    return (
        <div className='banner' >
            <h1 className='banner__title'>{title}</h1>
            <img src={img} className='banner__img' alt="Photo d'arrière fond représentant la nature" />
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string
}

export default Banner