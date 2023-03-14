import React from 'react';
import data from '../../../../data/data.json';
import CardItem from '../card/Card';
import styles from './CardsList.module.scss';

type TProps = { [key: string]: string };
type TState = { items: typeof data };

class CardsList extends React.Component<TProps, TState> {
  constructor(props: Readonly<TProps>) {
    super(props);
    this.state = { items: data };
    console.log(this.state, props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.cards__wrapper}>
        {this.state.items.map((i) => (
          <CardItem key={i.id} {...i} />
        ))}
      </div>
    );
  }
}

export default CardsList;
