"use client";

import { useFormik } from "formik";
import * as yup from "yup";

const registerValidator = yup.object({
  companyName: yup.string().required("Company name is required"),
  email: yup
    .string()
    .email("Invalid patter")
    .required("This field is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password has to have at least 8 characters"),
});

export const useRegisterForm = () => {
  const { values, handleChange, errors, touched, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        companyName: "",
        email: "",
        password: "",
      },
      validationSchema: registerValidator,
      onSubmit: (values) => {
        resetForm();
      },
    });

  const formErrors = {
    companyName:
      errors.companyName && touched.companyName ? errors.companyName : null,
    email: errors.email && touched.email ? errors.email : null,
    password: errors.password && touched.password ? errors.password : null,
  };

  return {
    values,
    updateField: handleChange,
    errors: formErrors,
    submitForm: handleSubmit,
  };
};
