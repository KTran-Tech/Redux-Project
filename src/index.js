import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//globalized state
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store =>{
    return next => {
        return action =>{
            console.log('[Middleware]', action);
            const result = next(action);
            console.log('[Middle]', store.getState());
            return result;
        }
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store will most often take a reducer as an input
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
