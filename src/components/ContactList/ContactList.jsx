import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectNameFilter);

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filtredContacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;
