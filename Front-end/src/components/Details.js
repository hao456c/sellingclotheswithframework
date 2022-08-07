import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import DetailsImage from "./DetailsImage/DetailsImage";
import DetailsInfo, { ratingItem } from "./DetailsInfo/DetailsInfo";
import Comment from "./Comment/Comment";
import api from "./api";
import { getComment, createcomment, createreply } from "./fakeapi.js";
//Image
import Image from "../images/YuruCamp.jpg";
import mod1 from "../images/mod1.jpg";

export default function Details({ currentuserid }) {
  const search = useLocation().search;
  const idpro = new URLSearchParams(search).get("idpro");
  const [Posts, setPosts] = useState([]);
  const keyword = new URLSearchParams(search).get("keyword");
  const Searching = () => {};
  useEffect(() => {
    if (idpro !== null) {
      api.APIPost("shop/detail?idpro=" + idpro).then((res) => {
        setPosts(res.data.productdetail);
      });
    }
  }, [search]);

  console.log("session", window.sessionStorage.getItem("parentid"));

  const [backendcmts, setbackendcmts] = useState([]);

  console.log("id", currentuserid);
  // console.log('skjdfkds',a)
  const dbcmt = backendcmts.filter(
    (backendcmts) => backendcmts.parentid === null
  );
  const replie = (cmtid) => {
    return backendcmts
      .filter((backendcmts) => backendcmts.parentid === cmtid)
      .sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
  };
  // console.log(replie(1))
  useEffect(() => {
    getComment().then((data) => {
      setbackendcmts(data);
    });
  }, []);

  useEffect(() => {
    if (idpro !== null) {
      api.APIPost("shop/detail?idpro=" + idpro).then((res) => {
        setPosts(res.data.productdetail);
      });
    }
  }, [search]);
  const addcomment = (text, parentid, rating) => {
    rating = ratingItem;
    console.log("adcmt", text, parentid, rating);
    createcomment(text, parentid, rating).then((dbcmt) => {
      setbackendcmts([dbcmt, ...backendcmts]);
    });
  };
  const addreply = (text, parentid) => {
    console.log("addreply", text, parentid);
    createreply(text, parentid).then((dbcmt) => {
      setbackendcmts([dbcmt, ...backendcmts]);
    });
  };

  const [text, settext] = useState("");

  const onsubmit = (event) => {
    event.preventDefault();
    addcomment(text);
    settext("");
  };
  const onsubmitt = (event) => {
    event.preventDefault();

    let a = parseInt(window.sessionStorage.getItem("parentid"));
    console.log("a", typeof a);
    addreply(text, a);
    settext("");
  };

  return (
    <>
      <Header
        keyword={keyword}
        searching={Searching}
        style={{ backgroundColor: "black" }}
      />
      <input
        type="checkbox"
        className="check"
        id="menu-btn"
        style={{ display: "none" }}
      />
      <input
        type="checkbox"
        className="checkr"
        id="menus-btn"
        style={{ display: "none" }}
      />
      <label for="menu-btn" class="overlay"></label>
      <label for="menus-btn" class="overlay"></label>
      <form className="cmt-area" onSubmit={onsubmit}>
        <h3>Comment Here</h3>
        <label for="menu-btn">
          <i class="fas fa-times x"></i>
        </label>
        <input
          type="text"
          value={text}
          onChange={(eve) => settext(eve.target.value)}
          required
        />
        <button id="write">Comment</button>
      </form>
      <form className="rep-area" onSubmit={onsubmitt}>
        <h3>Reply Here</h3>
        <label for="menus-btn">
          <i class="fas fa-times x"></i>
        </label>

        <input
          type="text"
          value={text}
          onChange={(eve) => settext(eve.target.value)}
          required
        />
        <button id="write">Reply</button>
      </form>
      <div style={{ maxWidth: "100%" }} className="container">
        <div class="row">
          <div class="col-sm-4">
            <DetailsImage srcImg={mod1} alt="items" />
          </div>
          <div class="col-sm-8">
            {Posts.map((item) => {
              console.log(item);
              return <DetailsInfo title={item.name} price={item.price} />;
            })}
            {/* <div>
              <button id="cmt-button">Add to cart</button> 
              <button id="cmt-button">Add to wishlist</button>
            </div>   */}
            <label for="menu-btn" id="cmt-button">
              comment
            </label>
          </div>
        </div>
        <div style={{ border: "1px solid blue", margin: "0 20px 20px 10px" }}>
          <h1 style={{ paddingLeft: "20px" }}>Comment</h1>
          {console.log(ratingItem)}
          {dbcmt.map((dbcmt) => (
            <>
              {console.log(dbcmt.rating)}
              <Comment
                key={dbcmt.id}
                id={dbcmt.id}
                username={dbcmt.name}
                comment={dbcmt.comment}
                date={dbcmt.created_at}
                avatar={Image}
                replie={replie(dbcmt.id)}
                parentid={dbcmt.parentid}
                currentuserid={currentuserid}
                userid={dbcmt.userid}
                rating={dbcmt.rating}
              />
            </>
          ))}
          {/* <Comment username="Test" avatar={Image} />
          <Comment username="Test" avatar={Image} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
