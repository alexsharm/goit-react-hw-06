import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const usernameFieldId = useId();
  const phoneNumFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(addContact(values.username, values.number));
  };

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.formCont}>
          <label htmlFor={usernameFieldId}>Name</label>
          <Field className={css.input} name="username" id={usernameFieldId} />
          <ErrorMessage name="username" />
        </div>

        <div className={css.formCont}>
          <label htmlFor={phoneNumFieldId}>Number</label>
          <Field className={css.input} name="number" id={phoneNumFieldId} />
          <ErrorMessage name="number" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
