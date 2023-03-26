import React from 'react';
import TextField from '../../components/form/TextField';
import CheckBoxField from '../../components/form/checkBoxField';
import SwitchField from '../../components/form/SwitchField';
import styles from './Form.module.scss';
import SelectField from '../../components/form/SelectField';

const initialState = {
  name: '',
  date: '',
  select: '',
  checkbox: false,
  switcher: '',
  image: '',
  id: 0,
};
type TProps = { [key: string]: string };
type TState = {
  data: typeof initialState;
  errors: { [key: string]: string };
  cards: (typeof initialState)[];
};

const switchOptions = ['Male', 'Female'];
const selectOptions = [
  { label: 'poroda1', value: 'poroda1' },
  { label: 'poroda2', value: 'poroda2' },
  { label: 'poroda3', value: 'poroda3' },
  { label: 'poroda4', value: 'poroda4' },
  { label: 'poroda5', value: 'poroda5' },
];

class FormPage extends React.Component<TProps, TState> {
  private nameInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private checkInput: React.RefObject<HTMLInputElement>;
  private switchInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  private fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<TProps>) {
    super(props);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.checkInput = React.createRef();
    this.switchInput = React.createRef();
    this.selectInput = React.createRef();
    this.fileInput = React.createRef();
    this.state = { data: initialState, errors: {}, cards: [] };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.nameInput.current, this.nameInput.current?.value);
    console.log(this.dateInput.current, this.dateInput.current?.value);
    console.log(this.checkInput.current, this.checkInput.current?.checked);
    console.log(this.switchInput.current, this.switchInput.current?.checked);
    console.log(this.selectInput.current, this.selectInput.current?.value);

    const newCardData: typeof initialState = {
      id: this.state.cards.length + 1,
      name: this.nameInput.current?.value || 'unnamed',
      image: this.fileInput.current?.value || '',
      checkbox: this.checkInput.current?.checked || false,
      switcher: this.switchInput.current?.checked ? 'Male' : 'Female',
      date: this.dateInput.current?.value || '',
      select: this.selectInput.current?.value || '',
    };

    this.setState({ ...this.state, cards: [...this.state.cards, newCardData] });
  };

  render(): React.ReactNode {
    return (
      <>
        <h2>Form</h2>
        <form className={styles.form} data-testid="form-page" onSubmit={this.handleSubmit}>
          <TextField label="name" name="name" error={this.state.errors.name} reference={this.nameInput} />
          <TextField
            label="Birthday"
            name="birthday"
            type="date"
            error={this.state.errors.birthday}
            reference={this.dateInput}
          />
          <CheckBoxField error={this.state.errors.check} label="passport" name="passport" reference={this.checkInput} />
          <SwitchField
            options={switchOptions}
            error={this.state.errors.switch}
            label=""
            name="gender"
            reference={this.switchInput}
          />
          <SelectField
            reference={this.selectInput}
            options={selectOptions}
            defaultOption="choose..."
            disabledOption
            error={this.state.errors.select}
            label="poroda"
            name="poroda"
          />

          <label>
            Photo:&nbsp;
            <input type="file" ref={this.fileInput} />
          </label>
          <button type="submit">submit</button>
        </form>

        <h3>Cards List</h3>

        {this.state.cards.length ? (
          <div>
            {this.state.cards.map((card) => (
              <div key={card.id}>
                <h3>{card.name}</h3>
                <img src={card.image} />
              </div>
            ))}
          </div>
        ) : (
          <p>Empty</p>
        )}
      </>
    );
  }
}

export default FormPage;
