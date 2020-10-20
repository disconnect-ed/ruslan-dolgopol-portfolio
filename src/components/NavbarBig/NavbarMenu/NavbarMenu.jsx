import React, {useState} from "react";
import './NavbarMenu.sass'
import {NavLink} from "react-router-dom";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const NavbarMenu = React.memo(({handlerToggleLang, langIsEng, paginatorIsActive}) => {

    const [menuState, setMenuState] = useState(false)
    const onClick = () => {
        setMenuState(!menuState)
        paginatorIsActive(!menuState)
        document.body.classList.toggle('lock')
    }

    return (
        <div className='navbar-menu'>
            <button onClick={onClick}
                    className={`navbar-menu__button ${menuState && 'navbar-menu__button_active'}`}>
                <span className="navbar-menu__button__cross"></span>
            </button>
            <ul className={`navbar-menu-inner ${menuState && 'navbar-menu-inner_active'}`}>
                <li className='navbar-menu-lang'>
                    <button onClick={handlerToggleLang} className='navbar-menu-lang__btn'>
                        <FontAwesomeIcon icon={faGlobe}/>
                        {langIsEng ? 'EN' : 'RU'}
                    </button>
                </li>
                <li className="navbar-menu-inner__point">
                    <NavLink onClick={onClick} to="/main">
                        {langIsEng ? 'Main' : 'Главная'}
                    </NavLink>
                </li>
                <li className="navbar-menu-inner__point">
                    <NavLink onClick={onClick} to="/about">
                        {langIsEng ? 'About me' : 'О себе'}
                    </NavLink>
                </li>
                <li className="navbar-menu-inner__point">
                    <NavLink onClick={onClick} to="/skills">
                        {langIsEng ? 'Skills' : 'Навыки'}
                    </NavLink>
                </li>
                <li className="navbar-menu-inner__point">
                    <NavLink onClick={onClick} to="/works">
                        {langIsEng ? 'Works' : 'Работы'}
                    </NavLink>
                </li>
                <li className="navbar-menu-inner__point">
                    <NavLink onClick={onClick} to="/contacts">
                        {langIsEng ? 'Contacts' : 'Контакты'}
                    </NavLink>
                </li>
            </ul>


        </div>
    )
})

export default NavbarMenu