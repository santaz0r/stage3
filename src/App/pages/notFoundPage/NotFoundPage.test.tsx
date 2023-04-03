import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('Render NotFoundPage', () => {
    render(<NotFoundPage />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/page not found/i);
  });
});
