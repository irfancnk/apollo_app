import React from "react";
import { useQuery } from "@apollo/client";
//
import { LOAD_PRODUCTS } from "../../graphql/Queries";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import ProductList from "../../components/Products/ProductList";


const Products = () => {
    const { loading, error, data } = useQuery(LOAD_PRODUCTS);
    if (loading) return <LoadingComponent />;
    if (error) return <ErrorComponent message="An error occured while loading the products" />;

    return (
        <div>
            {data.products && <ProductList products={data.products} />}
        </div>
    );

};

export default Products;
