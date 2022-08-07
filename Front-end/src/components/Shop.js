import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Sidebar, { categoryTitle } from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import PaginationL from "./PaginationL/PaginationL";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import Spinner from "./Spinner/Spinner";
//DUMMY DATA
import sale from "../images/sale.jpg";
import api from "./api";

import fakeImage from "../images/YuruCamp.jpg";
//Styles
export let productId = "";

export default function Shop({ category }) {
  document.title = "Shop";
  const [pageCount, setpageCount] = useState(0);
  const [Posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const sex = new URLSearchParams(search).get("sex");
  const age = new URLSearchParams(search).get("age");
  const idpro = new URLSearchParams(search).get("idpro");
  const keyword = new URLSearchParams(search).get("keyword");
  const Searching = () => {
    if (
      sessionStorage.getItem("searchresult") != null &&
      sessionStorage.getItem("searchresult") !== "null"
    ) {
      setPosts(JSON.parse(sessionStorage.getItem("searchresult")));
      setpageCount(sessionStorage.getItem("pagecount"));
    } else {
      setPosts([]);
    }
  };

  // lấy dữ liệu từ api khi load hoặc load lại trang
  useEffect(() => {
    if (
      sessionStorage.getItem("search") !== null &&
      sessionStorage.getItem("search") != search
    ) {
      sessionStorage.setItem("search", search);
      window.sessionStorage.setItem("currentPage", 1);
    } else if (sessionStorage.getItem("search") == null) {
      sessionStorage.setItem("search", search);
    }
    // if (window.sessionStorage.getItem("currentPage")!= null) {
    //   window.sessionStorage.setItem("currentPage", 1);
    // }
    setCurrentPage(window.sessionStorage.getItem("currentPage"));
    if (id === null && idpro === null && keyword === null) {
      api
        .APIPost("shop?page=" + window.sessionStorage.getItem("currentPage"))
        .then((res) => {
          
          setPosts(res.data.allproduct.data);
          setpageCount(res.data.allproduct.last_page);
        });
    }
    if (id !== null) {
      if (sex === null && age === null) {
        api.APIPost("shop/category?id=" + id).then((res) => {
          setPosts(res.data.productcate.data);
          setpageCount(res.data.productcate.last_page);
        });
      }
      if (sex !== null && age === null) {
        api.APIPost("shop/category?id=" + id + "&&sex=" + sex).then((res) => {
          setPosts(res.data.productcate.data);
          setpageCount(res.data.productcate.last_page);
        });
      }
      if (sex !== null && age !== null) {
        api
          .APIPost("shop/category?id=" + id + "&&sex=" + sex + "&&age=" + age)
          .then((res) => {
            setPosts(res.data.productcate.data);
            setpageCount(res.data.productcate.last_page);
          });
      }
    }
  }, [search]);
  // nhả dữ liệu
  const renderPost = () => {
    if (idpro === null) {
      return Posts.map((item) => {
        return (

          <Items
            id={item.product_id}
            classi="discount"
            image={fakeImage}
            name={item.name}
            price={item.price}
          />
        );
      });
    } else {
      productId = idpro;
    }
  };

  // trả về dữ liệu khi đổi trang
  const changePage = ({ selected }) => {
    setCurrentPage(selected + 1);
    if (id === null && keyword === null) {
      api.APIPost("shop?page=" + (selected + 1)).then((res) => {
        setPosts(res.data.allproduct.data);
        window.sessionStorage.setItem("currentPage", selected + 1);
      });
    } else {
      if ((sex === null) & (age === null) & (keyword === null))
        api
          .APIPost("shop/category?page=" + (selected + 1) + "&&id=" + id)
          .then((res) => {
            setPosts(res.data.productcate.data);
            window.sessionStorage.setItem("currentPage", selected + 1);
          });

      if ((sex !== null) & (age === null) & (keyword === null))
        api
          .APIPost(
            "shop/category?page=" +
              (selected + 1) +
              "&&id=" +
              id +
              "&&sex=" +
              sex
          )
          .then((res) => {
            setPosts(res.data.productcate.data);
            window.sessionStorage.setItem("currentPage", selected + 1);
          });
      if ((sex !== null) & (age !== null) & (keyword === null))
        api
          .APIPost(
            "shop/category?page=" +
              (selected + 1) +
              "&&id=" +
              id +
              "&&sex=" +
              sex +
              "&&age" +
              age
          )
          .then((res) => {
            setPosts(res.data.productcate.data);
            window.sessionStorage.setItem("currentPage", selected + 1);
          });
    }
    if (keyword != null) {
      api
        .APIPost(
          "hint?search=" + keyword + "&&issearched=1&&page=" + (selected + 1)
        )
        .then((res) => {
          setPosts(res.data.result.data);
        });
    }
  };
  return (
    <>
      <Header
        style={{ backgroundColor: "black" }}
        keyword={keyword}
        searching={Searching}
      />
      <div style={{ marginTop: "80px" }}>
        <Banner image={sale} />
      </div>
      <div style={{ maxWidth: "100%" }} className="container">
        <div class="row">
          <div class="col-4">
            <Sidebar />
          </div>
          <div class="col-8">
            <h1
              style={{
                textAlign: "right",
                fontSize: "20px",
                marginTop: "30px",
              }}
            >
              Current page: {currentPage}
            </h1>
            <GridLayout
              header={
                categoryTitle[id - 1] ? categoryTitle[id - 1] : "Sản phẩm"
              }
            >
              {category === "" && renderPost().length === 0 ? (
                <Spinner />
              ) : (
                renderPost()
              )}
            </GridLayout>
            {pageCount === 0 ? null : (
              <PaginationL
                pagecount={pageCount}
                pagechange={changePage}
                currentPage={currentPage - 1}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
