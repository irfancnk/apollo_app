import React from "react";
//

const PriceTag = ({ price, currency }) => {
    return (
        <h1>
            {price.toLocaleString('us-US', { style: 'currency', currency: currency })}
        </h1>
    );
};


export default PriceTag;
