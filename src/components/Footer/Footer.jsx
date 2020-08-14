import React from "react";
import './Footer.sass'
import {faVk, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <footer className='footer'>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Ruslan Dolgopol
            </p>
            <div className="footer-social-links">
                <a target='_blank' href="https://vk.com/r.dolgopol" className="footer-social__link">
                    <FontAwesomeIcon icon={faVk} />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/ruslan-dolgopol/" className="footer-social__link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target='_blank' href="https://github.com/disconnect-ed" className="footer-social__link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}

export default Footer