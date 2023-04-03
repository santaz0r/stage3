import React from 'react';
import styles from './FormCard.module.scss';

type TProps = {
  data: {
    name: string;
    birthday: string;
    breed: string;
    passport: boolean;
    gender: string;
    file: string;
    id: string;
  };
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
