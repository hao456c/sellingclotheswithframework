import React, { useState, useEffect } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import styled from "styled-components";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import image1 from "../images/mod1.jpg";
import avatar from "../images/mod2.jpg";
import Form from "./EditProfileForm/Form";
import api from "./api";
//Styles
import { Wrapper as UserBanner } from "./HeroImage/HeroImage.styles";
//Hooks
import { changeNumber } from "./hooks/useChangeNumber";

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 12rem;
  left: 8rem;
`;
const Content = styled.div`
  padding-top: 10rem;
  margin-bottom: 3.5rem;
  h1 {
    margin-bottom: 2rem;
  }
  h4 {
    font-weight: 200;
  }
`;
const UserInfo = styled.div`
  position: absolute;
  bottom: 8px;
  left: 22rem;
`;

export default function Profile() {
  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("keyword");
  const orderid = new URLSearchParams(search).get("orderid");
  const Searching = () => {};
  const [isSubmitted, setIsSubmitted] = useState("Trùng email");
  const [OrderBill, setOrderBill] = useState([]);
  const [OrderBillDetails, setOrderBillDetails] = useState([]);
  useEffect(() => {
    if (orderid == null) {
      var id = sessionStorage.getItem("loginid");
      api.APIPost("orderhistory?id=" + id).then((res) => {
        setOrderBill(res.data.orderbill);
      });
    } else {
      api.APIPost("orderdetailhistory?orderid=" + orderid).then((res) => {
        setOrderBillDetails(res.data.orderbilldetails);
      });
    }
  }, [search]);
  function submitForm(string) {
    setIsSubmitted(string);
  }
  return (
    <>
      <Header
        style={{ backgroundColor: "black" }}
        keyword={keyword}
        searching={Searching}
      />
      <div>
        <UserBanner
          style={{ position: "relative", height: "200px" }}
          image={image1}
        >
          <UserInfo>
            <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
              {window.sessionStorage.getItem("loginname")}
            </span>
          </UserInfo>
        </UserBanner>
        <Avatar alt="avatar" src={avatar} />
      </div>
      <Content className="container">
        <div className="row">
          <div className="col-4 sm">
            <h1>Information</h1>
            {isSubmitted == "Trùng email" ? (
              <Form submittedForm={submitForm} />
            ) : (
              <Navigate to={"/login"} />
            )}
          </div>
          <div className="col-8 sm">
            <h1>Purchase History</h1>
            {orderid == null ? (
              <table style={{ width: "100%" }} class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Bill code</th>
                    <th scope="col">Total</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>

                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {OrderBill.map((data) => {
                    return (
                      <tr>
                        <td scope="row">{data.order_id}</td>
                        <td>{changeNumber(data.total)}$</td>
                        <td>{data.created_at}</td>
                        <td>Status</td>
                        <td>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"/profile?orderid=" + data.order_id}
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <table style={{ width: "100%" }} class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Product's Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {OrderBillDetails.map((data) => {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.quantity}</td>
                        <td>{changeNumber(data.price)}$</td>
                        <td>{changeNumber(data.subtotal)}$</td>
                        <td>{data.created_at}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}
