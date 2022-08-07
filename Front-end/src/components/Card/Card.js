import React, { useState, useEffect } from "react";
import { Image } from "./Card.styles";
import { Link } from "react-router-dom";
import { changeNumber } from "../hooks/useChangeNumber";
const Card = ({
  cart,
  id,
  name,
  price,
  quantity,
  subtotal,
  total,
  callbackClicked,
}) => {
  const [Quantity, setQuantity] = useState(parseInt(quantity));
  const [Subtotal, setSubtotal] = useState(subtotal);
  var dem = 1;

  useEffect(() => {
    if (cart != null) {
      cart.map((data) => {
        if (data.id == id) {
          data.quantity = Quantity;
          data.subtotal = data.quantity * data.price;
          setSubtotal(data.subtotal);
        }
      });
      sessionStorage.setItem("cart", JSON.stringify(cart));
      total();
    }
  }, [Quantity]);
  const Delete = () => {
    var newcart = cart.filter((item) => item["id"] != id);
    sessionStorage.setItem("cart", JSON.stringify(newcart));
    callbackClicked();
  };
  return (
    <div className="container">
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-sm-1 iconic">
          <i class="fas fa-trash-alt icon"></i>
        </div>
        <div className="col-sm-3">
          <Image
            src="https://order.tokago.vn/uploads/2021/2/6/11/9/ed522ead3745b1c0709f76081662ab8b.jpg"
            width="178px"
            height="178px"
          />
        </div>
        <div className="col-sm-3">
          <h2>{name}</h2>
          <br /> <br />
          <Link to={"../details?idpro=" + id} style={{ color: "#B6034E" }}>
            Details
          </Link>
        </div>
        <div className="col-sm-5">
          <div className="row">
            <div className="col-sm">
              <span class="i">Price</span>
              <br />
              <span>{`${changeNumber(price)}$`}</span>
            </div>

            <div className="col-sm">
              <span class="i">Quantity</span>
              <br />
              <input
                min={1}
                value={parseInt(Quantity)}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                style={{ width: "100%" }}                
              ></input>
            </div>
            <div className="col-sm">
              <span class="i">Total</span>
              <br />
              <span>{`${changeNumber(Subtotal)}$`}</span>
            </div>
            <div className="col-sm">
              <span class="i"></span>
              <br />
              <Link to="" onClick={Delete}>
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
