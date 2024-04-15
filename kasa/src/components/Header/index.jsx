import { Link } from 'react-router-dom'
import logo from '../../assets/logoKasa.svg'
import '../../main.scss'
import './index.scss'

 
function Header() {
    return (
            <div className="header">
                <img src={logo} alt='Logo de Kasa' className='header__logo' />
                <nav className='header__nav'>
                    <Link className='header__link' to="/">Accueil</Link>
                    <Link className='header__link' to="/aboutUs">A propos</Link>
                </nav>
            </div>
    )
}



export default Header