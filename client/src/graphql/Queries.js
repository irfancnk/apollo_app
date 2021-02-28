import { gql } from "@apollo/client";
//

export const LOAD_PRODUCTS = gql`
    query Products {
        products {
            id
            title
            label
            price
            currency
            shipment
            images {
                large {url}
            }
        }
    }
`;

export const LOAD_PRODUCT = gql`
    query Product($id: ID!) {
        product(id: $id) {
            id
            title
            label
            price
            currency
            description
            images {
                large {
                    url
                }
            }
            shipment
        }
    }
`;
