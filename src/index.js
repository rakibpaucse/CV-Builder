import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import reducer from './store/leftSide/reducer/reducer'
import rightReducer from './store/rightSide/reducer/reducer'
import {Provider} from 'react-redux'
import {createStore , combineReducers} from 'redux'

const comboReducer = combineReducers({
  rightReducer : rightReducer ,
  leftReducer : reducer
})

const store = createStore(comboReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = (  
    <Provider store = {store}>
      <App />
    </Provider>
    )

ReactDOM.render( app ,document.getElementById('root'));


