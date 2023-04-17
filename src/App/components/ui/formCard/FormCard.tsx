import styles from './FormCard.module.scss';
import { TCard } from '../../../types/types';

type TProps = {
  data: TCard;
};
function FormCard({ data }: TProps) {
  return (
    <div className={styles.form_card} data-testid="form-card-item">
      <h3>{data.name}</h3>
      <img src={data.file} alt={data.name} />
      <div>Birthday: {data.birthday}</div>
      <div>Breed: {data.breed}</div>
      <div data-testid="passport-checkbox">Has passport: {data.passport ? 'Yes' : 'No'}</div>
      <div>Gender: {data.gender}</div>
    </div>
  );
}
export default FormCard;
