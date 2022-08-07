import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Form from "./RegisterForm/Form";
//Navigate

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState("Trùng email");
  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("keyword");
  const Searching = () => {};
  function submitForm(string) {
    setIsSubmitted(string);
  }
  return (
    <>
      <Header
        keyword={keyword}
        searching={Searching}
        style={{ backgroundColor: "black" }}
      />
      {isSubmitted == "Trùng email" ? (
        <>
          <Form submittedForm={submitForm} />
        </>
      ) : (
        <>
          <Navigate to={"/login"} />
        </>
      )}
      <Footer />
    </>
  );
}
