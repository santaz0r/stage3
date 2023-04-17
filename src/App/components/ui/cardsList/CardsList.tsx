import CardItem from '../card/Card';
import styles from './CardsList.module.scss';
import { TCharacters } from '../../../types/types';

type TProps = {
  data: TCharacters['results'];
};

function CardsList({ data }: TProps) {
  return (
    <div data-testid="cards-list">
      <div className={styles.cards__wrapper}>
        {data.map((item) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
