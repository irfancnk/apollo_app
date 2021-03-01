import TestRenderer from 'react-test-renderer';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Product from './index';
import renderWithRouter from '../../setupTests';
import { MockedProvider } from '@apollo/client/testing';
import { LOAD_PRODUCT } from '../../graphql/Queries';

const mocksError = [
    {
        request: {
            query: LOAD_PRODUCT,
        },
        error: new Error('An error occurred'),
    }
];

const mocks = [
    {
        request: {
            query: LOAD_PRODUCT,
        },
        result: {
            data: {
                "product": {
                    "id": "537f3aaac769230000be7e65",
                    "title": "Crysis 3 - PC",
                    "label": "Electronic Arts",
                    "price": 5999,
                    "currency": "TRY",
                    "description": "The award-winning developer Crytek is back with Crysis 3.",
                    "images": {
                        "large": {
                            "url": "http://ecx.images-amazon.com/images/I/51N7GT9BQ%2BL.jpg"
                        }
                    },
                    "shipment": "0"
                }
            }
        }
    }
];

async function sleep(ms = 0) {
    await act(() => {
        return new Promise(resolve => { setTimeout(resolve, ms); });
    });
}

test('product container shows loading while request in progress', () => {
    const { getByTestId } = renderWithRouter(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Product />
        </MockedProvider>,
    );
    
    const loadingComponent = getByTestId('loadingcomponent');
    expect(loadingComponent).toBeInTheDocument();
});

test('product container shows product component after request ends succesfully', async () => {
    const { getByTestId } = renderWithRouter(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Product />
        </MockedProvider>,
    );
    await sleep();
    await waitFor(() => expect(getByTestId('productcomponent')).toBeInTheDocument())
});

test('product container shows error component after error occured', async () => {
    const { getByTestId } = renderWithRouter(
        <MockedProvider mocks={mocksError} addTypename={false}>
            <Product />
        </MockedProvider>,
    );
    await sleep();
    await waitFor(() => expect(getByTestId('errorcomponent')).toBeInTheDocument())
});

