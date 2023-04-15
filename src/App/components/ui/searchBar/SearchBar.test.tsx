// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import { useState } from 'react';
import characterService from '../../../services/CharacterService';

const TestingSearch = () => {
  const [sortBy, setSortBy] = useState(localStorage.getItem('rssSearch') || '');
  const handleSearch = (value: string) => {
    setSortBy(value);
  };
  const getCharacters = async (value = '') => {
    await characterService.get(value);
  };

  return <SearchBar setSortBy={handleSearch} sortBy={sortBy} getData={getCharacters} />;
};

describe('SearchBar component', () => {
  it('Render List', () => {
    render(<TestingSearch />);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
  it('typing', () => {
    render(<TestingSearch />);
    expect(screen.queryByDisplayValue('smth')).toBeNull();
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'test' },
    });
    expect(screen.queryByDisplayValue(/test/)).toBeInTheDocument();
  });
});
