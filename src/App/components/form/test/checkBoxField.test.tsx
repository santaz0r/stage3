import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import CheckBoxField from '../checkBoxField';

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return <CheckBoxField label="passport" field="passport" register={register} error={errors} />;
};

describe('Checkbox', () => {
  it('Render Checkbox', () => {
    render(<Form />);
    expect(screen.getByText('passport')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    const passport = screen.getByLabelText('passport');
    fireEvent.change(passport, { target: { checked: true } });
    expect(passport).toBeChecked();
  });
});
