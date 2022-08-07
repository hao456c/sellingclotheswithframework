import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 80px;
  h1 {
    font-size: 3rem;
    text-align: center;
    font-weight: 800;
    margin-top: 30px;
  }
  h2 {
    font-weight: bold;
    font-size: 1rem;
  }
  input {
    height: 3rem;
    font-size: 1.2rem;
    padding: 0rem 1rem;
  }
  p {
    padding-top: 10px;
  }
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    width: 95%;
  }
  input[type="submit"] {
    width: 40%;
    margin-top: 20px;
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
    width: 90%;
    padding: 2.5rem;
  }

  .input-div {
    margin: 2rem 0;
  }

  .input-alert {
    /* background-color: red; */
    color: red;
  }
`;
