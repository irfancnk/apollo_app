import React from "react";
import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";
//

/**
 * @param {String} param0 Message that informs what is loading
 */
const LoadingComponent = ({ message }) => {
    return (
        <Container data-testid="loadingcomponent">
            <HashLoader color="#0d62ff" size="75px" />
            <h4>{message}</h4>
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
`;

export default LoadingComponent;
