import React, { useState } from "react";
export default function Loginadmin() {
  return (
    <>
      <div>
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link href="css/sb-admin-2.min.css" rel="stylesheet" />
        <div className="bg-gradient-primary" style={{ height: "700px" }}>
          <div className="container">
            {/* Outer Row */}
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              Welcome Back!
                            </h1>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="email"
                                style={{ background: "white" }}
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address..."
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                style={{ background: "white" }}
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <a
                              href="index.html"
                              className="btn btn-primary btn-user btn-block"
                            >
                              Login
                            </a>
                            {/* <hr /> */}
                            {/* <a href="index.html" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw" /> Login with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                            </a> */}
                          </form>
                          {/* <hr /> */}
                          <div className="text-center">
                            <a className="small">Already have an account?</a>
                          </div>
                          <div className="text-center">
                            <a className="small">please login!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
