import { useGetCharactersQuery } from '../../store';
import CardsList from '../../components/ui/cardsList/CardsList';
import SearchBar from '../../components/ui/searchBar/SearchBar';
import styles from './HomePage.module.scss';
import { useAppSelector } from '../../../hooks';
import { getSearch } from '../../store';

function HomePage() {
  const search = useAppSelector(getSearch());

  const { data = [], isFetching, isError } = useGetCharactersQuery(search);

  if (isFetching) {
    return (
      <div data-testid="spinner" className={styles.spinner}>
        Loading
      </div>
    );
  }
  return (
    <>
      <h2>Home page</h2>
      <SearchBar />
      {!isError ? data && <CardsList data={data.results} /> : <h1 data-testid="error">There is nothing here</h1>}
    </>
  );
}

export default HomePage;
