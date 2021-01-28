import { createAction } from "@reduxjs/toolkit";
import {
  ADDCONTACTS,
  REMOVECONTACT,
  SETFILTER,
} from "../constants/phBookConstants";

// const addContacts = (payload) => ({
//   type: ADDCONTACTS,
//   payload,
// });

// const revoveContact = (payload) => ({
//   type: REMOVECONTACT,
//   payload,
// });

// const setFilter = (payload) => ({
//   type: SETFILTER,
//   payload,
// });

const addContacts = createAction(ADDCONTACTS);

const removeContact = createAction(REMOVECONTACT);

const setFilter = createAction(SETFILTER);

export { addContacts, removeContact, setFilter };
