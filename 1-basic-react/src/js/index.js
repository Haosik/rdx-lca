import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './client';

export class App extends Component {
    constructor() {
        super();
    }
    changeName = () => {
        store.dispatch({type: 'CHANGE_NAME', payload: 'Bobbie'});
    }
    changeAge = () => {
        store.dispatch({type: 'CHANGE_AGE', payload: 29});
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>{store.getState().number}</h1>
                    <button onClick={this.changeName}>Change name</button>
                    <button onClick={this.changeAge}>Change age</button>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));