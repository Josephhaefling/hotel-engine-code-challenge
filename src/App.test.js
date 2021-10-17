import React from 'react';

//packages
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  it('Should change the language text color on click', () => {
    const { getByText } = app;
    const languageButton = getByText('Language');
    expect(languageButton).toHaveStyle('color: rgb(73, 81, 111)');
  });

  it('Should render the language input if the language button is clicked', () => {
    const { getByText } = app;
    const languageButton = getByText('Language');
    fireEvent.click(languageButton);
    const languageInput = getByText('Search by language');
    expect(languageInput).toBeInTheDocument();
  });

  it('Should change the language button color', () => {
    const { getByText } = app;
    const starsButton = getByText('Stars');
    expect(starsButton).toHaveStyle('color: rgb(73, 81, 111)');
  });

  it('Should return results when a search is compelte', () => {
    
  });

})