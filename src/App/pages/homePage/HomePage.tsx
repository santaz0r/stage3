import { useEffect, useState } from 'react';
import CardsList from '../../components/ui/cardsList/CardsList';
import characterService from '../../services/CharacterService';
import { TCharacters } from '../../types/types';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import axios from 'axios';

import styles from './HomePage.module.scss';

function HomePage() {
  const [characters, setCharacters] = useState<TCharacters['results'] | null>(null);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(localStorage.getItem('rssSearch') || '');

  const handleSearch = (value: string) => {
    setSortBy(value);
  };

  const getCharacters = async (value = '') => {
    setIsLoading(true);
    try {
      setError('');
      const dataCharacters = await characterService.get(value);
      setCharacters(dataCharacters);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message: string = error.response?.data.error;
        setError(message);
      }
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getCharacters(localStorage.getItem('rssSearch') || '');
  }, []);

  if (isLoading) {
    return <div className={styles.spinner}>Loading</div>;
  }
  return (
    <>
      <h2>Home page</h2>
      <SearchBar setSortBy={handleSearch} sortBy={sortBy} getData={getCharacters} />
      {!error ? characters && <CardsList data={characters} /> : <h1>{error}</h1>}
    </>
  );
}

export default HomePage;
