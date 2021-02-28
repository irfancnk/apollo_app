import React from "react";
import styled from "styled-components";
//
import DeliveryImg from "../../../../assets/delivery.png";


const shipmentInformation = {
    "0": {
        "text": "Ücretsiz – Aynı Gün Kargo",
        "image": true
    },
    "1": {
        "text": "Ücretsiz Kargo",
        "image": true
    },
    "2": {
        "text": "",
        "image": false
    }
}

const ShipmentTag = ({ shipment }) => {

    return (
        <Wrapper>
            {shipmentInformation[shipment].image && <Img src={DeliveryImg} alt={shipmentInformation[shipment].text} style={{height: "0.9rem"}}></Img>}
            <Span>
                {shipmentInformation[shipment].text}
            </Span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 400;
    padding-left: 0.5rem;
`;

const Span = styled.span`
    padding-left: 0.5rem;
`;

const Img = styled.img`
    height: 0.9rem;
`;


export default ShipmentTag;

