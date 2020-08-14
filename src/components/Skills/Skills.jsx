import React from "react";
import './Skills.sass'
import SkillsCard from "./SkillsCard/SkillsCard";
import Footer from "../Footer/Footer";
import skillsData from '../../data/skillsData'
import {Animated} from "react-animated-css";


const Skills = () => {

    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='skills page-wrap'>
                    <div className="skills-header">
                        <h2 className="section__title">Мои навыки</h2>
                    </div>
                    <div className="skills-wrap grid">
                        {
                            skillsData.map(result => {
                                return <SkillsCard img={result.img} title={result.title}
                                                   key={result.path}
                                                   path={result.path} level={result.level}/>
                            })
                        }
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

export default Skills