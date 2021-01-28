import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { phBookRedusers } from "./redusers/phBookRedusers";

import { addContacts, revoveContact, setFilter } from "./actions/phBookActions";

// const rootReducer = combineReducers({ contacts: phBookRedusers });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: {
      items: [],
      filter: "",
    },
  },
});

export default store;
