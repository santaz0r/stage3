import React from 'react';
import styles from './FormCard.module.scss';

type TProps = {
  name: string;
  birthday: string;
  select: string;
  passport: boolean;
  gender: string;
  image: string;
  id: string;
};
class FormCard extends React.Component {
  item: TProps;
  constructor(props: TProps) {
    super(props);
    this.item = props;
  }
  render(): React.ReactNode {
    return (
      <div className={styles.form_card} data-testid="form-card-item">
        <h3>{this.item.name}</h3>
        <img src={this.item.image} alt={this.item.name} />
        <div>Birthday: {this.item.birthday}</div>
        <div>Breed: {this.item.select}</div>
        <div>Has passport: {this.item.passport ? 'Yes' : 'No'}</div>
        <div>Gender: {this.item.gender}</div>
      </div>
    );
  }
}
export default FormCard;
