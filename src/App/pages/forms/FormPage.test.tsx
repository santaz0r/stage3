import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('Render FormPage', () => {
    render(<FormPage />);
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });
});
