import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { phBookRedusers } from "./redusers/phBookRedusers";

const rootReducer = combineReducers({ contacts: phBookRedusers });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
