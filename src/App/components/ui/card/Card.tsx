import React from 'react';
import styles from './Card.module.scss';
type TProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
class CardItem extends React.Component {
  item: TProps;
  constructor(props: TProps) {
    super(props);
    this.item = props;
  }
  render(): React.ReactNode {
    return (
      <div className={styles.card} data-testid="card-item">
        <div>id: {this.item.id}</div>
        <div>Title: {this.item.title}</div>
        <div>Brand: {this.item.brand}</div>
        <img src={this.item.images[0]} alt={this.item.title} />
        <div>Description: {this.item.description}</div>
        <div>DiscountPercentage: {this.item.discountPercentage}</div>
        <div>Price: {this.item.price}</div>
        <div>Rating: {this.item.rating}</div>
        <div>Stock: {this.item.stock}</div>
      </div>
    );
  }
}
export default CardItem;
