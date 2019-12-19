import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// axios.interceptors.request.use((request, response, error) => {
//     console.log(request);
// });

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
