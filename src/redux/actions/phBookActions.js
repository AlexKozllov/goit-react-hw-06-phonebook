import { createAction } from "@reduxjs/toolkit";
import {
  ADDCONTACTS,
  REMOVECONTACT,
  SETFILTER,
} from "../constants/phBookConstants";

const addContacts = createAction(ADDCONTACTS);

const removeContact = createAction(REMOVECONTACT);

const setFilter = createAction(SETFILTER);

export { addContacts, removeContact, setFilter };
