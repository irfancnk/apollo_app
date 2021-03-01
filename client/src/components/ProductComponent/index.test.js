import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ProductComponent from './index';
import renderWithRouter from '../../setupTests';

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



test('product component renders subcomponents correctly', () => {
    const { history, getByTestId } = renderWithRouter(<ProductComponent product={product} />)
    const priceText = getByTestId('pricetag')
    const favButton = getByTestId('favbutton');
    const productTitle = getByTestId('producttitle');
    const shipmentImage = getByTestId('shipmentimage');
    const backButton = getByTestId('backbutton');
    expect(favButton).toBeInTheDocument();
    expect(priceText).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
    expect(shipmentImage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
});


test('product card redirects to main page correctly', () => {
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };
    const { history, getByTestId } = renderWithRouter(<ProductComponent product={product} />);
    const backButton = getByTestId('backbutton');
    userEvent.click(backButton);
    expect(history.location.pathname).toEqual('/')
});



