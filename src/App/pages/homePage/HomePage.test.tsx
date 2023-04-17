// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import data from '../../../data/data.json';
import HomePage from './HomePage';
import { useState } from 'react';
import CardsList from '../../components/ui/cardsList/CardsList';
import { Provider } from 'react-redux';
import { store } from '../../store';

const TestingComp = () => {
  const [characters] = useState(data);
  const [isLoading] = useState(false);
  const [error] = useState();

  if (isLoading) {
    return <div data-testid="spinner">Loading</div>;
  }
  return (
    <>
      <h2>Home page</h2>
      {!error ? characters && <CardsList data={characters} /> : <h1 data-testid="error">{error}</h1>}
    </>
  );
};

describe('HomePage', () => {
  it('Render without data', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
  it('Render with data', () => {
    render(<TestingComp />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/Home page/i);
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
  });
});
