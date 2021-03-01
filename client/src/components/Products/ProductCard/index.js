import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//
import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import PriceTag from "./PriceTag";
import ShipmentTag from "./ShipmentTag";

const ProductCard = ({ product }) => {
    const { id, title, images, shipment, currency, price, label } = product;
    return (
        <Container to={`/products/${id}`} data-testid="linkcontainer">
            <Wrapper>
                <ProductImage images={images} title={title} />
                <ProductTitle title={title} label={label} />
                <PriceTag price={price} currency={currency} />
                <ShipmentTag shipment={shipment} />
            </Wrapper>
        </Container>
    );
};


const Container = styled(Link)`
  text-decoration: none;
  background: #fff;
  border-radius: 0.5rem;
  border: 2px solid #f8f8f8;
  width: 100%;

  &:hover {
    border: 2px solid gray;
    transition: 0.5s;
  }
`;

const Wrapper = styled.div`
  padding: 1rem;
`;


export default ProductCard;
