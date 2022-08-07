import styled from "styled-components";
export const Wrapper = styled.div`
  border: 1px solid gray;
  position: relative;
  h1 {
    font-size: 20px;
  }

  .right {
    text-align: right;
  }
  @media screen and (max-width: 980px) {
    max-width: 420px;
  }
`;
export const Image = styled.img`
  height: 330px;
  width: 100%;
  max-width: 420px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  position: relative;
  :hover {
    transform: scale(1.05);
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
