import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ProductCard from './index';
import renderWithRouter from '../../../setupTests';

const product = {
    "id": "537f3aaac769230000be7e60",
    "title": "Diablo III - PC",
    "label": "Blizzard Entertainment",
    "price": 3999,
    "currency": "TRY",
    "shipment": "1",
    "images": {
        "large": {
            "url": "http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL.jpg"
        }
    }
};

test('product card renders subcomponents correctly', () => {
    const { history, getByTestId } = renderWithRouter(<ProductCard product={product} />)
    const priceText = getByTestId('pricetag')
    const favButton = getByTestId('favbutton');
    const productTitle = getByTestId('producttitle');
    const shipmentImage = getByTestId('shipmentimage');
    expect(favButton).toBeInTheDocument();
    expect(priceText).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
    expect(shipmentImage).toBeInTheDocument();
});

test('product card redirects to product correctly', () => {
    const { history, getByTestId } = renderWithRouter(<ProductCard product={product} />)
    const linkContainer = getByTestId('linkcontainer');
    userEvent.click(linkContainer);
    expect(history.location.pathname).toEqual(`/products/${product.id}`)
});

