import React from "react";
import styled from "styled-components";
//

const PriceTag = ({ price, currency }) => {
    return (
        <H1 data-testid="pricetag">
            {price.toLocaleString('us-US', { style: 'currency', currency: currency })}
        </H1>
    );
};


const H1 = styled.h1`
    font-size: 1.1rem;
    margin: 0.7rem 0;
    padding-left: 1rem;
    background-color: #f8f8f8;
    line-height: 50px;
    border-radius: 10px;
    color: black;
`;


export default PriceTag;
