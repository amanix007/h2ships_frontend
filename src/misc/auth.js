import * as yup from "yup";
import { LOGIN, REGISTRATION } from "../request/api";
const name_yup = yup.string("Enter your name").required("Name is required");
const email_yup = yup
  .string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required");

const password_yup = yup
  .string("Enter your password")
  .min(6, "Password should be of minimum 6 characters length")
  .required("Password is required");

const password_confirmation_yup = yup
  .string("Enter your password Confirmation")
  .oneOf([yup.ref('password'), null], 'Passwords must match')
  .min(6, "Password Confirmation should be of minimum 6 characters length")
  .required("Password Confirmation is required");

const signup_init_value = {
  email: "",
  name: "",
  password: "",
  password_confirmation: "",
}
const signup_validation_schema = yup.object({
  email: email_yup,
  name: name_yup,
  password: password_yup,
  password_confirmation: password_confirmation_yup,
});

const login_init_value = {
  email: "",
  password: "",
}
const login_validation_schema = yup.object({
  email: email_yup,
  password: password_yup,
});
const forget_password_init_value = {
  email: ""
}
const forget_password_validation_schema = yup.object({
  email: email_yup
});
const reset_password__initial_value = {
  password: "",
  password_confirmation: "",
}
const reset_password_validation_schema = yup.object({

  password: password_yup,
  password_confirmation: password_confirmation_yup,
});
export const setDataByAuthType = (authType) => {
  let data = {
    validationSchema: {},
    initialValues: {},
    title: "",
    buttonLabel: ""
  }
  switch (authType) {
    case "signup":
      data.title = "Sign Up";
      data.buttonLabel = "Register";
      data.validationSchema = signup_validation_schema;
      data.initialValues = signup_init_value;

      break;
    case "login":
      data.title = "Log in";
      data.buttonLabel = "Log in";
      data.validationSchema = login_validation_schema;
      data.initialValues = login_init_value;
      break;
    case "forget_password":
      data.title = "Forgot Password";
      data.buttonLabel = "Submit";
      data.validationSchema = forget_password_validation_schema;
      data.initialValues = forget_password_init_value;
      break;
    case "reset_password":
      data.title = "Reset Password";
      data.buttonLabel = "Submit";
      data.validationSchema = reset_password_validation_schema;
      data.initialValues = reset_password__initial_value;
      break;

    default:
    // code block
  }
  return data;

}




export const submit_auth = async (authType, values) => {
  let data = {};
  let res = null;
  switch (authType) {
    case "signup":
      res = await REGISTRATION(values);
      console.log(res);
      break;
    case "login":

      res = await LOGIN(values);
      

      break;
    case "forget_password":


      break;
    case "reset_password":


      break;

    default:
    // code block
  }
  return res;
}