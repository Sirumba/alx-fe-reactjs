import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <div className="max-w-sm mx-auto p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Registration Form (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("User registered successfully (Formik)");
        }}
      >
        <Form className="space-y-4">
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 w-full"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
