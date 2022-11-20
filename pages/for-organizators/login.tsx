import Layout from "../../components/shared/layout";
import Input from "../../components/shared/input";
import { useFormik } from "formik";
import { loginValidator } from "../../utils/validators/login-validator";
import Button from "../../components/shared/button";

const Login = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidator,
    onSubmit: () => {},
  });

  return (
    <Layout title='Login Organizator'>
      <main className="screen-size h-screen flex items-center">
        <div className="flex flex-col justify-center h-full w-1/2">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              label="E-mail"
              onChange={handleChange}
              value={values.email}
              type="email"
              placeholder="john.doe@gmail.com"
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
              Login
            </Button>
          </form>
        </div>

        <div className="p-24 flex flex-col h-[482px] bg-[#EAF0FF]">
          <h3>Hello again!</h3>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
