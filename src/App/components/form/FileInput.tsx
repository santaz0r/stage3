import React, { RefObject } from 'react';

type TProps = {
  label: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
  name: string;
};

class FileInput extends React.Component<TProps> {
  render(): React.ReactNode {
    return (
      <div>
        <div>
          <label>
            {this.props.label}
            <input type="file" ref={this.props.reference} />
          </label>
          {<div className="error">{this.props.error}</div>}
        </div>
      </div>
    );
  }
}

export default FileInput;
