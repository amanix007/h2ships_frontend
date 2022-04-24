import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik, Formik } from "formik";
import Fade from "react-reveal/Fade";
import navLogo from "../../assets/images/navLogo.png";
import { setDataByAuthType, submit_auth } from "../../misc/auth";

export default function AuthComponent(props) {
  let [state, setState] = useState({
    status_message: {
      type: "success",
      message: "",
    },
    authType: props.authType,
  });
  let { authType, status_message } = state;
  // console.log("authType", authType)
  let initialValues = setDataByAuthType(authType).initialValues;
  let validationSchema = setDataByAuthType(authType).validationSchema;

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values)
  //     // alert(JSON.stringify(values, null, 2));

  //     submit_auth(authType, values)
  //   },
  // });
  useEffect(() => {
    setState({
      ...state,
      status_message: {
        type: "",
        message: "",
      },
    });
  }, [authType]);

  return (
    <div className="auth auth-wrapper">
      {/* <Slide collapse bottom> */}
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          let res = await submit_auth(authType, values);
          if (res.data) {
            // in case of error
            console.log("res.data:", res.data);
            setState({
              ...state,
              status_message: {
                type: "success",
                message: "Success",
              },
            });
          } else {
            // console.log('res:', res.response.data)
            let { message, errors } = res.response.data;

            for (const property in errors) {
              console.log(`${property}: ${errors[property]}`);
              // message = message + ` ${property}: ${errors[property]}`
              message = message + ` ${errors[property]}`;
            }

            setState({
              ...state,
              status_message: {
                type: "error",
                message,
              },
            });
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-12">
                  <div className="auth-logo">
                    <img src={navLogo} alt="nav-logo" />
                  </div>
                  <h1 className="text-center auth-title">
                    {setDataByAuthType(authType).title}
                  </h1>
                  <Fade>
                    <div className="auth-inputs">
                      {authType === "signup" && (
                        <TextField
                          fullWidth
                          variant="filled"
                          id="name"
                          name="name"
                          label="Name"
                          value={props.values.name}
                          onChange={props.handleChange}
                          error={
                            props.touched.name && Boolean(props.errors.name)
                          }
                          helperText={props.touched.name && props.errors.name}
                        />
                      )}
                      {(authType === "login" ||
                        authType === "signup" ||
                        authType === "forget_password") && (
                        <TextField
                          fullWidth
                          variant="filled"
                          id="email"
                          name="email"
                          label="Email"
                          value={props.values.email}
                          onChange={props.handleChange}
                          error={
                            props.touched.email && Boolean(props.errors.email)
                          }
                          helperText={props.touched.email && props.errors.email}
                        />
                      )}
                      {(authType === "login" ||
                        authType === "signup" ||
                        authType === "reset_password") && (
                        <TextField
                          fullWidth
                          variant="filled"
                          id="password"
                          name="password"
                          label="Password"
                          type="password"
                          value={props.values.password}
                          onChange={props.handleChange}
                          error={
                            props.touched.password &&
                            Boolean(props.errors.password)
                          }
                          helperText={
                            props.touched.password && props.errors.password
                          }
                        />
                      )}
                      {(authType === "signup" ||
                        authType === "reset_password") && (
                        <TextField
                          fullWidth
                          variant="filled"
                          id="password_confirmation"
                          name="password_confirmation"
                          label="Password Confirmation"
                          type="password"
                          value={props.values.password_confirmation}
                          onChange={props.handleChange}
                          error={
                            props.touched.password_confirmation &&
                            Boolean(props.errors.password_confirmation)
                          }
                          helperText={
                            props.touched.password_confirmation &&
                            props.errors.password_confirmation
                          }
                        />
                      )}
                    </div>
                  </Fade>
                  <p
                    className={
                      status_message.type === "success"
                        ? "text-center success-color"
                        : "text-center error-color"
                    }
                  >
                    {status_message.message}
                  </p>
                  <div className="submit-buttons">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                    >
                      {setDataByAuthType(authType).buttonLabel}
                    </Button>
                  </div>
                  <div className="text-center">
                    {authType === "login" && (
                      <>
                        <span> Don't have an account?</span>
                        <Button
                          onClick={() =>
                            setState({ ...state, authType: "signup" })
                          }
                        >
                          <u>Sign up</u>
                        </Button>
                      </>
                    )}
                  </div>
                  <div className="auth__bottomLabel text-center">
                    {authType === "login" && (
                      <Button
                        onClick={() =>
                          setState({ ...state, authType: "forget_password" })
                        }
                      >
                        Forgot Password?
                      </Button>
                    )}
                    {(authType === "signup" ||
                      authType === "reset_password" ||
                      authType === "forget_password") && (
                      <Button
                        onClick={() =>
                          setState({ ...state, authType: "login" })
                        }
                      >
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
        {/* </Slide> */}
      </Formik>
    </div>
  );
}
