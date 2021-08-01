import { combineReducers } from "redux";
import productReducer from "./productReducer";
import UtilsReducer from "./Utils";

export default combineReducers({
    products: productReducer,
    Utils: UtilsReducer,
});