const initialTweets = [];

export const tweetsReducer = (state = initialTweets, action) => {
    switch (action.type) {
        case "ADD_TWEET":
            return state.concat(action.payload);
        case "ERR_TWEET":
            throw new Error('Omg, error tweet');
        default: return state;
    }
}