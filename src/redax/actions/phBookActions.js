const addNote = (text) => ({
  type: "ADD_NOTE",
  payload: {
    id: Date.now(),
    text,
  },
});

export { addNote };
