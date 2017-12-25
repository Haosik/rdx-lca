import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

// Logger middleware
const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.info('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	console.groupEnd(action.type);
	return result;
};

// Error middleware
const error = (store) => (next) => (action) => {
	try {
		return next(action)
	} catch(err) {
		console.log('ITS AN ARROR!!!', err)
	}
};

const middleware = applyMiddleware(logger, error);

// Creating STORE
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState().user);
//     console.log(store.getState().tweets);
// });

// unsubscribe();

import App from './app';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app'));