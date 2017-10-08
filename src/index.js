import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Principal from './Principal';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter>
                    <Principal />
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
