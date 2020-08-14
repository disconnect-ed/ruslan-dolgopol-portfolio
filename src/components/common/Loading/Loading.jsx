import React from "react";
import loading from '../../../assets/loading.svg'
import './Loading.sass'

const Loading = ({preloader}) => {
    return (
        <div className={`loading ${preloader ? 'loading_hide' : ''}`}>
            <div className="loading__img">
                <img src={loading} alt="Loading..."/>
            </div>
        </div>
    )
}

export default Loading