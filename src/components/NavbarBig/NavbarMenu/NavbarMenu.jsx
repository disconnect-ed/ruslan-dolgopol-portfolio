import React, {useState} from "react";
import './NavbarMenu.sass'
import {NavLink} from "react-router-dom";


const NavbarMenu = ({paginatorIsActive}) => {

    const [menuState, setMenuState] = useState(false)
    const onClick = () => {
        setMenuState(!menuState)
        paginatorIsActive(!menuState)
        document.body.classList.toggle('lock')
    }

    return (
        <div className='navbar-menu'>
            <button  onClick={onClick}
                className={`navbar-menu__button ${menuState && 'navbar-menu__button_active'}`}>
                <span className="navbar-menu__button__cross"></span>
            </button>

            <ul className={`navbar-menu-inner ${menuState && 'navbar-menu-inner_active'}`}>
                    <li className="navbar-menu-inner__point">
                        <NavLink onClick={onClick} to="/main">Главная</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink onClick={onClick} to="/about">О себе</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink onClick={onClick} to="/skills">Навыки</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink onClick={onClick} to="/works">Работы</NavLink>
                    </li>
                    <li className="navbar-menu-inner__point">
                        <NavLink onClick={onClick} to="/contacts">Контакты</NavLink>
                    </li>
            </ul>


        </div>
    )
}

export default  NavbarMenu