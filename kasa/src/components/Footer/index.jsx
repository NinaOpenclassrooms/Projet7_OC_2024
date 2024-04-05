import logo from '../../assets/logoKasa.svg'

function Footer() {
    return (
        <div>
            <img src={logo} alt='Logo de Kasa' className='kasa-logo-footer' />
            <p>© 2020 Kasa. All rights reserved</p>

        </div>
    )
}

export default Footer