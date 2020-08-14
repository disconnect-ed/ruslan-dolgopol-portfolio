import React from "react";
import {faHandPointer} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const SkillsCard = (props) => {
    return (
        <NavLink to={'/skills/' + props.path} className='skills-card'
                 style={{backgroundImage: `url(https://disconnect-ed.github.io/ruslan-dolgopol-portfolio/skills/${props.img})`}}>
            <div className="skills-card__mask">
                <div>
                    <h4 className="skills-card__mask__title">{props.title}</h4>
                    <FontAwesomeIcon icon={faHandPointer} />
                    <h5>Нажми!</h5>
                </div>
            </div>
        </NavLink>
    )
}

export default SkillsCard