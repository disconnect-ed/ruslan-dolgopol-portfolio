import React from "react";
import './Header.sass'
import {Animated} from "react-animated-css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faVk} from "@fortawesome/free-brands-svg-icons";

const Header = React.memo(({langIsEng}) => {
    return (
        <Animated animationIn="fadeIn" isVisible={true}>
            <header className='header'>
                <div className="header-content">
                    <h1 className="header__title">
                        {langIsEng ? 'Ruslan Dolgopol' : 'Руслан Долгопол'}
                    </h1>
                    <h2 className="header__subtitle">
                       Front - End developer | React and React Native developer
                    </h2>
                    <div className="header-social-links">
                        <a target='_blank' href="https://vk.com/r.dolgopol" className="header-social__link">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/ruslan-dolgopol/" className="header-social__link">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a target='_blank' href="https://github.com/disconnect-ed" className="header-social__link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </header>
        </Animated>
    )
})

export default Header;