import React from 'react';
import { render } from '@testing-library/react';
import { OptForm } from '../../components';
import { Item } from '../../components/card/styles/card';

describe('<OptForm/>', () => {
  it('renders <OptForm/> using populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Break />
        <OptForm.Button>Try 30 Days Free</OptForm.Button>
      </OptForm>
    );

    expect(getByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
    expect(getByText('Try 30 Days Free')).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
