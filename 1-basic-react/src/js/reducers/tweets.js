const initialTweets = [];

export const tweetsReducer = (state = initialTweets, action) => {
    switch (action.type) {
        case "ADD_TWEET":
            return [ ...state.concat(action.payload) ];
        default: return state;
    }
}