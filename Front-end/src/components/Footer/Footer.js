import React from "react";
//Styles
import { Wrapper, Content } from "../Footer/Footer.styles";

import LOGO from "../../images/samplelogo.png";
const BRANDS = [
  { id: 1, src: LOGO, alt: "facebook" },
  { id: 2, src: LOGO, alt: "youtube" },
];
export default function Footer() {
  return (
    <>
      <Wrapper>
        <Content>
          <h1>More about us</h1>
          <div style={{ maxWidth: "100%" }} className="container">
            <div className="row">
              <div class="col-8">
                <p>
                  A company description provides an overview of key aspects of
                  your business, like what you do and what makes your business
                  unique. ... Lenders and investors should see how your business
                  has a place in the market, as well as its benefits to future
                  customers.
                </p>
                {BRANDS.map((brand) => {
                  return (
                    brand && (
                      <img key={brand.id} alt={brand.alt} src={brand.src} />
                    )
                  );
                })}
              </div>
              <div className="col-4">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                  />
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
                <div className="contact">
                  <p>email : coolstore@gmail.com</p>
                  <p>phone : 0918327624-0766512549-090611254</p>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Wrapper>
    </>
  );
}
