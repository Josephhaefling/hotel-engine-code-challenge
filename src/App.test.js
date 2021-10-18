import React from 'react';

//packages
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
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

  it('Should return results when a search is compelte', async() => {
    const { getAllByTestId, getByTestId, getByText } = app;
    const topicInput = getByTestId('topic-input');
    const searchButton = getByText('Search');
    fireEvent.change(topicInput, {target: {value: 'dynavox'}});
    fireEvent.click(searchButton);
    await waitFor(() => {
      const results = getAllByTestId('result');      
      expect(results.length).toEqual(7);
    })
  });

  it.skip('Should filter results by language', async() => {
    const { getAllByTestId, getByTestId, getByText } = app;
    const topicInput = getByTestId('topic-input');
    const searchButton = getByText('Search');
    const languageTag = getByText('Language');

    fireEvent.click(languageTag);
    fireEvent.change(topicInput, {target: {value: 'dynavox'}});

    const languageInput = getByTestId('language-input');
    
    fireEvent.change(languageInput, {target: {value: 'javascript'}});
    fireEvent.click(searchButton);

    await waitFor(() => {
      const results = getAllByTestId('result');
      expect(results.length).toEqual(1);
    })
  });

  it('Should display the details page', async() => {
    const { getByTestId, getByText } = app;
    const topicInput = getByTestId('topic-input');
    const searchButton = getByText('Search');
    fireEvent.change(topicInput, {target: {value: 'dynavox'}});
    fireEvent.click(searchButton);
    
    await waitFor(() => {
      const firstResult = getByText('FE-dynavox');
      fireEvent.click(firstResult);
    });

    await waitFor(() => {
      const owner = getByText('Owner: GiftOfGab1');
      expect(owner).toBeInTheDocument();
    });
  });
})