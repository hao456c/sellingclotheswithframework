import React from "react";
import { Link } from "react-router-dom";
//Styles
import "./Form.css";
//Hooks
import useForm from "../hooks/useForm";
import Logo from "../../images/logo2.png";
import validate from "./validateInfo";
//INFORMATION
const INFORMATION2 = {
  login: true,
  email: "",
  password: "",
};
export default function Form({ submittedForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submittedForm,
    validate,
    INFORMATION2
  );
  return (
    <>
      <div class="body">
        <header style={{ marginLeft: "-3%" }}>
          <Link id="logo" to="">
            <img src={Logo} alt="" />
          </Link>
          <div class="menus" style={{ width: "60%" }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/">Category</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/">Wishlist</Link>
          </div>
        </header>
        <div class="left-item">
          {window.sessionStorage.getItem("loginid") !== "null" &&
          window.sessionStorage.getItem("loginid") !== null ? (
            <div>You have already logged in</div>
          ) : (
            <form onSubmit={handleSubmit} style={{ width: "80%" }} noValidate>
              <h1>Welcome to us</h1>
              <span>you wanna buy something?</span>
              <br />
              <span> please login here</span>
              <br />
              <br />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
                required
              />
              <p style={{ color: "red" }}>{errors.email && errors.email}</p>
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
              <p style={{ color: "red" }}>
                {errors.password && errors.password}
              </p>
              <input type="checkbox" id="rmp" name="vehicle1" value="Bike" />
              <span
                style={{
                  fontSize: "small",
                  color: "#858080",
                  paddingRight: "10%",
                  position: "relative",
                  top: "-6px",
                }}
              >
                Remember my password
              </span>
              <Link
                to="/"
                style={{ top: "-6px", position: "relative", color: "cyan" }}
              >
                forgot my password?
              </Link>
              <div class="button">
                <button id="login">log-in</button>
                <button id="signup">
                  <Link to="/register"  >
                   sign-up
                  </Link>
                </button>
              </div>
              <br />
              <br />
              <br />
              <span>Design by duy’s team frontend?</span>
              <br />
              <span>
                We keep your infomation
                <span style={{ fontWeight: "800", fontSize: "18px" }}>
                  Privacy
                </span>
              </span>
            </form>
          )}
        </div>
        <div class="right-item">
          <div class="back">
            <div class="poligon"></div>
          </div>
          <Link id="us" to="/">
            About us
          </Link>
        </div>
      </div>
    </>
  );
}
