import React from "react";
import styled from "styled-components";
//
import DeliveryImg from "../../../../assets/delivery.png";
import shipmentInformation from "../../../../constants/EnumShipment";

const ShipmentTag = ({ shipment }) => {
    return (
        <Wrapper>
            {shipmentInformation[shipment].image && <Img data-testid="shipmentimage" src={DeliveryImg} alt={shipmentInformation[shipment].text}></Img>}
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

