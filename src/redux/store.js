import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { phBookRedusers } from "./redusers/phBookRedusers";

const rootReducer = combineReducers({ contacts: phBookRedusers });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
