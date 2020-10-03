import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profile/>', () => {
  it('renders <Profile/> with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}} data-testid="user-profile">
            <Profiles.Picture src="/images/test.png" />
            <Profiles.Name>Test User</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByText('Test User')).toBeTruthy();
    expect(getByTestId('user-profile')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders <Profile/> but with misc profile image', () => {
    const { container, getByTestId, getByText } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}} data-testid="user-profile-misc">
            <Profiles.Picture />
            <Profiles.Name>Test User</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByText('Test User')).toBeTruthy();
    expect(getByTestId('user-profile-misc')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
