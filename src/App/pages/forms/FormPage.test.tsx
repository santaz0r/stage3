import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('Render FormPage', async () => {
    render(<FormPage />);
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
    expect(screen.getByTestId('form-page')).toBeInTheDocument();

    const nameInput = screen.getByLabelText('name');
    fireEvent.change(nameInput, { target: { value: 'kekw' } });

    const birthday = screen.getByLabelText('Birthday');
    fireEvent.change(birthday, { target: { value: 'kew' } });

    const passport = screen.getByLabelText('passport');
    fireEvent.change(passport, { target: { checked: true } });

    const gender = screen.getByTestId('gender');
    fireEvent.change(gender, { target: { checked: true } });

    const breed = screen.getByLabelText('breed');
    fireEvent.change(breed, { target: { value: 'breed_1' } });

    const empty = await screen.findByTestId('empty');

    expect(empty).toBeInTheDocument();
  });
});
