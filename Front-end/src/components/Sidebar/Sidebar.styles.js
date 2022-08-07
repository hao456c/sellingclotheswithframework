import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 45px;
  margin-bottom: 100px;
`;
export const Content = styled.div`
  h1 {
    font-size: 25px;
    font-weight: bold;
  }
`;
export const SidebarNav = styled.nav`
  background: #f1f1f1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: 350ms;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  .category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      background: #252831;
      border-left: 4px solid #632ce4;
      cursor: pointer;
    }
  }
`;
