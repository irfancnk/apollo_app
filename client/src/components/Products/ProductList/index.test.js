import { render, screen } from '@testing-library/react';
import ProductList from './index';

test('renders main app', () => {
    render(<ProductList />);
    const linkElement = screen.getByText(/kargo/i);
    expect(linkElement).toBeInTheDocument();
});
