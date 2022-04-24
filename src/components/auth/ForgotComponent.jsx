import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Slide from "react-reveal/Slide";

export default function ForgotComponent() {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
  });

  //  this component will be redirected after clicking on "forgot password"

  return (
    <form onSubmit={formik.handleSubmit}>
      {/*<h1 className="text-center auth-title">Reset Password</h1>*/}
      <Slide collapse bottom>
        <TextField
          fullWidth
          variant="filled"
          id="password"
          name="password"
          label="Set new password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          fullWidth
          variant="filled"
          id="password"
          name="password"
          label="Confirm password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Slide>

      <div className="submit-buttons">
        <Button type="submit" fullWidth variant="contained" size="large">
          Confirm
        </Button>
      </div>
    </form>
  );
}
