import React, { useState } from "react";
import { Navigate } from "react-router";
//Validate
import validate from "./validateInfo";
//Hooks
import useForm from "../hooks/useForm";
//Styles
import { Wrapper } from "./Form.styles";
//INFORMATION
const INFORMATION = {
  fullname: "",
  password: "",
  conpassword: "",
  email: "",
};

export default function Form({ submittedForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submittedForm,
    validate,
    INFORMATION
  );

  return (
    <>
      <Wrapper className="main">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} id="form" noValidate>
          <div className="row">
            <div className="form-group col">
              <h2>Fullname</h2>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your fullname"
                className="form-control"
                value={values.fullname}
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.fullname && errors.fullname}
              </p>
            </div>
            <div className="form-group col">
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                id="input-pass"
                value={values.password}
                placeholder="Enter your password"
                className="form-control"
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.password && errors.password}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <h2>Confirm Password</h2>

              <input
                type="password"
                name="conpassword"
                placeholder="Confirm password"
                className="form-control"
                value={values.conpassword}
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.conpassword && errors.conpassword}
              </p>
            </div>

            <div className="form-group col">
              <h2>Email</h2>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
                required
              />
              <p className="input-alert">{errors.email && errors.email}</p>
            </div>
          </div>

          <input
            type="submit"
            value="Click here"
            className="btn-outline-success"
          />
        </form>
      </Wrapper>
    </>
  );
}
