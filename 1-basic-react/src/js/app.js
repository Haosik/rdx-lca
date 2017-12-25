import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    constructor() {
        super();
    }
    changeName = (name) => {
        const currentName = this.props.store.user.name;
        if (currentName == 'Will') {
            this.props.onChangeName('Bobbie');
        } else {
            this.props.onChangeName('Will');
        }
    }
    changeAge = (age) => {
        this.props.onChangeAge(29);
    }
    addTweet = (text) => {
        this.props.onAddTweet('I am bird! MF, I\'m a bird!');
    }
    errTweet = () => {
        this.props.onErrTweet();
    }
    render() {
        const { store } = this.props;
        console.log(store.tweets);
        return (
            <div>
                <h1>{store.user.name}</h1>
                <h1>{store.user.age}</h1>
                <ul>
                    {store.tweets && store.tweets.map((tweet) => {
                        <li>{tweet}</li>
                    })}
                </ul>
                <button className="btn btn-default" onClick={this.changeName}>Change name</button>
                <button className="btn btn-default" onClick={this.changeAge}>Change age</button>
                <button className="btn btn-default" onClick={this.addTweet}>Add tweet</button>
                <button className="btn btn-default" onClick={this.errTweet}>Err tweet</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onChangeName: (name) => dispatch({ type: 'CHANGE_NAME', payload: name }),
        onChangeAge: (age) => dispatch({ type: 'CHANGE_AGE', payload: age }),
        onAddTweet: (text) => dispatch({ type: 'ADD_TWEET', payload: text }),
        onErrTweet: () => dispatch({type: 'ERR_TWEET'})
    }))(App);