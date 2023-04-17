import { useState } from 'react';
import { TCharacters } from '../../../types/types';
import styles from './Card.module.scss';
import Modal from '../../modal/Modal';
import MoreDetailedCard from '../moreDetailedCard/MoreDetailedCard';
type TProps = {
  data: TCharacters['results'][0];
};

function CardItem({ data }: TProps) {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClick = () => {
    setIsModalActive(true);
  };
  return (
    <>
      <div className={styles.card} data-testid="card-item">
        <div>
          <b>#{data.id}</b>
        </div>
        <img src={data.image} alt={data.name} />
        <h3 style={{ textAlign: 'center', width: '100%' }}>{data.name}</h3>
        <div>Gender: {data.gender}</div>
        <div>Status: {data.status}</div>
        <div>Species: {data.species}</div>
        {data.type && <div data-testid="type">Type: {data.type}</div>}
        <button className={styles.card__btn} onClick={handleClick}>
          More detalis
        </button>
      </div>
      {isModalActive && <Modal setActive={setIsModalActive}>{<MoreDetailedCard data={data} />}</Modal>}
    </>
  );
}

export default CardItem;
