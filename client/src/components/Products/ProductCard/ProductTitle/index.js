import React from "react";
import styled from "styled-components";
//


const ProductTitle = ({ title, label }) => {
    console.log(title, label);
    return (
        <TitleContainer>
            <h2>{label} - {title}</h2>
        </TitleContainer>
    );
};

const TitleContainer = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    height: 50px;

    h2 {
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: black;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;  
    }

`;


export default ProductTitle;