import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer, getPenguinsMW, fetchPenguinsAction } from './reducers/penguins';

const store = createStore(reducer, applyMiddleware(getPenguinsMW));
store.dispatch(fetchPenguinsAction);

ReactDOM.render((<Provider store={store}>
  <App />
</Provider>), document.getElementById('root'));
registerServiceWorker();
