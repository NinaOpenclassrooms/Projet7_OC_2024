import {useState} from 'react'
import arrowForward from '../../assets/arrow_forward.svg'
import arrowBack from '../../assets/arrow_back.svg'
import './slideshow.scss'


function Slideshow(props) {

const [current, setCurrent] = useState(0)
const length = props.pictures.length
const pictureIsUnique = false;

//If picture number equals 1, the arrow buttons will be hidden
    if (length === 1) {
    pictureIsUnique = true
}

    return (!pictureIsUnique) ? (
        <section className='slideshow__container'>
            <div>
                <button className='slideshow__btn slideshow__btn--back' onClick={ () => setCurrent(current-1 >= 0 ? current-1 : length-1)}>
                    <img src={arrowBack} className='slideshow__arrow slideshow__arrow--back' alt="flèche de retour à la photo précédente" />
                </button>
                <img src={props.pictures[current]} className='slideshow__img' key={props.pictures.toString()} />
                <button className='slideshow__btn slideshow__btn--forward' onClick={ () => setCurrent(current+1 <= length-1 ? (current+1) : 0)}>
                    <img src={arrowForward} className='slideshow__arrow slideshow__arrow--forward' alt="flèche de passage à la photo suivante" />
                </button>
            </div>
        </section>
    ) : (
        <section className='slideshow__container'>
            <div>
                <img src={props.pictures[current]} className='slideshow__img' key={props.pictures.toString()} />
            </div>
        </section>
    )
}

export default Slideshow

