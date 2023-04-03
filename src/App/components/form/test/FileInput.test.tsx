import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';

import FileInput from '../FileInput';

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return <FileInput error={errors} field="file" label="Photo:&nbsp;" register={register} />;
};

describe('Text Field', () => {
  it('Render Text Field', () => {
    render(<Form />);
    expect(screen.getByTestId('file-input')).toBeInTheDocument();
  });
});
