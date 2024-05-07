import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/logoKasa.svg'

import './Header.scss'

function Header() {

    const { pathname } = useLocation();

    return (
        <div className="header">
            <img src={logo} alt='Logo de Kasa' className='header__logo' />
            <nav className='header__nav'>
                <Link className={pathname == "/" ? 'header__link header__link--underlined' : 'header__link'} to="/">Accueil</Link>
                <Link className={pathname == "/aboutUs" ? 'header__link header__link--underlined' : 'header__link'} to="/aboutUs">A propos</Link>
            </nav>
        </div>
    )
}

export default Header