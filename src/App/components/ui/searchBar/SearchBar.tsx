import React, { useRef } from 'react';
import styles from './SearchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { changeSearch, getSearch } from '../../../store/search';

function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const search = useAppSelector(getSearch());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeSearch(searchRef.current?.value || ''));
  };

  return (
    <form className={styles.search__form} onSubmit={handleSubmit}>
      <input
        ref={searchRef}
        defaultValue={search}
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
