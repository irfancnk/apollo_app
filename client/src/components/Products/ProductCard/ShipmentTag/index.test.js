import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShipmentTag from './index';

test('free shipment image rendered correctly', () => {
    const { getByTestId } = render(<ShipmentTag shipment={"0"} />);
    const shipmentImage = getByTestId('shipmentimage');
    expect(shipmentImage).toBeInTheDocument();
});

test('paid shipment image not rendered', () => {
    const shipmentImage = screen.queryAllByTestId('shipmentimage');
    expect(shipmentImage).toHaveLength(0); // it doesn't exist
});