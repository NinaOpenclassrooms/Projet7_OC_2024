import { useState } from 'react'
import PropTypes from 'prop-types'

import arrowForward from '../../assets/arrow_forward.svg'
import arrowBack from '../../assets/arrow_back.svg'

import './slideshow.scss'

function Slideshow({ pictures }) {

    const [current, setCurrent] = useState(0)
    const length = pictures.length
    const pictureIsUnique = false;

    //If picture number equals 1, the arrow buttons will be hidden
    if (length == 1) {
        pictureIsUnique = true
    }

    return (
        <section className='slideshow__container'>
            <div>
                <button className={!pictureIsUnique ? 'slideshow__btn slideshow__btn--back' : 'slideshow__btn--hidden'} onClick={() => setCurrent(current - 1 >= 0 ? current - 1 : length - 1)}>
                    <img src={arrowBack} className='slideshow__arrow slideshow__arrow--back' alt="flèche de retour à la photo précédente" />
                </button>
                <img src={pictures[current]} className='slideshow__img' key={pictures.toString()} />
                <span className='slideshow__index'>{`pictures.index$/pictures.lenght`}</span>
                <button className={!pictureIsUnique ? 'slideshow__btn slideshow__btn--forward' : 'slideshow__btn--hidden'} onClick={() => setCurrent(current + 1 <= length - 1 ? (current + 1) : 0)}>
                    <img src={arrowForward} className='slideshow__arrow slideshow__arrow--forward' alt="flèche de passage à la photo suivante" />
                </button>
            </div>
        </section >
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Slideshow

