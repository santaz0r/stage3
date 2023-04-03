import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import TextField from '../TextField';

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return <TextField label="name" field="name" error={errors} register={register} />;
};

describe('Text Field', () => {
  it('Render Text Field', () => {
    render(<Form />);
    expect(screen.getByText('name')).toBeInTheDocument();
  });
});
