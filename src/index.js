import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App }  from './components';
import configureStore from './stores/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(
    <Provider store={configureStore()}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();
