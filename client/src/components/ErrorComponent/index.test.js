import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorComponent from './index';

test('error component rendered correctly', () => {
    const { getByTestId } = render(<ErrorComponent />);
    const errorpage = getByTestId('errorcomponent');
    expect(errorpage).toBeInTheDocument();
});