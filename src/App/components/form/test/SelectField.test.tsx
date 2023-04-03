import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import SelectField from '../SelectField';

const selectOptions = [
  { label: 'breed_1', value: 'breed_1' },
  { label: 'breed_2', value: 'breed_2' },
  { label: 'breed_3', value: 'breed_3' },
  { label: 'breed_4', value: 'breed_4' },
  { label: 'breed_5', value: 'breed_5' },
];

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <SelectField
      options={selectOptions}
      defaultOption="choose..."
      disabledOption={false}
      error={errors}
      label="breed"
      field="breed"
      register={register}
    />
  );
};

describe('Switcher', () => {
  it('Render Switcher', () => {
    render(<Form />);
    expect(screen.getByLabelText('breed')).toBeInTheDocument();
  });
});
