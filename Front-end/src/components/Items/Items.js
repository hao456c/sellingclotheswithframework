import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { changeNumber } from "../hooks/useChangeNumber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Styles

import { Wrapper, Image } from "./Items.styles";
export default function Items({ id, image, name, price, dis, classi }) {
  var cart = [];
  var a = [];
  const AddtoCart = () => {
    api.APIPost("shop/addtocart?idpro=" + id).then((res) => {
      var flag = 0;
      if (
        sessionStorage.getItem("cart") != null &&
        sessionStorage.getItem("cart") != "null"
      ) {
        cart = JSON.parse(sessionStorage.getItem("cart"));
        cart.map((data) => {
          if (data.id == res.data.cart.id) {
            flag++;
            data.quantity = data.quantity + 1;
            data.subtotal = data.quantity * data.price;
          }
        });
        if (flag == 0) {
          cart.push(res.data.cart);
        }
      } else {
        cart.push(res.data.cart);
      }
      sessionStorage.setItem("cart", JSON.stringify(cart));
      console.log(sessionStorage.getItem("cart"));
      toast.success("Add Successly!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };
  const render = () => {
    var result;
    a = JSON.parse(sessionStorage.getItem("cart"));
    if (a != null) {
      // console.log(typeof(a));
      console.log(a);
    }

    console.log(result);
  };

  return (
    <>
      {render()}
      <Wrapper>
        <div className={classi}>
          <span>{dis}</span>
        </div>
        <Image src={image} alt="item-thumb" />
        <div className="name">
          <div>
            <h1 className="pro">
              <Link
                style={{ textDecoration: "none" }}
                to={`/details?idpro=${id}`}
              >
                {name}
              </Link>
            </h1>
          </div>
          <div className="iconn">
            <div style={{ paddingBottom: "8px", paddingTop: "23px" }}>
              <label className="price">{`${changeNumber(price)}$`}</label>
            </div>
          </div>
        </div>
        <Link
          style={{ alignItems: "center", width: "100%" }}
          className="btn btn-success"
          to=""
          onClick={AddtoCart}
        >
          Add to cart
        </Link>
        <ToastContainer />
      </Wrapper>
    </>
  );
}
