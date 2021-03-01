import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingComponent from './index';

test('loading page rendered correctly', () => {
    const { getByTestId } = render(<LoadingComponent />);
    const hashLoader = getByTestId('loadingcomponent');
    expect(hashLoader).toBeInTheDocument();
});