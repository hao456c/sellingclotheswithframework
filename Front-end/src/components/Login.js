import React, { useState } from "react";
import Form from "./LoginForm/Form";
import { Navigate } from "react-router";
export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState("Thất Bại");

  function submitForm(string) {
    setIsSubmitted(string);
  }
  return (
    <div>
      {isSubmitted == "Thất Bại" ? (
        <Form submittedForm={submitForm} />
      ) : isSubmitted == "admin" ?(
        <Navigate to={"/admin"} />
      ):(
        <Navigate to={"/"} />
      )}
    </div>
  );
}
