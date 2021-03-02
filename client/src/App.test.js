import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
const reactRouterDom = require("react-router-dom")
import App from './App';


test('app page renders loading on route /', async () => {
    reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>
    const { getByTestId, debug } = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    const loadingMessage = screen.getByText(/loading products/i);
    expect(loadingMessage).toBeInTheDocument();
});


test('app page renders loading on route /products ', () => {
    reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>
    const { getByTestId, debug } = render(
        <MemoryRouter initialEntries={['/products/testid']}>
            <App />
        </MemoryRouter>
    );
    const loadingMessage = screen.getByText(/loading product/i);
    expect(loadingMessage).toBeInTheDocument();
});