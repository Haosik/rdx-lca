import { combineReducers } from 'redux';
import { userReducer } from './user';
import { tweetsReducer } from './tweets';

const reducers = combineReducers({
	user: userReducer,
    tweets: tweetsReducer
});

export default reducers;