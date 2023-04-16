// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('SearchBar component', () => {
  it('Render List', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
  it('typing', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.queryByDisplayValue('smth')).toBeNull();
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'test' },
    });
    expect(screen.queryByDisplayValue(/test/)).toBeInTheDocument();
  });
});
