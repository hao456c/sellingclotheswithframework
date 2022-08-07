import React, { useState } from "react";
import ReactPaginate from "react-paginate";

//Components

//Styles
import { Wrapper } from "./PaginationL.style";
export default function PaginationL({ pagecount, pagechange, currentPage }) {
  return (
    <Wrapper className="d-flex justify-content-center">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pagecount}
        onPageChange={pagechange}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-link"}
        nextClassName={"page-link"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </Wrapper>
  );
}
