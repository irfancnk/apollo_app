import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
const reactRouterDom = require("react-router-dom")
import App from './App';


test('app page renders correctly on main route /', () => {
    reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>
    const { getByTestId, debug } = render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    let impressumPage = getByTestId("loadingcomponent")
    expect(impressumPage).toBeInTheDocument()
});


test('app page renders correctly on product route /', () => {
    reactRouterDom.BrowserRouter = ({ children }) => <div>{children}</div>
    const { getByTestId, debug } = render(
        <MemoryRouter initialEntries={['/products/123']}>
            <App />
        </MemoryRouter>
    );
    let impressumPage = getByTestId("loadingcomponent")
    expect(impressumPage).toBeInTheDocument()
});