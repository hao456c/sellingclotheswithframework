import React, { useState } from "react";
import ReactPaginate from "react-paginate";

//Components
import Items from "../Items/Items";
import GridLayout from "../GridLayout/GridLayout";

//Styles
import { Wrapper, Content } from "./Pagination.styles";
export default function Pagination({ arrItems, itemPerPage, header }) {
  const [pageNumber, setPageNumber] = useState(0);
  const pageVisisted = pageNumber * itemPerPage;
  //Hiện items theo trang
  const displayItems = arrItems
    .slice(pageVisisted, pageVisisted + itemPerPage)
    .map((item) => {
      console.log(item.id);
      return (
        <Items
          image={item.image}
          name={item.name}
          price={item.price}
          sold={item.sold}
          dis={item.dis}
          classi={item.class}
        />
      );
    });
  const pageCount = Math.ceil(arrItems.length / itemPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <GridLayout header={header}>{displayItems}</GridLayout>
      <br />
      <Wrapper className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
          activeClassName={"active"}
        />
      </Wrapper>
    </>
  );
}
