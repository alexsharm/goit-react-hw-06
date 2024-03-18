import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <li className={css.item}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
