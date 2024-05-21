import { useState } from 'react'
import PropTypes from 'prop-types'

import arrowup from '../../assets/arrow_up.svg'
import arrowdown from '../../assets/arrow_down.svg'

import './Dropdown.scss'

function Dropdown({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='dropdown' key={title}>
            <div className='dropdown__titleContainer'>
                <h2 className='dropdown__title'>{title}</h2>
                <button className={isOpen ? 'btnarrow btnarrow--up' : 'btnarrow btnarrow--down'} onClick={() => setIsOpen(!isOpen)}>
                    <img src={isOpen == true ? arrowup : arrowdown} className='btnarrow__img' alt="flèche" />
                </button>
            </div>
            {isOpen == true ? <div className="dropdown__paragraph">
                {Array.isArray(description) == true ?
                    <ul>{description.map((descriptionElement) => (<li key={description.indexOf(descriptionElement)}>{descriptionElement}</li>))}</ul> :
                    <p>{description}</p>
                }

            </div > : null}
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])
}

export default Dropdown