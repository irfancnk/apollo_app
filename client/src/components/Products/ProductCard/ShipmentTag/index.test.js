import { render, screen } from '@testing-library/react';
import ShipmentTag from './index';

test('renders main app', () => {
    render(<ShipmentTag shipment={"0"} />);
    const linkElement = screen.getByText(/kargo/i);
    expect(linkElement).toBeInTheDocument();
});
