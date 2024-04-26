import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import logo from '../../assets/logoKasa.svg'

import '../../main.scss'
import './header.scss'

function Header() {

    const { openPage } = useParams();
    let homeIsOpen = false;
    let aboutIsOpen = false;

    if (openPage == "/") {
        homeIsOpen = true;
        console.log("AAAA")
    }

    if (openPage == "/aboutUs") {
        aboutIsOpen = true;
        console.log("BBBB")
    }

    return (
        <div className="header">
            <img src={logo} alt='Logo de Kasa' className='header__logo' />
            <nav className='header__nav'>
                <Link className={homeIsOpen ? 'header__link--underlined' : 'header__link'} to="/">Accueil</Link>
                <Link className={aboutIsOpen ? 'header__link--underlined' : 'header__link'} to="/aboutUs">A propos</Link>
            </nav>
        </div>
    )
}

export default Header