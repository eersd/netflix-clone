import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('Homepage', () => {
  it('description ', () => {
    const { getByText, getAllByPlaceholderText, getAllByText } = render(<Home />);
    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy();
    expect(getAllByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
    expect(getAllByText('Try 30 Days Free')).toBeTruthy();
  });
});
