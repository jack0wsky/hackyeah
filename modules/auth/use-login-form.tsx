import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().email("Wrong pattern").required("Email is required"),
  password: yup.string().required("Password is required").min(8),
});

export const useLoginForm = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidator,
    onSubmit: () => {},
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
  };
};
