import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "./Card/Card";
//Hooks
import { changeNumber } from "./hooks/useChangeNumber";
//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api";

//Select_Data
const SELECT_DELIVERY_DATA = [
  {
    id: "001",
    name: "Thành Phố Hồ Chí Minh",
    fee: 10000,
  },
  {
    id: "002",
    name: "Hà nội",
    fee: 40000,
  },
];

const SELECT_DISCOUNT_DATA = [
  {
    id: "1",
    name: "Giáng sinh",
    code: "XMAS",
    fee: 20,
  },
  {
    id: "2",
    name: "XUÂN",
    code: "XUAN",
    fee: 40,
  },
];

export default function Cart() {
  const [delivery, setDelivery] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isClicked, setisClicked] = useState(0);
  const navigate = useNavigate();
  //Tính tổng giá tiền
  const [Total, setTotal] = useState();
  const totalPrice = parseFloat(
    (parseInt(Total) + parseInt(delivery)) * (1 - parseInt(discount) / 100.0)
  );
  //Button checkout
  const checkoutConfirm = () => {
    if (
      sessionStorage.getItem("loginid") !== "null" &&
      sessionStorage.getItem("loginid") !== null
    ) {
      if (Total !== 0) {
        if (delivery !== 0) {
          api
            .APIPostCheckOut(
              "cart/checkout",
              cart,
              Total,
              sessionStorage.getItem("loginid"),
              delivery
            )
            .then((res) => {
              if (res.data.message == "nhiều quá") {
                toast.error(" The quantity of your product is too large!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                toast.success(" Buy successfully!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                setTimeout(() => {
                  navigate("/");
                }, 5050);
                sessionStorage.setItem("cart", null);
              }
            });
        } else {
          toast.error(" You haven't chosen your delivery address yet !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        toast.error(" Nothing in your cart !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error(" You must log in beforehand", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  var cart = JSON.parse(sessionStorage.getItem("cart"));
  // dùng useEffect lấy lại mảng mới nếu đã click xóa sản phẩm và tính lại total
  useEffect(() => {
    cart = JSON.parse(sessionStorage.getItem("cart"));
    total();
  }, [isClicked]);
  const checkClicked = () => {
    var dem = Math.random();
    setisClicked(dem);
  };
  const total = () => {
    var sum = 0;
    if (cart != null) {
      cart.map((data) => {
        sum += data.subtotal;
      });
    }
    setTotal(sum);
    sessionStorage.setItem("total", sum);
  };
  return (
    <>
      <div className="container content">
        <div className="row">
          <div className="col-8">
            <h1>Shopping Cart</h1>
            {cart !== null ? (
              cart.length !== 0 ? (
                cart.map((data) => {
                  return (
                    <Card
                      cart={cart}
                      id={data.id}
                      key={data.id}
                      name={data.name}
                      price={data.price}
                      quantity={parseInt(data.quantity)}
                      subtotal={data.subtotal}
                      total={total}
                      callbackClicked={checkClicked}
                    />
                  );
                })
              ) : (
                <h1>Nothing in here</h1>
              )
            ) : (
              <>
                <h1>Nothing in here</h1>
              </>
            )}
          </div>
          <div className="col-4 cright">
            <h1>Total</h1>
            <div className="container total">
              <div className="row justify-content-between">
                <div className="col-4 ">Total</div>
                <div className="col-2 text-right i">
                  {Total != null ? `${changeNumber(Total)}$` : 0}
                </div>
              </div>
              <br />
              <div className="row justify-content-between">
                <div className="col-4">Delivery</div>
                {/* <div className="col-2 text-right i">{`${changeNumber(
                  delivery
                )}$`}</div> */}
              </div>
              <select
                onChange={(e) => {
                  setDelivery(e.target.value);
                }}
                className="form-control"
              >
                <option value={0} selected>
                  Choose your address
                </option>

                {SELECT_DELIVERY_DATA.map(({ id, name }) => (
                  <option key={id} value={0}>
                    {name}
                  </option>
                ))}
              </select>
              <br />

              <br />
              <hr />
              <div className="row justify-content-between">
                <div className="col-4">Total</div>
                <div className="col-2 text-right i">{`${changeNumber(
                  totalPrice
                )}$`}</div>
              </div>
              <div className="row justify-content-between">
                <button
                  onClick={checkoutConfirm}
                  type="button"
                  class="btn btn-outline-success"
                >
                  Checkout
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
