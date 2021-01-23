import { createStore } from "redux";
import { phBookRedusers } from "./redusers/phBookRedusers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(phBookRedusers, composeWithDevTools());

export default store;
