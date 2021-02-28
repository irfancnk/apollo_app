import React from "react";
import styled from "styled-components";
// 
import ErrorGif from "../../assets/error.gif";

const ErrorComponent = ({ message }) => {
    return (
        <Container>
            <img src={ErrorGif} alt="Error occured" />
            <h1>{message}</h1>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    padding: 1rem;
    text-align: center;
    font-weight: 500;
  }

  img {
    width: 30%;
    min-width: 250px;
  }
`;

export default ErrorComponent;