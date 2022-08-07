import React from "react";
import { useLocation, Link } from "react-router-dom";
//Components
import Header from "./Header/Header";
import HeroImage from "./HeroImage/HeroImage";
import GridLayout from "./GridLayout/GridLayout";
import Items from "./Items/Items";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import Pagination from "./Pagination/Pagination";

//DUMMY DATA
import sale from "../images/sale.jpg";
import mod1 from "../images/mod1.jpg";
import mod2 from "../images/mod2.jpg";
import mod3 from "../images/mod3.jpg";
import mod4 from "../images/mod4.jpg";
import { DATA } from "./DUMMY_DATA";
//Styles
import "../../src/style.css";
//slide
const image = [
  { a: mod3, bg: "black" },
  { a: mod4, bg: "#d2b052" },
  { a: mod2, bg: "black" },
  { a: mod1, bg: "#d2b052" },
];
export default function Home() {
  document.title = "Home";

  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("keyword");
  const Searching = () => {};
  return (
    <>
      <Header
        style={{
          background: "none",
          position: "absolute",
          zIndex: 9999,
          width: "100%",
        }}
        keyword={keyword}
        searching={Searching}
      />
      <HeroImage image={image} />
      <Banner image={sale} />
      <GridLayout header="New items">
        {DATA.slice(0, 4).map((item) => {
          console.log(item.id);
          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              dis={item.dis}
              classi={item.class}
            />
          );
        })}
      </GridLayout>
      <Pagination arrItems={DATA} itemPerPage={4} header={"Popular items"} />
      <Footer />
    </>
  );
}
