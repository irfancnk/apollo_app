import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductTitle from './index';

test('product title rendered correctly', () => {
    const { getByTestId } = render(<ProductTitle title={"Company"} label={"Title"} />);
    const productTitle = getByTestId('producttitle');
    expect(productTitle).toHaveTextContent('Title - Company');
});