import { render } from '@testing-library/react';
import React from 'react';
import Statistics from './Statistics';

describe('Statistics', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Statistics {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Statistics')).toBeTruthy();
    });
});
