import { ADDCONTACTS } from "../constants/phBookConstants";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const phBookRedusers = (state = initialState, action) => {
  switch (action.type) {
    case ADDCONTACTS:
      return { ...state, filter: "aaaaaaaaaa" };

    default:
      return state;
  }
};

export { phBookRedusers };
