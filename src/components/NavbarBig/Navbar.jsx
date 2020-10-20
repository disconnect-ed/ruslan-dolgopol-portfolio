import React from "react";
import './Navbar.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCheck, faBriefcase, faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faUser, faAddressCard} from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/img/logo-white.png'
import {NavLink} from "react-router-dom";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const Navbar = React.memo(({paginatorIsActive, handlerToggleLang, langIsEng}) => {

    return (
        <nav className='navbar'>
            <NavLink to='/' className="navbar__logo">
                <img src={logo} alt="Ruslan Dolgopol"/>
            </NavLink>
            <ul className="navbar-links">
                <li className='navbar-link'>
                    <NavLink to="/main">
                        <FontAwesomeIcon icon={faHome}/>
                    </NavLink>
                    <span className='navbar-link__title'>{langIsEng ? 'Main' : 'Главная'}</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/about">
                        <FontAwesomeIcon icon={faUser}/>
                    </NavLink>
                    <span className='navbar-link__title'>{langIsEng ? 'About me' : 'О себе'}</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/skills">
                        <FontAwesomeIcon icon={faCheck}/>
                    </NavLink>
                    <span className='navbar-link__title'>{langIsEng ? 'Skills' : 'Навыки'}</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/works">
                        <FontAwesomeIcon icon={faBriefcase}/>
                    </NavLink>
                    <span className='navbar-link__title'>{langIsEng ? 'Works' : 'Работы'}</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/contacts">
                        <FontAwesomeIcon icon={faAddressCard}/>
                    </NavLink>
                    <span className='navbar-link__title'>{langIsEng ? 'Contacts' : 'Контакты'}</span>
                </li>
                <li className='navbar-link'>
                    <button onClick={handlerToggleLang}>
                        <FontAwesomeIcon icon={faGlobe}/>
                    </button>
                    <span className='navbar-link__title'>
                        {langIsEng ? 'Language: EN' : 'Язык: RU'}
                    </span>
                </li>
            </ul>
            <NavbarMenu langIsEng={langIsEng} handlerToggleLang={handlerToggleLang}
                        paginatorIsActive={paginatorIsActive}/>
        </nav>
    )
})

export default Navbar