import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 20px;
`;
export const Content = styled.div`
  margin-bottom: 20px;
  .col-sm-8 {
    margin-left: 40px;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .fa-star {
    padding-right: 20px;
  }
  .fa-reply,
  .fa-trash-alt {
    margin-right: 10px;
  }
  .action {
    cursor: grab;
  }
`;
