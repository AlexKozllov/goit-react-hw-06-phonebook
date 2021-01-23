import { ADDCONTACTS } from "../constants/phBookConstants";

const addNote = (text) => ({
  type: ADDCONTACTS,
  payload: {
    id: Date.now(),
    text,
  },
});

export { addNote };
