import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers' 
import { services } from '../firebase'

export default () => {
    // services.create({content: "test", completed: false})
    // services.update("-KnsRqFrr4F6Kvq4vDXC" ,{id: '', content: "change", completed: false})

    const middlewares = [thunk]
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
    return store;
}
    
    