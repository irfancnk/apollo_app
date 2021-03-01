import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductImage from './index';
import userEvent from '@testing-library/user-event';

const imageObj = {
    large: { url: "http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL.jpg" }
};

test('favourite button rendered correctly', () => {
    const { getByTestId } = render(<ProductImage images={imageObj} title={"Diablo III - PC"} />);
    const favButton = getByTestId('favbutton');
    expect(favButton).toBeInTheDocument();
});

test('product image rendered correctly', () => {
    const { getByTestId } = render(<ProductImage images={imageObj} title={"Diablo III - PC"} />);
    const productImage = getByTestId('productimage');
    expect(productImage).toBeInTheDocument();
});

test('favourite toggle works properly', () => {
    const { getByTestId } = render(<ProductImage images={imageObj} title={"Diablo III - PC"} />);
    const favButton = getByTestId('favbutton');
    const favicon = getByTestId('favicon');
    expect(favicon.classList.contains('filter-white')).toBe(true);
    userEvent.click(favButton);
    expect(favicon.classList.contains('filter-red')).toBe(true);
});

