import React, { useEffect } from 'react';
import styles from './SearchBar.module.scss';

type TProps = { sortBy: string; setSortBy: (value: string) => void; getData: (value?: string) => Promise<void> };

function SearchBar({ sortBy, setSortBy, getData }: TProps) {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData(sortBy);
    console.log('submit', sortBy);
  };

  useEffect(() => () => {
    localStorage.setItem('rssSearch', sortBy);
  });

  return (
    <form className={styles.search__form} onSubmit={handleSubmit}>
      <input
        onChange={searchHandler}
        defaultValue={sortBy}
        placeholder="Search..."
        type="search"
        name="search"
        data-testid="search-input"
      />
      <button className={styles.search__btn} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
