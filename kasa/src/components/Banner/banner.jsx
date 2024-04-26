import PropTypes from 'prop-types'

import './banner.scss'

function Banner({ title, img }) {
    return (
        <div className='banner banner--small' >
            <h1 className='banner__title'>{title}</h1>
            <img src={img} className='banner__img' />
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string
}

export default Banner