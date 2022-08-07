import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 76%;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    padding-top: 20px;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }
`;
export const Content = styled.div`
  padding-top: 20px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 4rem;
`;
