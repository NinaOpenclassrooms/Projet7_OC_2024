import { useState } from 'react'
import PropTypes from 'prop-types'

import arrowForward from '../../assets/arrow_forward.svg'
import arrowBack from '../../assets/arrow_back.svg'

import './Slideshow.scss'

function Slideshow({ title, pictures }) {

    const [current, setCurrent] = useState(0)
    const length = pictures.length

    return (
        <section className='slideshow__container'>
            <div className='slideshow'>
                <button className={length > 1 ? 'slideshow__btn slideshow__btn--back' : 'slideshow__btn--hidden'} >
                    <img src={arrowBack} className='slideshow__arrow slideshow__arrow--back' alt="flèche de retour à la photo précédente" onClick={() => setCurrent(current - 1 >= 0 ? current - 1 : length - 1)} />
                </button>
                <img src={pictures[current]} className='slideshow__img' alt={`${title}-${current + 1}`} />
                <span className='slideshow__index'>{current + 1}/{length}</span>
                <button className={length > 1 ? 'slideshow__btn slideshow__btn--forward' : 'slideshow__btn--hidden'} >
                    <img src={arrowForward} className='slideshow__arrow slideshow__arrow--forward' alt="flèche de passage à la photo suivante" onClick={() => setCurrent(current + 1 <= length - 1 ? (current + 1) : 0)} />
                </button>
            </div>
        </section >
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Slideshow

