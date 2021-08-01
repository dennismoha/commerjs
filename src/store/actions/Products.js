import * as ActionTypes from "./ActionTypes";
import { commerce } from "../../Lib/Commerce";
//

export const fetchProducts = () => (dispatch) => {
    console.log("reached here");
    dispatch(loading(true));
    commerce.products
        .list()
        .then((data) => {
            console.log(data.data);
            dispatch(listProducts(data));
        })
        .catch((error) => console.log(error));
};

// List Products
export const listProducts = (value) => {
    return {
        type: ActionTypes.LIST_PRODUCTS,
        value,
    };
};

export const loading = (value) => {
    return {
        type: ActionTypes.LOADING,
        value,
    };
};