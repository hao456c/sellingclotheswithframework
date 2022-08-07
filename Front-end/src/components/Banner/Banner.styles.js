import styled from "styled-components";

export const Wrapper = styled.div`
  background: url(${({ image }) => image});

  background-size: 100%, cover;
  background-position: center;
  height: 200px;
  width: 90%;
  margin: 0 auto;
  margin-top: -50px;
  padding: 0;
  position: relative;
  animation: animationHeroImage 1s;
  @keyframes animationHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
