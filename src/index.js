import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import skillsData from './data/skillsData'
import worksData from './data/worksData'
import {HashRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App worksData={worksData} skillsData={skillsData}/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
