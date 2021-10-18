import React from 'react';

//packages
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//components
import DetailsPage from './details-page.component';

describe('Landing Page', () => {
  let detailsPage;
  const result = {
    description: 'test description',
    language: 'javascript',
    name: 'Test Repo',
    owner: {login: 'Joe'},
    stargazers_count: 10
  }
  
  beforeEach(() => {
    detailsPage = render(
      <BrowserRouter>
        <DetailsPage result={result} />
      </BrowserRouter>
    )
  })

  it('Should render the details page heading', () => {
    const { getByText } = detailsPage;
    const heading = getByText('Test Repo');
    expect(heading).toBeInTheDocument()
  });

  it('Should render the details page owner', () => {
    const { getByText } = detailsPage;
    const owner = getByText('Owner: Joe');
    expect(owner).toBeInTheDocument()
  });

  it('Should render the details page description', () => {
    const { getByText } = detailsPage;
    const description = getByText('test description');
    expect(description).toBeInTheDocument()
  });

  it('Should render the details page language', () => {
    const { getByText } = detailsPage;
    const language = getByText('javascript');
    expect(language).toBeInTheDocument()
  });

  it('Should render the details page stars', () => {
    const { getByText } = detailsPage;
    const stars = getByText('Stars: 10');
    expect(stars).toBeInTheDocument()
  });
});