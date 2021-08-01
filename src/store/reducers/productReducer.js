import * as actionTypes from "../actions/ActionTypes";
const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIST_PRODUCTS:
            return {...state, products: action.value };
        case actionTypes.FETCH_PRODUCTS:
            return {...state, products: action.value };
        default:
            return state;
    }
};

export default productReducer;