import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
//Styles
import { Wrapper, Content } from "./DetailsInfo.styles";
export let ratingItem = 0;
export default function DetailsInfo({
  title,
  price,
  description,
  quantity,
  avgScore = 9,
}) {
  const [score, setScore] = useState(ratingItem);

  const ratingChanged = (newRating) => {
    setScore(newRating);
  };
  ratingItem = score;
  const editable = true;
  const checkEditable = () =>
    window.sessionStorage.getItem("rating") > 0 ? !editable : editable;
  console.log(ratingItem);
  window.sessionStorage.setItem("rating", ratingItem);
  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <Content>
          <p>{description}</p>
          <div className="row info-control">
            <div className="col-8">Total</div>
            <div className="col-4">{`${price}$`}</div>
          </div>
          <div className="info-control title">Color: </div>
          <div className="info-control title">Mean Score: {avgScore}</div>
          <div className="info-control title">
            Rating: <span>{score}</span>
            <br />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={window.sessionStorage.getItem("rating")}
              size={30}
              isHalf={true}
              edit={checkEditable}
              emptyIcon={<i className="fas fa-star"></i>}
              halfIcon={<i className="fas fa-star-half-alt"></i>}
              fullIcon={<i className="fas fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </Content>
      </Wrapper>
    </>
  );
}
