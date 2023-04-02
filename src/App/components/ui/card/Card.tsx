import styles from './Card.module.scss';
type TProps = {
  data: {
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
};

function CardItem({ data }: TProps) {
  return (
    <div className={styles.card} data-testid="card-item">
      <div>id: {data.id}</div>
      <div>Title: {data.title}</div>
      <div>Brand: {data.brand}</div>
      <img src={data.images[0]} alt={data.title} />
      <div>Description: {data.description}</div>
      <div>DiscountPercentage: {data.discountPercentage}</div>
      <div>Price: {data.price}</div>
      <div>Rating: {data.rating}</div>
      <div>Stock: {data.stock}</div>
    </div>
  );
}

export default CardItem;
