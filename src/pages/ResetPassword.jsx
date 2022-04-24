import React from "react";
import AuthComponent from "../components/auth/AuthComponent";

export default function ResetPassword() {
  return (
    <div>
      <AuthComponent authType="reset_password" />
    </div>
  );
}
