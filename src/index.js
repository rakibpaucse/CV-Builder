import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import reducer from './store/leftSide/reducer/reducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = (  
    <Provider store = {store}>
      <App />
    </Provider>
    )

ReactDOM.render( app ,document.getElementById('root'));


