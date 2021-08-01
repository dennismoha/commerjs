import { ERROR, LOADING } from "../actions/ActionTypes";

const initialState = {
    error: null,
    loading: false,
};

const UtilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR:
            return {...state, error: action.payload };
        case LOADING:
            console.log("reached heress");
            return {...state, loading: action.payload };
        default:
            return state;
    }
};

export default UtilsReducer;