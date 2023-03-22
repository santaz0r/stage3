import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Render App', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
