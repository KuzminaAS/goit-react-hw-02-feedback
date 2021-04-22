import { render } from '@testing-library/react';
import React from 'react';
import Section from './Section';

describe('Section', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Section {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Section')).toBeTruthy();
    });
});
