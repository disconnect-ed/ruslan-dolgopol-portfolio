import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faTimes} from "@fortawesome/free-solid-svg-icons";
import './Paginator.sass'

const Paginator =(props) => {

    let currentPage = props.page
    let nextPage = ''
    let prevPage = ''
    if (currentPage < props.data.length) {
        nextPage = currentPage + 1
    } else {
        nextPage = 1
    }

    if (currentPage <= 1) {
        prevPage = props.data.length
    } else {
        prevPage = currentPage - 1
    }


    return (
        <div className={`paginator ${props.paginator ? 'paginator_hide' : ''}`}>
            <NavLink className='paginator__link' to={`/${props.location}/${prevPage}`} >
                <FontAwesomeIcon icon={faChevronLeft} />
            </NavLink>
            <NavLink className='paginator__link' to={`/${props.location}`} >
                <FontAwesomeIcon icon={faTimes} />
            </NavLink>
            <NavLink className='paginator__link' to={`/${props.location}/${nextPage}`} >
                <FontAwesomeIcon icon={faChevronRight} />
            </NavLink>
        </div>
    )
}

export default Paginator