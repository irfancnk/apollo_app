import React from "react";
import styled from "styled-components";
//
import ProductCard from "../ProductCard";

/**
 * Show cards of the received products
 * @param {Array} param0 Products list that is received from GraphQL query
 */
const ProductList = ({ products }) => {
    return (
        <Container data-testid="productlist">
            <h2>Found {products.length} products.</h2>
            <CardWrapper>
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CardWrapper>
        </Container>
    );
};

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
`;

const CardWrapper = styled.div`
  margin: 50px 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  row-gap: 30px;
  justify-items: center;
`;

export default ProductList;
