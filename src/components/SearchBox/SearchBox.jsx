import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const contactsSearchFieldId = useId();

  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <label htmlFor={contactsSearchFieldId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="contactsSearch"
        value={value}
        onChange={handleChange}
        id={contactsSearchFieldId}
      />
    </div>
  );
};

export default SearchBox;
