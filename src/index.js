import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App }  from './components';
import configureStore from './stores/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
