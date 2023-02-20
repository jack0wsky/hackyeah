import Link from "next/link";
import Layout from "../../modules/shared/layout";
import { useFormik } from "formik";
import { registerValidator } from "../../utils/validators";
import Input from "../../modules/shared/input";
import Button from "../../modules/shared/button";

const Register = () => {
  const { values, handleChange, errors, touched, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        companyName: "",
        email: "",
        password: "",
      },
      validationSchema: registerValidator,
      onSubmit: (values) => {
        console.log(values);

        resetForm();
      },
    });

  return (
    <Layout title="Register Organizator">
      <main className="screen-size h-screen flex items-center">
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <h1>Create account</h1>
          <form
            className="flex flex-col gap-y-12 w-full"
            onSubmit={handleSubmit}
          >
            <Input
              label="Company name"
              onChange={handleChange}
              value={values.companyName}
              placeholder="Some name"
              type="text"
              name="companyName"
              error={
                errors.companyName && touched.companyName
                  ? errors.companyName
                  : null
              }
            />
            <Input
              label="E-mail address"
              onChange={handleChange}
              value={values.email}
              placeholder="john.doe@gmail.com"
              type="email"
              name="email"
              error={errors.email && touched.email ? errors.email : null}
            />

            <Input
              label="Password"
              onChange={handleChange}
              value={values.password}
              type="password"
              placeholder=""
              name="password"
              error={
                errors.password && touched.password ? errors.password : null
              }
            />
            <Button variant="primary" type="submit">
              Register
            </Button>
          </form>

          <Link href="/for-organizators/login">Login</Link>
        </div>

        <div className="p-24 hidden md:flex flex-col h-[482px] bg-[#EAF0FF]">
          <h3>Create an account and  add a second life to your event waste!</h3>
          <div>
            <p>Why to join?</p>
            <ul>
              <li>reason</li>
              <li>reason</li>
              <li>reason</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Register;
