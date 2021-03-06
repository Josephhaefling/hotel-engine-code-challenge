import React from 'react';

//packages
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//components
import LandingPage from './landing-page.component';

describe('Landing Page', () => {
  let landingPage;

  beforeEach(() => {
    landingPage = render(
      <BrowserRouter>
        <LandingPage params={{}} />
      </BrowserRouter>
    )
  });

  it('Should render the landing page', () => {
    const { getByText } = landingPage;
    const heading = getByText('Welcome to Git Search');
    expect(heading).toBeInTheDocument()
  });

  it('Should render the subheader', () => {
    const { getByText } = landingPage;
    const subHeading = getByText('What are you looking for today?');
    expect(subHeading).toBeInTheDocument()
  });

  it('Should render the language button', () => {
    const { getByText } = landingPage;
    const languageButton = getByText('Language');
    expect(languageButton).toBeInTheDocument()
  });

  it('Should render the stars button', () => {
    const { getByText } = landingPage;
    const starsButton = getByText('Stars');
    expect(starsButton).toBeInTheDocument()
  });

  it('Should render the search button', () => {
    const { getByText } = landingPage;
    const searchButton = getByText('Search');
    expect(searchButton).toBeInTheDocument()
  });

  it('Should render the clear search button', () => {
    const { getByText } = landingPage;
    const clearSearchButton = getByText('Clear Search');
    expect(clearSearchButton).toBeInTheDocument()
  });
});
