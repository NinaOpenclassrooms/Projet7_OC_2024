import logoFooter from "../../assets/logoKasaFooter.svg"

import "./Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Logo de Kasa" className="footer__logo" />
            <p className="footer__paragraph">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer