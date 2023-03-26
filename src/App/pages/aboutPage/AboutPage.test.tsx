import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('Render AboutPage', () => {
    render(<AboutPage />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
