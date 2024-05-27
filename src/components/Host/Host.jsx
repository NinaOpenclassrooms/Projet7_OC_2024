import PropTypes from 'prop-types'

import './Host.scss'

function Host({ hostName, hostPicture }) {
    return (
        <div className='host__container'>
            <span className='host__name'>{hostName}</span>
            <img className='host__img' src={hostPicture} />
        </div>
    )
}

Host.propTypes = {
    hostName: PropTypes.string,
    hostPicture: PropTypes.string
}

export default Host