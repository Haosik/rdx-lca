const initialUser = {
	name: "Will",
	age: 35,
};

export default (state = initialUser, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            // return { ...state, name: action.payload };
            return Object.assign({}, state, {name: action.payload});
        case "CHANGE_AGE":
            return { ...state, age: action.payload };
        default: return state;
    }
}