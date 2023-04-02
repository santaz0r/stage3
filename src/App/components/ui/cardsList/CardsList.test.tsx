import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import CardsList from './CardsList';

describe('CardsList component', () => {
  it('Render List', () => {
    render(<CardsList />);
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getAllByTestId('card-item')).toHaveLength(12);
  });
  it('typing', () => {
    render(<CardsList />);
    expect(screen.queryByDisplayValue('smth')).toBeNull();
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'test' },
    });
    expect(screen.queryByDisplayValue(/test/)).toBeInTheDocument();
  });
});
