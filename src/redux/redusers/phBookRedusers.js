import { createReducer } from "@reduxjs/toolkit";
import {
  addContacts,
  removeContact,
  setFilter,
} from "../actions/phBookActions";

const initialState = {
  items: [],
  filter: "",
};

const phBookRedusers = createReducer(initialState, {
  [addContacts]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),

  [removeContact]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  }),

  [setFilter]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

export { phBookRedusers };
