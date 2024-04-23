import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import logo from '../../assets/logoKasa.svg'
import '../../main.scss'
import './header.scss'


function Header() {

    // const { openPage } = useParams();
    // console.log(openPage)

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