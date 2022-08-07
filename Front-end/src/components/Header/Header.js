import React, { useState, useEffect } from "react";
import { Container, LogoImage, MenuBar } from "./Header.styles";
import Measure from "react-measure";
//Routing
import { Link, useLocation } from "react-router-dom";
//Image

import Logo2 from "../../images/logo2.png";
import api from "../api";

export default function Header({ state, style, keyword, searching }) {
  const [Search, setSearch] = useState([]);
  const [Hint, setHint] = useState([]);
  const [widthNav, setWidthNav] = useState({ width: 0 });
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(sidebar);

  useEffect(() => {
    api.APIPost("hint?search=" + Search).then((res) => {
      setHint(res.data.result);
      // console.log(typeof(res.data.hint));
    });
    if (keyword !== null) {
      api
        .APIPost("hint?search=" + keyword + "&&issearched=1&&page=1")
        .then((res) => {
          sessionStorage.setItem(
            "searchresult",
            JSON.stringify(res.data.result.data)
          );
          sessionStorage.setItem(
            "pagecount",
            JSON.stringify(res.data.result.last_page)
          );
          searching();
        });
    }
  }, [Search, keyword]);
  const ShowSearch = () => {
    api
      .APIPost("hint?search=" + keyword + "&&issearched=1&&page=1")
      .then((res) => {
        sessionStorage.setItem(
          "searchresult",
          JSON.stringify(res.data.result.data)
        );
        sessionStorage.setItem(
          "pagecount",
          JSON.stringify(res.data.result.last_page)
        );
        searching();
      });
  };
  const displayHint = () => {
    if (Hint != 0) {
      return Hint.map((data) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              width: "350px",
              border: "1px solid black",
              alignItems: "center",
              padding: "2px",
            }}
          >
            <Link to={"../details?idpro=" + data.product_id}>{data.name}</Link>
          </div>
        );
      });
    }
  };
  return (
    <>
      <Measure
        bounds
        onResize={(contentRect) => {
          setWidthNav({ width: contentRect.bounds.width });
        }}
      >
        {({ measureRef }) => (
          <>
            <nav
              ref={measureRef}
              style={style}
              className="navbar navbar-expand-lg "
            >
              <Container className="container-fluid">
                <LogoImage className="navbar-brand" src={Logo2} />
                {widthNav.width < 1000 ? (
                  <>
                    <div
                      style={{
                        color: "white",
                        position: "absolute",
                        left: "8.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <i
                        style={{ cursor: "grab" }}
                        onClick={showSidebar}
                        class="fas fa-bars"
                      ></i>
                      <MenuBar>
                        <nav
                          className={sidebar ? "nav-menu active" : "nav-menu"}
                        >
                          <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                              <LogoImage className="navbar-brand" src={Logo2} />
                            </li>
                            <li className="navbar-toggle">
                              <Link to="/" className="menu-bars">
                                Home
                              </Link>
                            </li>
                            <li className="navbar-toggle">
                              <Link to="/shop" className="menu-bars">
                                Shop
                              </Link>
                            </li>
                            <li className="navbar-toggle">
                              <Link to="/category" className="menu-bars">
                                Category
                              </Link>
                            </li>
                            <li className="navbar-toggle">
                              <Link to="/cart" className="menu-bars">
                                Cart
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </MenuBar>
                    </div>

                    <div className="d-flex">
                      <span className="nav-item me-2">
                        {window.sessionStorage.getItem("loginid") !== null &&
                        window.sessionStorage.getItem("loginid") !== "null" ? (
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to=""
                          >
                            {window.sessionStorage.getItem("loginname")}
                          </Link>
                        ) : (
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/login"
                          >
                            Login
                          </Link>
                        )}
                      </span>
                      {window.sessionStorage.getItem("loginid") != null &&
                      window.sessionStorage.getItem("loginid") != "null" ? (
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/logout"
                        >
                          Logout
                        </Link>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <Link class="nav-link text-light" to="/">
                            Home
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link text-light" to="/cart">
                            Category
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link text-light" to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link text-light" to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link text-light" to="/cart">
                            Wishlist
                          </Link>
                        </li>
                        <li class="nav-item">
                          <div class="input-group mb-3">
                            <input
                              id="inputSearch"
                              onChange={(e) => setSearch(e.target.value)}
                              type="search"
                              class="form-control  "
                              placeholder="Search"
                              aria-label="Search"
                              style={{
                                paddingLeft: "20px",
                                width: "350px",
                                marginLeft: "20px",
                              }}
                            />
                            <span class="input-group-text" id="basic-addon2">
                              <Link
                                style={{ textDecoration: "none" }}
                                onClick={ShowSearch}
                                to={"/shop?keyword=" + Search}
                              >
                                Search
                              </Link>
                            </span>
                          </div>

                          <div
                            style={{
                              marginLeft: "1.2rem",
                              position: "absolute",
                              color: "black",
                              zIndex: "1",
                              marginTop: "-16px",
                            }}
                          >
                            {displayHint()}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex">
                      <span className="nav-item me-5">
                        {window.sessionStorage.getItem("loginid") !== null &&
                        window.sessionStorage.getItem("loginid") !== "null" ? (
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/profile"
                          >
                            {window.sessionStorage.getItem("loginname")}
                          </Link>
                        ) : (
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/login"
                          >
                            Login
                          </Link>
                        )}
                      </span>
                      {window.sessionStorage.getItem("loginid") != null &&
                      window.sessionStorage.getItem("loginid") != "null" ? (
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/logout"
                        >
                          Logout
                        </Link>
                      ) : null}
                    </div>
                  </>
                )}
              </Container>
            </nav>
          </>
        )}
      </Measure>
    </>
  );
}
