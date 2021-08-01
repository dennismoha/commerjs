import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/CombineReducers";

const composeEnhacer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
    }) || compose;

const store = createStore(reducers, composeEnhacer(applyMiddleware(thunk)));

export default store;