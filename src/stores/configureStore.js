import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers' 
import { services } from '../firebase'

export default () => {
    const middlewares = [thunk]
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
    return store;
}
    
    