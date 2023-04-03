import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('Render', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Home page');
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
  });
});
