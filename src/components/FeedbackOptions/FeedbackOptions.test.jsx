import { render } from '@testing-library/react';
import React from 'react';
import FeedbackOptions from './FeedbackOptions';

describe('FeedbackOptions', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<FeedbackOptions {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FeedbackOptions')).toBeTruthy();
    });
});
