import React from "react";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
//Styles
import { Wrapper, Content } from "./Comment.styles";

export default function Comment({
  id,
  currentuserid,
  username,
  avatar,
  comment,
  date,
  replie,
  parentid,
  userid,
  rating,
}) {
  console.log(Date.parse(date));
  const callparent = (a) => {
    window.sessionStorage.setItem("parentid", a);
    window.localStorage.setItem("parentid", a);
  };

  const canrep = Boolean(userid);
  const candel = currentuserid === userid;

  return (
    <>
      <Wrapper>
        <Content className="row">
          <div className="col-sm-1">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="col-sm-8">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "39%",
              }}
            >
              <h1>{username}</h1>
              <span>{date}</span>
            </div>
            {console.log(rating)}
            <div style={{ marginBottom: "10px" }}>
              {rating !== null && (
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              )}
            </div>
            <p>{comment}</p>
            {parentid === null && (
              <label
                for="menus-btn"
                className="action"
                style={{ paddingRight: "26px" }}
                onClick={(e) => callparent(id)}
              >
                <i class="fa fa-reply action" aria-hidden="true" />
                reply
              </label>
            )}
            {candel && (
              <label
              // onClick={()=>delecmt({id})}
              >
                <i class="fas fa-trash-alt" />
                delete
              </label>
            )}
            <br></br>

            <br></br>
            <br></br>
            {replie.length > 0 && (
              <div>
                {replie.map((reply) => (
                  <Comment
                    style={{ paddingLeft: "20px" }}
                    key={reply.id}
                    username={reply.name}
                    comment={reply.comment}
                    avatar={avatar}
                    replie={[]}
                    date={date}
                    rating={null}
                  />
                ))}
              </div>
            )}
          </div>
        </Content>
      </Wrapper>
    </>
  );
}
