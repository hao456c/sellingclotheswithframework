import styled from "styled-components";
export const Wrapper = styled.div`
  background: url(${({ image }) => image});
  background-size: 100%;

  width: 100%;
  background-position: center;
  height: 700px;
`;

export const Content = styled.div`
  max-width: 1000px;
`;
