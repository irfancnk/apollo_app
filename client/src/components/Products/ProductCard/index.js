import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//
import PlaceholderImg from "../../../assets/placeholder.png";
import ProductTitle from "./ProductTitle";
import PriceTag from "./PriceTag";
import ShipmentTag from "./ShipmentTag";

const ProductCard = ({ product }) => {
    const { id, title, images, shipment, currency, price, label } = product;
    return (
        <Container to={`/products/${id}`}>
            <Wrapper>
                <ImageContainer>
                    <Img className="center" src={images.large.url || PlaceholderImg} alt={title} />
                </ImageContainer>
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
    transform: scale(0.995);
    transition: 0.3s;
  }

  h1 {
    font-size: 1.1rem;
    margin: 0.7rem 0;
    padding-left: 1rem;
    background-color: #f8f8f8;
    line-height: 50px;
    border-radius: 10px;
    color: black;
  }

  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: #7e7c7b;
    margin: 0.5rem 0;
  }

`;

const Wrapper = styled.div`
  padding: 1rem;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    text-align: center;
    padding: 0.5rem;
`;



const Img = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
`;

export default ProductCard;
