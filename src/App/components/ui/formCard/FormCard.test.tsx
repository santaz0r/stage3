import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

describe('FormCard', () => {
  it('Render Item', () => {
    render(<FormCard />);
    expect(screen.getByTestId('form-card-item')).toBeInTheDocument();
  });
});
