import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PriceTag from './index';
import { getByTestId } from '@testing-library/dom'
// import userEvent from '@testing-library/user-event';

test('price tag rendered correctly', () => {
    const { getByTestId } = render(<PriceTag price={"1000"} currency={"TRY"} />);
    const priceText = getByTestId('pricetag')
    expect(priceText).toHaveTextContent("1000")
});