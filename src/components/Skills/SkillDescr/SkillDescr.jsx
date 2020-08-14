import React from "react";
import './SkillDescr.sass'
import {withRouter} from "react-router-dom";
import Footer from "../../Footer/Footer";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {Animated} from "react-animated-css";
import Paginator from "../../common/Paginator/Paginator";

const SkillDescr = (props) => {

    const skill = Number(props.match.params.skill)
    const data = props.skillsData.filter(result => {
        return result.path === skill
    })


    return (
        <>
            <Paginator paginator={props.paginator} location={'skills'} page={skill} data={props.skillsData}/>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='skills-descr page-wrap'>
                    {data.map(result => {
                        return (
                            <div key={result.path}>
                                <div className="skills-header">
                                    <h2 className="skills__title">{result.title}</h2>
                                </div>
                                <div className="skills-descr-wrap grid">
                                    <div className="skills-descr-img"
                                         style={{backgroundImage: `url(https://disconnect-ed.github.io/ruslan-dolgopol-portfolio/skills/${result.img})`}}>
                                    </div>
                                    <p className="skills-descr-text">{result.descr}</p>
                                    <div className="skills-descr-progress-wrap">
                                        <div className="skills-header">
                                            <h3 className="skills__title skills-descr-progress__title">Уровень
                                                владения</h3>
                                        </div>
                                        <div className="skills-descr-progress">
                                            <CircularProgressbar value={result.level} text={`${result.level}%`}
                                                                 styles={buildStyles({
                                                                     pathColor: '#9CBC68',
                                                                     textColor: '#9CBC68',
                                                                     trailColor: '#7F7F7F',
                                                                     backgroundColor: '#3e98c7',
                                                                     strokeLinecap: "butt"
                                                                 })}/>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })}
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

const urlDataContainer = withRouter(SkillDescr)

export default urlDataContainer