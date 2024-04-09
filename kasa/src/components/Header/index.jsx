import { Link } from 'react-router-dom'
import logo from '../../assets/logoKasa.svg'
import '../../main.scss'
import './index.scss'
// import styled from 'styled-components'

// const StyledLink = styled(Link)`
//     padding: 15px;
//     color: #FF6060;
//     text-decoration: none;
//     font-size: 18px;
// `
 
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