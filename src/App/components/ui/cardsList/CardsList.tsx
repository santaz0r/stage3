import { useState } from 'react';
import data from '../../../../data/data.json';
import CardItem from '../card/Card';
import styles from './CardsList.module.scss';
import SearchBar from '../searchBar/SearchBar';

function CardsList() {
  const [items] = useState(data);
  const [sortBy, setSortBy] = useState(localStorage.getItem('rssSearch') || '');

  const handleSearch = (value: string) => {
    setSortBy(value);
  };

  const filteredArr = items.filter((product) => {
    if (
      (
        product.title +
        product.category +
        product.description +
        product.brand +
        product.price +
        product.discountPercentage +
        product.stock +
        product.rating
      )
        .toLowerCase()
        .includes(sortBy.toLowerCase().trim())
    ) {
      return true;
    }
    return false;
  });

  return (
    <div data-testid="cards-list">
      <SearchBar setSortBy={handleSearch} sortBy={sortBy} />
      <div className={styles.cards__wrapper}>
        {filteredArr.map((i) => (
          <CardItem key={i.id} data={i} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
