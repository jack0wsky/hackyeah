import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLogin } from "@/modules/auth/auth.controller";

// .email("Wrong pattern").required("Email is required")
export const loginValidator = yup.object({
  email: yup.string(),
  password: yup.string().required("Password is required").min(8),
});

export const useLoginForm = () => {
  const { login, loading } = useLogin();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidator,
    onSubmit: async (values) => {
      await login({ username: values.email, password: values.password });
    },
  });

  const formErrors = {
    email: errors.email && touched.email ? errors.email : null,
    password: errors.password && touched.password ? errors.password : null,
  };

  return {
    values,
    errors: formErrors,
    updateField: handleChange,
    submitForm: handleSubmit,
    isLoggingIn: loading,
  };
};
