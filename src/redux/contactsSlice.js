import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

import initialContacts from "../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex((task) => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
