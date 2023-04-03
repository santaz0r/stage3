import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import SwitchField from '../SwitchField';

const switchOptions = ['Male', 'Female'];

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return <SwitchField options={switchOptions} error={errors} label="" field="gender" register={register} />;
};

describe('Switcher', () => {
  it('Render Switcher', () => {
    render(<Form />);
    expect(screen.getByTestId('gender')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('Render Switcher 2', () => {
    render(<Form />);
    const switcher = screen.getByTestId('gender');
    fireEvent.change(switcher, { target: { checked: true } });
    expect(screen.getByTestId('gender')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
