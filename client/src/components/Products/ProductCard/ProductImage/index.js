import React, { useState } from 'react';
import styled from "styled-components";
//
import PlaceholderImg from "../../../../assets/placeholder.png";

const ProductImage = ({ images, title }) => {
    const [favourite, setFavourite] = useState(false);

    const favouriteCallback = (e) => {
        e.preventDefault();
        setFavourite(prevFavourite => !prevFavourite);
    }

    return (
        <ImageContainer>
            <button className="favourite" onClick={favouriteCallback}>
                <svg className={favourite ? 'filter-red' : 'filter-white'} width="18" height="18" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
            </button>
            <Img className="center" src={images.large.url || PlaceholderImg} alt={title} />
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    text-align: center;
    padding: 0.5rem;

    button {
        position: absolute;
        top: 0%;
        left: 85%;
        width: 2rem;
        height: 2rem;
        font-size: 16px;
        cursor: pointer;
        border-radius: 20px;
        transition: 0.3s;
        padding-top: 3px;
        border: none;
        outline:none;
    }


    .filter-red {
        filter: invert(31%) sepia(58%) saturate(2078%) hue-rotate(330deg) brightness(107%) contrast(86%);
    }
    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(297deg) brightness(103%) contrast(102%);
    }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
`;


export default ProductImage;

