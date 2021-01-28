import { createReducer } from "@reduxjs/toolkit";
import {
  addContacts,
  removeContact,
  setFilter,
} from "../actions/phBookActions";
import {
  ADDCONTACTS,
  REMOVECONTACT,
  SETFILTER,
} from "../constants/phBookConstants";

const initialState = {
  items: [],
  filter: "",
};

// const phBookRedusers = (state = { ...initialState }, action) => {
//   switch (action.type) {
//     case ADDCONTACTS:
//       return { ...state, items: [action.payload, ...state.items] };

//     case REMOVECONTACT:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };

//     case SETFILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

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
