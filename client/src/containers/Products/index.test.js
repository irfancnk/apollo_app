import TestRenderer from 'react-test-renderer';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Products from './index';
import renderWithRouter from '../../setupTests';
import { MockedProvider } from '@apollo/client/testing';
import { LOAD_PRODUCTS } from '../../graphql/Queries';

const mocksError = [
    {
        request: {
            query: LOAD_PRODUCTS,
        },
        error: new Error('An error occurred'),
    }
];

const mocks = [
    {
        request: {
            query: LOAD_PRODUCTS,
        },
        result: {
            data: {
                products: [
                    {
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
                    },
                    {
                        "id": "537f3aaac769230000be7e61",
                        "title": "Fallout 3: Game of The Year Edition (PC)",
                        "label": "Bethesda",
                        "price": 1999,
                        "currency": "TRY",
                        "shipment": "0",
                        "images": {
                            "large": {
                                "url": "http://ecx.images-amazon.com/images/I/51Ba653B6ZL.jpg"
                            }
                        }
                    },
                    {
                        "id": "537f3aaac769230000be7e62",
                        "title": "Elder Scrolls V: Skyrim - PC",
                        "label": "Bethesda Softworks",
                        "price": 1999,
                        "currency": "TRY",
                        "shipment": "0",
                        "images": {
                            "large": {
                                "url": "http://ecx.images-amazon.com/images/I/51DeQeU7MiL.jpg"
                            }
                        }
                    }
                ]
            }
        }
    }
];

async function sleep(ms = 0) {
    await act(() => {
        return new Promise(resolve => { setTimeout(resolve, ms); });
    });
}

test('products container shows loading while request in progress', () => {
    const { getByTestId } = renderWithRouter(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Products />
        </MockedProvider>,
    );
    const loadingComponent = getByTestId('loadingcomponent');
    expect(loadingComponent).toBeInTheDocument();
});

test('products container shows product list page after request ends', async () => {
    const { getByTestId } = renderWithRouter(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Products />
        </MockedProvider>,
    );
    await sleep();
    await waitFor(() => expect(getByTestId('productlist')).toBeInTheDocument())
});

test('products container shows error component after error occured', async () => {
    const { getByTestId } = renderWithRouter(
        <MockedProvider mocks={mocksError} addTypename={false}>
            <Products />
        </MockedProvider>,
    );
    await sleep();
    await waitFor(() => expect(getByTestId('errorcomponent')).toBeInTheDocument())
});

