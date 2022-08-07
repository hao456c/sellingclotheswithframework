import styled from "styled-components";

export const Circle = styled.div`
  border: 5px solid grey;
  border-top: 5px solid lightgray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Wrapper = styled.div``;
