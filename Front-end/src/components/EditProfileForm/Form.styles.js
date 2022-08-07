import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 80px;

  h2 {
    font-weight: 200;
    font-size: 1rem;
  }
  input {
    height: 3rem;
    font-size: 1.2rem;
  }
  p {
    padding-top: 10px;
  }

  input[type="submit"] {
    width: 50%;
    margin-top: 30px;
    border-radius: 20px;
  }
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #form {
    margin: 0 auto;
    width: 100%;
  }

  .input-div {
    margin: 2rem 0;
  }

  .input-alert {
    /* background-color: red; */
    color: red;
  }
`;
