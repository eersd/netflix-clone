import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components';

jest.mock('react-router-dom');

describe('<Header/>', () => {
  it('renders the basic <Header/>  with a background ', () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.TextLink active="true"> Hello I am a Link</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText('Hello I am a Link')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the basic <Header/>  without a background ', () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" />
          <Header.TextLink active="true"> Hello I am a Link</Header.TextLink>
          <Header.ButtonLink>Sign In</Header.ButtonLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText('Hello I am a Link')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the full <Header/> with a background', () => {
    const { container, getByText, getByTestId } = render(
      <Header src="dark" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src="/images/logo.svg" alt="Netflix" />
            <Header.TextLink active={false} onClick={() => {}}>
              Series
            </Header.TextLink>
            <Header.TextLink active onClick={() => {}}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/test.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/test.png" />
                  <Header.TextLink>Test User</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Dark Now</Header.FeatureCallOut>
          <Header.Text>
            A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that
            spans three generations.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), { target: { value: 'Simpsons' } });
    fireEvent.click(getByTestId('search-click'));
    expect(getByText('Series')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Test User')).toBeTruthy();
    expect(getByText('Sign out')).toBeTruthy();
    expect(getByText('Watch Dark Now')).toBeTruthy();
    expect(
      getByText(
        'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.'
      )
    ).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
