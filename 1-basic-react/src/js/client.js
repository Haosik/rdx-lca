import { combineReducers, createStore } from 'redux';

const initialState = {
    user: {
        name: "Will",
        age: 35,
        
    },
    tweets: []
};

const userReducer = (state = initialState.user, action) => {
    const { type, payload } = action;
    switch (type) {
        case "CHANGE_NAME":
            return {...state, name : payload};
        case "CHANGE_AGE":
            return {...state, age: payload};
        default: return state;
    }
}

const tweetsReducer = (state = initialState.tweets, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TWEET":
            return {...state, tweets: tweets.concat(payload)};
        default: return state;
    }
}
const reducers = combineReducers({
    user: userReducer, 
    tweets: tweetsReducer
});

export const store = createStore(reducers);

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// unsubscribe();