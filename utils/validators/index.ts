import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().email("Wrong pattern").required("Email is required"),
  password: yup.string().required("Password is required").min(8),
});

export const registerValidator = yup.object({
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
