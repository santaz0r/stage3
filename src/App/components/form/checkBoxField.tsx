import React, { RefObject } from 'react';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
};

class CheckBoxField extends React.Component<TProps> {
  state = { isChecked: true };
  getInputClasses = () => {
    return 'form-check-input' + (this.props.error ? ' is-invalid' : '');
  };
  render(): React.ReactNode {
    return (
      <div className="form-check mb-4">
        <input
          className={this.getInputClasses()}
          type="checkbox"
          data-id={this.props.name}
          defaultChecked={this.state.isChecked}
          ref={this.props.reference}
        />
        <label className="form-check-label" data-htmlfor={this.props.name}>
          {this.props.label}
        </label>
        {this.props.error && <div className="invalid-feedback">{this.props.error}</div>}
      </div>
    );
  }
}

export default CheckBoxField;
