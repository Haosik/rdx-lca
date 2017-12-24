import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

// Creating STORE
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState().user);
    console.log(store.getState().tweets);
});

// unsubscribe();

import App from './app';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app'));