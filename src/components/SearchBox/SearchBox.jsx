import { useId } from "react";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const contactsSearchFieldId = useId();

  const dispatch = useDispatch();

  const filterValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={contactsSearchFieldId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="contactsSearch"
        onChange={handleChange}
        value={filterValue}
        id={contactsSearchFieldId}
      />
    </div>
  );
};

export default SearchBox;
