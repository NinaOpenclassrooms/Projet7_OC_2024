import { Link } from 'react-router-dom'
import logo from '../../assets/logoKasa.svg'
 
function Header() {
    return (
            <div className="header">
                <img src={logo} alt='Logo de Kasa' className='kasa-logo' />
                <nav>
                <Link to="/">Accueil</Link>
                <Link to="/aboutUs">A propos</Link>
                </nav>
            </div>
    )
}

export default Header