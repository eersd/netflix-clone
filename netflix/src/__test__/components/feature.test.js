import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature/>', () => {
  it('renders <Feature/> with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
      </Feature>
    );
    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel at any time')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
