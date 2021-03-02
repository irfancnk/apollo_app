import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//
import ProductCard from "../Products/ProductCard";

/**
 * Shows different labels and image of product. Planned to be more detailed than 
 * default card view
 * @param {Object} param0 Product object that is received from GraphQL query
 */
const ProductComponent = ({ product }) => {
    const history = useHistory();
    
    return (
        <Container data-testid="productcomponent">
            <Wrapper>
                <BackButton onClick={() => history.push("/")} data-testid="backbutton">Go Back</BackButton>
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
  font-weight: 400;
  margin: 1rem;
  background: #0d62ff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline:none;
  &:hover {
    opacity: 0.75;
  }


`;

export default ProductComponent;



