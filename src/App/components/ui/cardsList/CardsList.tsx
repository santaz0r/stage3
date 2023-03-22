import React from 'react';
import data from '../../../../data/data.json';
import CardItem from '../card/Card';
import styles from './CardsList.module.scss';
import SearchBar from '../searchBar/SearchBar';

type TProps = { [key: string]: string };
type TState = { items: typeof data; sortBy: string };

class CardsList extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { items: data, sortBy: localStorage.getItem('rssSearchBy') || '' };
  }

  setSearch = (value: string) => {
    this.setState({ sortBy: value });
  };

  render(): React.ReactNode {
    const filteredArr = this.state.items.filter((product) => {
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
          .includes(this.state.sortBy.toLowerCase().trim())
      ) {
        return true;
      }
      return false;
    });
    return (
      <div data-testid="cards-list">
        <SearchBar setSortBy={this.setSearch} sortBy={this.state.sortBy} />
        <div className={styles.cards__wrapper}>
          {filteredArr.map((i) => (
            <CardItem key={i.id} {...i} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardsList;
