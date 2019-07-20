import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import { reducer, initialState } from './stateManagement';
import 'normalize.css';
import './stylesheets/App.scss';

const store = createStore(reducer, initialState,
applyMiddleware(thunk))
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App/></Provider>,
  document.getElementById('app')
);

if(module.hot)
  module.hot.accept();