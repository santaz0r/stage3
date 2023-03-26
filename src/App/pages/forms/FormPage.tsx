import React from 'react';
import TextField from '../../components/form/TextField';
import CheckBoxField from '../../components/form/checkBoxField';
import SwitchField from '../../components/form/SwitchField';
import styles from './Form.module.scss';
import SelectField from '../../components/form/SelectField';
import validator from '../../utils/validator';
import FileInput from '../../components/form/FileInput';
import FormCard from '../../components/ui/formCard/FormCard';

const initialState = {
  name: '',
  birthday: '',
  select: '',
  passport: false,
  gender: '',
  image: '',
  id: '',
};
type TProps = { [key: string]: string };
type TState = {
  errors: { [key: string]: string };
  cards: (typeof initialState)[];
};

const switchOptions = ['Male', 'Female'];
const selectOptions = [
  { label: 'breed_1', value: 'breed_1' },
  { label: 'breed_2', value: 'breed_2' },
  { label: 'breed_3', value: 'breed_3' },
  { label: 'breed_4', value: 'breed_4' },
  { label: 'breed_5', value: 'breed_5' },
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
    this.state = { errors: {}, cards: [] };
  }

  validatorConfig = {
    name: {
      isRequired: {
        message: "It's required field",
      },
      isStartCapitalLetter: {
        message: 'Name must be begin with uppercase',
      },
    },
    birthday: {
      isRequired: {
        message: "It's required field",
      },
    },
    image: {
      isRequired: {
        message: "It's required field",
      },
    },
    select: {
      isRequired: {
        message: "It's required field",
      },
    },
    passport: {
      isRequired: {
        message: 'Your pet must have a passport',
      },
    },
  };

  clearForm = () => {
    this.nameInput.current!.value = '';
    this.fileInput.current!.value = '';
    this.checkInput.current!.checked = true;
    this.switchInput.current!.checked = false;
    this.dateInput.current!.value = '';
    this.selectInput.current!.value = '';
  };

  validate = async (data: { [key: string]: string }, cfg: typeof this.validatorConfig) => {
    const validateErrors = await validator(data, cfg);
    this.setState({ ...this.state, errors: validateErrors });

    return Object.keys(validateErrors).length === 0;
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCardData: typeof initialState = {
      id: (this.state.cards.length + 1).toString(),
      name: this.nameInput.current?.value || '',
      image: this.fileInput.current?.value ? URL.createObjectURL(this.fileInput.current?.files![0] as File) : '',
      passport: this.checkInput.current?.checked || false,
      gender: this.switchInput.current?.checked ? 'Female' : 'Male',
      birthday: this.dateInput.current?.value || '',
      select: this.selectInput.current?.value || '',
    };
    const nounRequiredParams = ({ id, gender, ...rest }: Pick<typeof initialState, 'id' | 'gender'>) => rest;

    const isValid = await this.validate(nounRequiredParams(newCardData), this.validatorConfig);

    if (!isValid) {
      this.setState({ ...this.state });
    } else {
      this.setState({ ...this.state, cards: [...this.state.cards, newCardData] });
      alert('Saved');
      this.clearForm();
    }
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
          <CheckBoxField
            error={this.state.errors.passport}
            label="passport"
            name="passport"
            reference={this.checkInput}
          />
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
            disabledOption={false}
            error={this.state.errors.select}
            label="breed"
            name="breed"
          />
          <FileInput error={this.state.errors.image} name="file" label="Photo:&nbsp;" reference={this.fileInput} />

          <button type="submit">submit</button>
        </form>
        <div>
          <h3>Cards List</h3>

          {this.state.cards.length ? (
            <div className={styles.cards_list}>
              {this.state.cards.map((card) => (
                <div key={card.id}>
                  <FormCard {...card} />
                </div>
              ))}
            </div>
          ) : (
            <p>Empty</p>
          )}
        </div>
      </>
    );
  }
}

export default FormPage;
