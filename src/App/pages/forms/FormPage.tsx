import React from 'react';
import TextField from '../../components/form/TextField';

const initialState = {
  name: '',
  date: '',
  select: '',
  checkbox: false,
  switcher: false,
  image: '',
};
type TProps = { [key: string]: string };
type TState = {
  data: typeof initialState;
  errors: { [key: string]: string };
  cards: (typeof initialState)[];
};

class FormPage extends React.Component<TProps, TState> {
  kekw: React.RefObject<unknown>;
  kekw2: React.RefObject<unknown>;
  constructor(props: Readonly<TProps>) {
    super(props);
    this.kekw = React.createRef();
    this.kekw2 = React.createRef();
    this.state = { data: initialState, errors: {}, cards: [] };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.kekw.current.value);
    console.log(this.kekw2);
  };

  handleChange = (target: { name: string; value: string }) => {
    console.log({ [target.name]: target.value });
    this.setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  render(): React.ReactNode {
    return (
      <>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="name"
            name="name"
            onChange={this.handleChange}
            error={this.state.errors.name}
            ref={this.kekw}
          />
          <TextField
            label="surname"
            name="surname"
            onChange={this.handleChange}
            error={this.state.errors.name}
            ref={this.kekw2}
          />
          <button type="submit">submit</button>
        </form>
      </>
    );
  }
}

export default FormPage;
