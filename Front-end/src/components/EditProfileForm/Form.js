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
  profile: 1,
  fullname: "",
  password: "",
  phone: "",
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
      <Wrapper>
        <form onSubmit={handleSubmit} id="form" noValidate>
          <div className="form-group">
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
            <p className="input-alert">{errors.fullname && errors.fullname}</p>
          </div>
          <div className="form-group">
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
            <p className="input-alert">{errors.password && errors.password}</p>
          </div>

          <div className="form-group">
            <h2>Phone</h2>

            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="form-control"
              value={values.phone}
              onChange={handleChange}
              required
            />
            <p className="input-alert">{errors.phone && errors.phone}</p>
          </div>

          <div className="form-group">
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

          <input type="submit" value="Save here" className="btn-success" />
        </form>
      </Wrapper>
    </>
  );
}
