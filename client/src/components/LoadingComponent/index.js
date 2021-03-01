import React from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";
//
const LoadingComponent = () => {
    return (
        <Container data-testid="loadingcomponent">
            <HashLoader color="#0d62ff" size="75px" />
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingComponent;
