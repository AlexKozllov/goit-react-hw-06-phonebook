import {
  ADDCONTACTS,
  REMOVECONTACT,
  SETFILTER,
} from "../constants/phBookConstants";

const addContacts = (payload) => ({
  type: ADDCONTACTS,
  payload,
});

const revoveContact = (payload) => ({
  type: REMOVECONTACT,
  payload,
});

const setFilter = (payload) => ({
  type: SETFILTER,
  payload,
});

export { addContacts, revoveContact, setFilter };
