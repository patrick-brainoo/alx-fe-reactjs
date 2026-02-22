import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting (Formik form):", values);
    alert("User registered successfully (Formik)");
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Register (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Username</label>
            <br />
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email</label>
            <br />
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password</label>
            <br />
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
