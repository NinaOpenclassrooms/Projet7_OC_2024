import { useState } from 'react'
import arrowup from '../../assets/arrow_up.svg'
import arrowdown from '../../assets/arrow_down.svg'

import './index.scss'


function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='aboutUsCard'>
            <div className='aboutUsCard__titlecontainer'>
                <h2 className='aboutUsCard__title'>{props.title}</h2>
                <button className='btnarrow btnarrow--up' onClick={() => setIsOpen(false)}>
                    <img src={arrowup} className='btnarrow__img--up'alt="flèche vers le haut" />
                </button>
            </div>
            <p className="aboutUsCard__paragraph">{props.description}</p>
        </div>
    ) : (
        <div className='aboutUsCard'>
            <div className='aboutUsCard__titlecontainer'>
                <h2 className='aboutUsCard__title'>{props.title}</h2>
                <button className='btnarrow btnarrow--down' onClick={() => setIsOpen(true)}>
                    <img src={arrowdown} className='btnarrow__img--down' alt="flèche vers le bas" />  
                </button>
            </div>
        </div>  
)
}

export default Dropdown