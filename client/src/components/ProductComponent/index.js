import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//
import ProductCard from "../Products/ProductCard";

const ProductComponent = ({ product }) => {
    const history = useHistory();
    
    return (
        <Container>
            <Wrapper>
                <BackButton onClick={() => history.push("/")}>Go Back</BackButton>
                <ProductCard key={product.id} product={product} />
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BackButton = styled.button`
  margin: 1rem;
  background: #dddddc;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline:none;
`;

export default ProductComponent;
