import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().email("Wrong pattern").required("Email is required"),
  password: yup.string().required("Password is required").min(8),
});
