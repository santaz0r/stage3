import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CheckBoxField from '../checkBoxField';
import React from 'react';
const ref = React.createRef<HTMLInputElement>();
describe('FormPage', () => {
  it('Render FormPage', () => {
    render(<CheckBoxField error={''} label="passport" name="passport" reference={ref} />);
    expect(screen.getByText('passport')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
