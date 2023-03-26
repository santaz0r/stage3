import React, { RefObject } from 'react';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
};

type TState = { showPassword: boolean };

class TextField extends React.Component<TProps, TState> {
  static defaultProps: { type: string };
  constructor(props: Readonly<TProps>) {
    super(props);
    this.state = { showPassword: false };
  }

  toggleShowPassword = () => {
    this.setState((prevState) => {
      !prevState.showPassword;
    });
  };
  render(): React.ReactNode {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return (
      <div>
        <label data-htmlfor={this.props.name}>{this.props.label}</label>
        <div>
          <input
            type={this.state.showPassword ? 'text' : this.props.type}
            data-id={this.props.name}
            data-name={this.props.name}
            ref={this.props.reference}
            max={`${year}-${month}-${day}`}
          />
          {<div className="error">{this.props.error}</div>}
          {this.props.type === 'password' && (
            <label htmlFor="chk">
              <input type="checkbox" id="chk" onChange={this.toggleShowPassword} checked={this.state.showPassword} />
              {'show password'}
            </label>
          )}
        </div>
      </div>
    );
  }
}
TextField.defaultProps = {
  type: 'text',
};

export default TextField;
