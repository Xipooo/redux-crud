import { SET_VIEW } from "./actions";

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case SET_VIEW:
            return {...state, view: action.payload }
        default:
            return state;
    }
}

export default reducer;