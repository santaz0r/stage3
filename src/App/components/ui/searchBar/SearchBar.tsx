import React, { useEffect } from 'react';

type TProps = { sortBy: string; setSortBy: (value: string) => void };

function SearchBar({ sortBy, setSortBy }: TProps) {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('rssSearch', sortBy);
    };
  }, [sortBy]);

  return (
    <input
      onChange={searchHandler}
      defaultValue={sortBy}
      placeholder="Search..."
      type="search"
      name="search"
      data-testid="search-input"
    />
  );
}

export default SearchBar;
