import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";
import { useEffect } from "react";

import initialContacts from "../../contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      if (savedContacts !== "[]") {
        return JSON.parse(savedContacts);
      }
    }

    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filtredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
