import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
//
import { LOAD_PRODUCT } from "../../graphql/Queries";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import ProductComponent from "../../components/ProductComponent";


const Product = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(LOAD_PRODUCT, {
        variables: { id },
    });
    if (loading) return <LoadingComponent message="Loading product"/>;
    if (error) return <ErrorComponent message="An error occured while loading the product" />;
    return (
        <div>
            {data.product && <ProductComponent product={data.product} />}
        </div>
    );

};

export default Product;
