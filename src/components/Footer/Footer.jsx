import logoFooter from '../../assets/logoKasaFooter.svg'

import './Footer.scss'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} className='footer__logo' alt='Logo de Kasa' />
            <p className='footer__paragraph'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer