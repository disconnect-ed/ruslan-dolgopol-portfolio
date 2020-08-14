import React from "react";
import './WorkDescr.sass'
import {withRouter} from "react-router-dom";
import {Animated} from "react-animated-css";
import Footer from "../../Footer/Footer";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Paginator from "../../common/Paginator/Paginator";

const WorkDescr = (props) => {

    const work = Number(props.match.params.work)
    const data = props.worksData.filter(result => {
        return result.path === work
    })

    return (
        <>
            <Paginator paginator={props.paginator} location={'works'} page={work} data={props.worksData}/>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='works-descr page-wrap'>
                    {data.map(result => {
                        return (
                            <div key={result.path}>
                                <div className="works-header">
                                    <h2 className="works__title works-header__title">{result.title}</h2>
                                </div>
                                <div className="works-descr-wrap grid">
                                    <div className="works-descr-img"
                                         style={{backgroundImage: `url(https://disconnect-ed.github.io/ruslan-dolgopol-portfolio/works/${result.img})`}}>
                                    </div>
                                    <div className="works-descr-technologies">
                                        <h3 className="works__title works-descr__title">
                                            Что использовалось
                                        </h3>
                                        <ul className='works-descr-list'>
                                            {result.stack.map(item => {
                                                return <li key={item}
                                                           className='works-descr-list__item'>
                                                    <span>{item}</span>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="works-descr-info">
                                        <h3 className="works__title works-descr__title">
                                            Описание
                                        </h3>
                                        <p className="works-descr__text">
                                            {result.descr}
                                        </p>
                                    </div>
                                </div>
                                {result.link &&
                                <div className="works-footer ">
                                    <a target='_blank' href={result.link} className='works-descr__link'>
                                        <FontAwesomeIcon icon={faEye}/> Смотреть
                                    </a>
                                </div>
                                }
                            </div>
                        )
                    })}

                </section>
                <Footer/>
            </Animated>
        </>
    )
}

const urlDataContainer = withRouter(WorkDescr)

export default urlDataContainer