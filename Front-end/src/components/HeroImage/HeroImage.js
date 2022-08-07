import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Contain } from "./HeroImage.styles";

import { useState } from "react";
export default function HeroImage({ image }) {
  const [current, setCurrent] = useState(0);
  const length = image.length;
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <div className="slider">
        {image.map((item, i) => {
          return (
            <Wrapper
              className={i === current ? "slide active" : "slide"}
              image={item.a}
              key={i}
            />
          );
        })}
        <div className="nav">
          <i class="fas fa-step-backward prev" onClick={prev}></i>
          <i class="fas fa-step-forward nextt" onClick={next}></i>
        </div>
        <div class="icon">
          <Link to="/">
            <i class="fab fa-facebook-square"></i>
          </Link>
          <Link to="/">
            <i class="fab fa-instagram-square"></i>
          </Link>
          <Link to="/">
            <i class="fab fa-twitter-square"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
